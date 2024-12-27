const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Backend działa!");
});

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
