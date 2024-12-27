const express = require("express");
const router = express.Router();

// Lista nastrojów
const moods = [
  "happy",
  "sad",
  "epic",
  "dark",
  "relaxing",
  "romantic",
  "motivational",
  "adventurous",
];

// Endpoint: Pobierz listę nastrojów
router.get("/", (req, res) => {
  res.json(moods);
});

module.exports = router;
