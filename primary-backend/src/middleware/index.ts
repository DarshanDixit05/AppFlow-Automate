import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";


export default async function authMiddleWare(req:Request, res:Response, next:NextFunction){
    //@ts-ignore
    const authToken = req.headers.authorization as unknown as string;

    const token = jwt.verify(authToken, JWT_SECRET);
    if(token){
        //@ts-ignore
        req.id = token.id;
        next()
    }else{
        res.status(401).json({message:"Unauthorized"})
    }
} 