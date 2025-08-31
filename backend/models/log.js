const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  source: { type: String, required: true },
  event_type: { type: String, required: true },
  severity: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  metadata: { type: Object },
});

module.exports = mongoose.model("Log", logSchema);
