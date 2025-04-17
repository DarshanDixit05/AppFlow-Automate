import cors  from 'cors';
import express from "express";
import userRoutes from "./routes/userRoutes/index.js";
import zapRoutes from "./routes/zapRoutes/index.js";
import triggerRoutes from "./routes/triggerRoutes/index.js";
import actionRoutes from "./routes/actionRoutes/index.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/zap", zapRoutes);
app.use("/api/v1/trigger", triggerRoutes);
app.use("/api/v1/action", actionRoutes);


app.listen(1999, () => {    
    console.log("Server is running on port 1999");
})