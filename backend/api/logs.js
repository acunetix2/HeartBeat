const express = require("express");
const Log = require("../models/Log");
const router = express.Router();

// POST /api/logs -> ingest logs
router.post("/", async (req, res) => {
  try {
    const log = new Log(req.body);
    const saved = await log.save();
    res.json({ status: "success", id: saved._id });
  } catch (err) {
    res.status(500).json({ error: "Failed to save log" });
  }
});

// GET /api/logs -> fetch logs
router.get("/", async (req, res) => {
  try {
    const logs = await Log.find().sort({ timestamp: -1 }).limit(50);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch logs" });
  }
});

module.exports = router;
