const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { spawn } = require("child_process");
const path = require("path");

const app = express();
const PORT =  5000;

app.use(cors());
app.use(bodyParser.json());

// Route: POST /api/analyze
app.post("/api/analyze", (req, res) => {
  const text = req.body.text;

  if (!text) {
    return res.status(400).json({ error: "Text is required." });
  }

  // Run Python script
  const python = spawn("python", [path.join(__dirname, "vader", "analyze.py"), text]);

  let result = "";

  python.stdout.on("data", (data) => {
    result += data.toString();
  });

  python.stderr.on("data", (data) => {
    console.error(`Python stderr: ${data}`);
  });

  python.on("close", (code) => {
    try {
      const jsonResult = JSON.parse(result);
      res.json(jsonResult);
    } catch (err) {
      console.error("Error parsing result:", result);
      res.status(500).json({ error: "Failed to analyze sentiment." });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
