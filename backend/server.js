import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import {connectDB} from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//auth
app.use('/api/auth', authRoutes)

app.use(express.json());
app.listen(5000, ()=> {
    connectDB();
    console.log("server is running on http://localhost:"+PORT)})
app.use(cookieParser());