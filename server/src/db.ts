import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()
const mongoUrl: string = process.env.MONGO_URL as string;

export const dbConnect = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
