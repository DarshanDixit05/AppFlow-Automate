"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const index_js_1 = __importDefault(require("./routes/userRoutes/index.js"));
const index_js_2 = __importDefault(require("./routes/zapRoutes/index.js"));
const index_js_3 = __importDefault(require("./routes/triggerRoutes/index.js"));
const index_js_4 = __importDefault(require("./routes/actionRoutes/index.js"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/user", index_js_1.default);
app.use("/api/v1/zap", index_js_2.default);
app.use("/api/v1/trigger", index_js_3.default);
app.use("/api/v1/action", index_js_4.default);
app.listen(1999, () => {
    console.log("Server is running on port 1999");
});
