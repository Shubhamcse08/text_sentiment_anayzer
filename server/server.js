const express = require("express");
const { spawn } = require("child_process");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/analyze", (req, res) => {
    const text = req.body.text;

    const process = spawn("python", ["../vader/analyze.py", text]);

    let result = "";

    process.stdout.on("data", (data) => {
        result += data.toString();
    });

    process.stderr.on("data", (data) => {
        console.error("Error:", data.toString());
    });

    process.on("close", () => {
        try {
            res.json(JSON.parse(result));
        } catch (err) {
            res.status(500).json({ error: "Failed to parse result" });
        }
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
