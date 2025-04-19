import { Router } from "express";
import authMiddleWare from "../../middleware";
import { ZapCreateShema } from "../../db/zapSchema";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient()
const router=Router()

router.post("/create", authMiddleWare, async(req, res): Promise<void> => {
    const body = req.body
    // @ts-ignore
    const userId = req.id
    const parsedZapCreateBody = ZapCreateShema.safeParse(body)
    if(!parsedZapCreateBody.success){
        res.status(400).json({ message: "Invalid inputs to create zap" })
        return 
    }

    try {
        await prisma.$transaction(async () => {
            const zap = await prisma.zap.create({
                // @ts-ignore
                data:{
                    triggerId: "",
                    userId: parseInt(userId),
                    action:{
                        create: parsedZapCreateBody.data?.actions.map((action, index)=>{
                            return{
                                actionId: action.actionId,
                                executionOrder: index
                            }
                        })
                    }
                }
            })
    
            const trigger = await prisma.trigger.create({
                // @ts-ignore
                data:{
                    triggerId: parsedZapCreateBody.data?.triggerId,
                    zapId: zap.id
                }
            })
    
            await prisma.zap.update({
                where:{
                    id: zap.id
                },
                data:{
                    triggerId: trigger.id
                }
            })
        })
        res.status(200).json({ message: "Zap created successfully" })
    }catch (e){
        console.error(e)
        res.status(500).json({ message: "Internal server error" })
    }
})

router.get("/:zapId", authMiddleWare, async(req, res)=>{
    try {
        // @ts-ignore
        const userId = req.id
        const zap = await prisma.zap.findUnique({
            where:{
                id: req.params.zapId,
                userId: userId
            },
            include:{
                action:{
                    include:{
                        actionType:true,
                    }
                },
                trigger:{
                    include:{
                        triggerType:true
                    }
                }
            }
        })
        res.status(200).json({ zap:zap, message: "Zap updated successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
})

router.get("/", authMiddleWare, async(req, res)=>{  
    try {
        // @ts-ignore
        const userId = req.id
        const zaps = await prisma.zap.findMany({
            where:{
                userId: userId
            },
            include:{
                action:{
                    include:{
                        actionType:true,
                    }
                },
                trigger:{
                    include:{
                        triggerType:true
                    }
                }
            }
        })
        res.status(200).json({ zaps:zaps, message: "Zap data fetched successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
})

export default router