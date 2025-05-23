"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignInSchema = exports.UserSignUpSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.UserSignUpSchema = zod_1.default.object({
    username: zod_1.default.string().min(3),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(5)
});
exports.UserSignInSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(5)
});
