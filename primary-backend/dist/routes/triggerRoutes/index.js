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
const prisma_1 = require("../../generated/prisma");
const middleware_1 = __importDefault(require("../../middleware"));
const router = (0, express_1.Router)();
const prisma = new prisma_1.PrismaClient();
router.get("/available", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const availableTriggers = yield prisma.triggerType.findMany({});
        res.status(200).json({
            triggers: availableTriggers.map((trigger) => {
                return {
                    id: trigger.id,
                    name: trigger.triggerType
                };
            }),
            message: "Available triggers fetched successfully"
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
}));
exports.default = router;
