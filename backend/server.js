import express from "express";
import { config } from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectDB from "./db/connectDB.js";
import mongoose from "mongoose";

config();

const app = express();
const PORT = process.env.PORT || 5000;


connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB");
  app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
  });
});