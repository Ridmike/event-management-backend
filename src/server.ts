import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "./config/config";
import { connectDB } from "./config/db";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Database connection
connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Port
const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server running in ${config.nodeEnv} mode on port ${PORT}`);
});
