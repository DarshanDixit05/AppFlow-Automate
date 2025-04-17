import { Router } from "express";
import { PrismaClient } from "../../generated/prisma";
import authMiddleWare from "../../middleware";

const router = Router();
const prisma = new PrismaClient()

router.get("/available", authMiddleWare, async(req, res): Promise<void> => {
    try {
        const availableTriggers = await prisma.triggerType.findMany({})
        res.status(200).json({
            triggers:availableTriggers,
            message:"Available triggers fetched successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",      
        })
    }
})

export default router;