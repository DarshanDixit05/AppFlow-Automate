"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userSchema_1 = require("../../db/userSchema");
const prisma_1 = require("../../generated/prisma");
const config_1 = require("../../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const middleware_1 = __importDefault(require("../../middleware"));
const prisma = new prisma_1.PrismaClient();
const router = (0, express_1.Router)();
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const body = req.body;
    const parsedBody = userSchema_1.UserSignUpSchema.safeParse(body);
    if (!parsedBody.success) {
        res.status(411).json({ message: "Incorrect inputs" });
        return;
    }
    const userExists = yield prisma.user.findFirst({
        where: {
            email: (_a = parsedBody.data) === null || _a === void 0 ? void 0 : _a.email,
        },
    });
    if (userExists) {
        res.status(409).json({ message: "User already exists" });
        return;
    }
    const { username, email, password } = parsedBody.data;
    yield prisma.user.create({
        data: {
            username: username,
            email: email,
            password: password,
        },
    });
    res.status(200).json({ message: "User signed up successfully" });
}));
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const parsedBody = userSchema_1.UserSignInSchema.safeParse(body);
    if (!parsedBody.success) {
        res.status(411).json({ message: "Incorrect inputs" });
        return;
    }
    const { email, password } = parsedBody.data;
    const user = yield prisma.user.findFirst({
        where: {
            email: email,
            password: password,
        },
    });
    if (!user) {
        res.status(409).json({ message: "User does not exist" });
        return;
    }
    const token = jsonwebtoken_1.default.sign({
        id: user === null || user === void 0 ? void 0 : user.id,
    }, config_1.JWT_SECRET);
    res.status(200).json({ token: token, message: "User signed in successfully" });
}));
router.get("/", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const id = req.id;
    const user = yield prisma.user.findFirst({
        where: {
            id: id,
        },
    });
    if (!user) {
        res.status(409).json({ message: "User does not exist" });
        return;
    }
    res.status(200).json({
        user: {
            username: user === null || user === void 0 ? void 0 : user.username,
            email: user === null || user === void 0 ? void 0 : user.email,
        },
        message: "User data fetched successfully",
    });
}));
exports.default = router;
