import express from "express"
import { PrismaClient } from "./generated/prisma/client"

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

app.post("/hooks/catch/:userId/:zapId", async(req, res)=>{
    const {userId, zapId} = req.params
    const body = req.body

    // add the zap activity in db
    await prisma.$transaction(async ()=>{
        const zapRun = await prisma.zapRun.create({
            data: {
                zapId: zapId,
                metaData:body
            }
        })

        await prisma.zapRunOutbox.create({
            data:{
                zapRunId: zapRun.id
            }
        })
    })
    res.json({
        message: "Zap run added successfully"
    })
})

app.listen(8080, ()=>{
    console.log("Server is running on port 8080")
})