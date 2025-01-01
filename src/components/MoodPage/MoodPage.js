import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MoodPage() {
  const { mood } = useParams(); // Pobieramy parametr "mood" z URL
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/anime/moods/${mood}`
        );
        setAnimeList(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Błąd podczas pobierania anime:", err);
        setLoading(false);
      }
    };

    fetchAnime();
  }, [mood]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (animeList.length === 0) {
    return <p>No anime found for mood: {mood}</p>;
  }

  return (
    <div>
      <h1>Anime for mood: {mood}</h1>
      <ul>
        {animeList.map((anime) => (
          <li key={anime._id}>
            <h2>{anime.title}</h2>
            <p>Genres: {anime.genres.join(", ")}</p>
            <p>Rating: {anime.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoodPage;
