import express from 'express'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'
import cookieParser from "cookie-parser"
import cors from "cors"
import { app, server, io } from './lib/socket.js'
import path from 'path'
import { fileURLToPath } from "url";

dotenv.config()
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.resolve(__dirname, "../../frontend/dist");

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(frontendPath));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(frontendPath, "index.html"));
  });
}

server.listen(PORT, () => {
    console.log("Server is running on Port : " + PORT)
    connectDB();
})