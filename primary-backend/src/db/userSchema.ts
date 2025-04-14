import z from "zod";

export const UserSignUpSchema = z.object({
    username : z.string().min(3),
    email : z.string().email(),
    password: z.string().min(5)
})
    
export const UserSignInSchema = z.object({
    email : z.string().email(),
    password: z.string().min(5)
})