import { Router } from "express";
import { UserSignUpSchema, UserSignInSchema } from "../../db/userSchema";
import { PrismaClient } from "../../generated/prisma";
import { JWT_SECRET } from '../../config';
import jwt from "jsonwebtoken";
import authMiddleWare from "../../middleware";

const prisma = new PrismaClient()

const router = Router();

router.post("/signup", async (req, res): Promise<void> => {
    const body = req.body;

    const parsedBody = UserSignUpSchema.safeParse(body)

    if (!parsedBody.success) {
        res.status(411).json({ message: "Incorrect inputs" })
        return;
    }

    const userExists = await prisma.user.findFirst({
        where: {
            email: parsedBody.data?.email,
        },
    })

    if (userExists) {
        res.status(409).json({ message: "User already exists" })
        return
    }

    const { username, email, password } = parsedBody.data as unknown as any;
    await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: password,
        },
    })
    res.status(200).json({ message: "User signed up successfully" })
})

router.post("/signin", async (req, res): Promise<void> => {
    const body = req.body;
    const parsedBody = UserSignInSchema.safeParse(body);

    if (!parsedBody.success) {
        res.status(411).json({ message: "Incorrect inputs" })
        return
    }

    const { email, password } = parsedBody.data as unknown as any;

    const user = await prisma.user.findFirst({
        where: {
            email: email,
            password: password,
        },
    })

    if (!user) {
        res.status(409).json({ message: "User does not exist" })
        return
    }

    const token = jwt.sign(
        {
            id: user?.id,
        },
        JWT_SECRET
    )

    res.status(200).json({ token: token, message: "User signed in successfully" })
})

router.get("/", authMiddleWare, async (req, res): Promise<void> => {
    //@ts-ignore
    const id = req.id

    const user = await prisma.user.findFirst({
        where: {
            id: id,
        },
    })

    if (!user) {
        res.status(409).json({ message: "User does not exist" })
        return
    }

    res.status(200).json({
        user: {
            id: user?.id,
            username: user?.username,
            email: user?.email,
        },
        message: "User data fetched successfully",
    })
})

export default router;