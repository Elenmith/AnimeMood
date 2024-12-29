const mongoose = require("mongoose");
const Anime = require("./models/Anime");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Połączono z MongoDB"))
  .catch((err) => console.error("Błąd połączenia:", err));

const addMoodsToExisting = async () => {
  try {
    // Dodaj pole `moods` jako pustą tablicę do wszystkich dokumentów, które go nie mają
    await Anime.updateMany(
      { moods: { $exists: false } }, // Znajdź dokumenty bez pola `moods`
      { $set: { moods: [] } } // Ustaw pole `moods` jako pustą tablicę
    );

    console.log("Pole `moods` zostało dodane do istniejących dokumentów!");
  } catch (err) {
    console.error("Błąd podczas aktualizacji dokumentów:", err);
  } finally {
    mongoose.disconnect();
  }
};

addMoodsToExisting();
