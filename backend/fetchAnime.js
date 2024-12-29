const axios = require("axios");
const mongoose = require("mongoose");
const Anime = require("./models/Anime"); // Import modelu Anime

require("dotenv").config(); // Wczytaj zmienne środowiskowe

// Połącz z MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Połączono z MongoDB"))
  .catch((err) => console.error("Błąd połączenia:", err));

// Funkcja do pobierania danych z API
const fetchAnimeData = async () => {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/top/anime");
    const animeList = response.data.data;

    for (const anime of animeList) {
      const newAnime = new Anime({
        title: anime.title,
        genres: anime.genres.map((g) => g.name),
        rating: anime.score || 0,
        imageUrl: anime.images.jpg.large_image_url,
        moods: [], // Dodaj pole `moods` jako pustą tablicę
      });

      await newAnime.save();
      console.log(`Dodano anime: ${anime.title}`);
    }

    console.log("Wszystkie dane zostały dodane!");
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);
  } finally {
    mongoose.disconnect();
  }
};
fetchAnimeData();
