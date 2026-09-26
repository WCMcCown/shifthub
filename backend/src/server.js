import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import nurseRoutes from "./routes/nurse.routes.js";
import scheduleRoutes from "./routes/schedule.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/nurses", nurseRoutes);
app.use("/schedule", scheduleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`ShiftHub backend running on port ${PORT}`);
});
