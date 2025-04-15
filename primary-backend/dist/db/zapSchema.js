"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZapCreateShema = void 0;
const zod_1 = require("zod");
exports.ZapCreateShema = zod_1.z.object({
    triggerId: zod_1.z.string(),
    action: zod_1.z.array(zod_1.z.object({
        actionId: zod_1.z.string()
    }))
});
