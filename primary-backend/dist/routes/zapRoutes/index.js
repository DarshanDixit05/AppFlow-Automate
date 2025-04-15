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
const middleware_1 = __importDefault(require("../../middleware"));
const zapSchema_1 = require("../../db/zapSchema");
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const router = (0, express_1.Router)();
router.post("/create", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    // @ts-ignore
    const userId = req.id;
    const parsedZapCreateBody = zapSchema_1.ZapCreateShema.safeParse(body);
    if (!parsedZapCreateBody.success) {
        res.status(400).json({ message: "Invalid inputs to create zap" });
    }
    try {
        yield prisma.$transaction(() => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            const zap = yield prisma.zap.create({
                // @ts-ignore
                data: {
                    triggerId: "",
                    userId: parseInt(userId),
                    action: {
                        create: (_a = parsedZapCreateBody.data) === null || _a === void 0 ? void 0 : _a.action.map((action, index) => {
                            return {
                                actionId: action.actionId,
                                executionOrder: index
                            };
                        })
                    }
                }
            });
            const trigger = yield prisma.trigger.create({
                // @ts-ignore
                data: {
                    triggerId: (_b = parsedZapCreateBody.data) === null || _b === void 0 ? void 0 : _b.triggerId,
                    zapId: zap.id
                }
            });
            yield prisma.zap.update({
                where: {
                    id: zap.id
                },
                data: {
                    triggerId: trigger.id
                }
            });
        }));
        res.status(200).json({ message: "Zap created successfully" });
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal server error" });
    }
}));
router.get("/:zapId", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // @ts-ignore
        const userId = req.id;
        const zap = yield prisma.zap.findUnique({
            where: {
                id: req.params.zapId,
                userId: userId
            },
            include: {
                action: true,
                trigger: true
            }
        });
        res.status(200).json({ zap: zap, message: "Zap updated successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
router.get("/", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // @ts-ignore
        const userId = req.id;
        const zaps = yield prisma.zap.findMany({
            where: {
                userId: userId
            },
            include: {
                action: true,
                trigger: true
            }
        });
        res.status(200).json({ zaps: zaps, message: "Zap data fetched successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
exports.default = router;
