import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import instituteRoutes from "./routes/instituteRoutes.js";
import connectDB from "./db/config.js";
import cors from "cors";
connectDB();
dotenv.config();
const app = express();

let corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,",
  credentials: true,
};

app.use(express.json({ extended: false }));

app.use(cors(corsOptions));
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/institute", instituteRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server is Running on", PORT));
