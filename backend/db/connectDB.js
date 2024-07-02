import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
  } catch (err) {
    console.log("Error connecting to MongoDB", err.message);
  }
};

export default connectDB;
