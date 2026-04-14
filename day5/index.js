import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/check", (req, res) => {
  const password = req.body.password;

  if (password === "Laddu") {
    res.sendFile(path.join(__dirname, "public", "secret.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  }
});

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});