const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const AuthRoutes = require("./routes/AuthRoutes");
app.use("/api/auth", AuthRoutes);

const DashboardRoutes = require("./routes/Dashboard");
app.use("/api/dashboard", DashboardRoutes);

app.get("/", (req, res) => {
  res.json({ message: "HeartBeat SIEM Backend is running 🚀" });
});

app.use("/api/logs", require("./api/logs"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

module.exports = app;
