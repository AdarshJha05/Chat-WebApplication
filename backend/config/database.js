import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Simply pass the MONGO_URI without additional options
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;
