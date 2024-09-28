// const express = require('express')//method -1
import express from "express"; // method -2 add "type":"module", in package.json
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({});

const app = express();

const PORT = process.env.PORT || 8000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:3000',  // Allow requests from the frontend
  credentials: true,  // Allow cookies to be sent
};

app.use(cors(corsOptions));


// app.use(
//   cors({
//     origin: "http://localhost:3000", // Your frontend URL
//     credentials: true, // Allow cookies to be sent
//   })
// );

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listen at  port ${PORT}`);
});
