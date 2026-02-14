/*const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/answer", (req, res) => {
  const answer = req.body.answer;
  const time = new Date().toISOString();

  if (!answer) {
    return res.status(400).json({ message: "No answer" });
  }

  fs.appendFileSync("answers.txt", `${time} - ${answer}\n`);

  console.log("Saved:", answer);
  res.json({ message: "Answer saved" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});*/



const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ SAVE ANSWER (already correct)
app.post("/answer", (req, res) => {
  const answer = req.body.answer;
  const time = new Date().toISOString();

  if (!answer) {
    return res.status(400).json({ message: "No answer" });
  }

  fs.appendFileSync("answers.txt", `${time} - ${answer}\n`);

  console.log("Saved:", answer);
  res.json({ message: "Answer saved" });
});

// ✅ ADD THIS — VIEW ANSWER (IMPORTANT)
app.get("/answer", (req, res) => {
  try {
    const data = fs.readFileSync("answers.txt", "utf8");
    const lines = data.trim().split("\n");
    const last = lines[lines.length - 1] || "No answer yet";

    res.json({ answer: last });
  } catch (err) {
    res.json({ answer: "No answer yet" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
