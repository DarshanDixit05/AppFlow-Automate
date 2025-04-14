import cors  from 'cors';
import express from "express";
import userRoutes from "./routes/userRoutes/index.js";
import zapRoutes from "./routes/zapRoutes/index.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/zap", zapRoutes);


app.listen(3000, () => {    
    console.log("Server is running on port 3000");
})