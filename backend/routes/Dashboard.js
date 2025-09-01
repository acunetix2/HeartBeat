const express = require("express");
const { protect } = require("../middleware/auth"); // adjust as needed

const router = express.Router();

router.get("/", protect, async (req, res) => {
  try {
    const data = {
      alertsCount: 12,
      logsCount: 532,
      recentAlerts: [
        { id: 1, type: "Suspicious Login", time: "2025-09-01 14:33" },
        { id: 2, type: "Failed Access Attempt", time: "2025-09-01 14:10" },
      ],
    };
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
