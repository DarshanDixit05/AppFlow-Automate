import { Router } from "express";
import { PrismaClient } from "../../generated/prisma";
import authMiddleWare from "../../middleware";

const router = Router();
const prisma = new PrismaClient();

router.get("/available", authMiddleWare, async (req, res): Promise<void> => {
    try {
        const availableActions = await prisma.actionType.findMany({})
        res.status(200).json({
            actions: availableActions.map((action)=>{
                return{
                    id:action.id,
                    name:action.actionType
                }
            }),
            message: "Available actions fetched successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
        })
    }
})

export default router;