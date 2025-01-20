import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryDetail = () => {
  const { genre } = useParams(); // Pobiera gatunek z URL
  const [animeList, setAnimeList] = useState([]); // Stan dla listy anime
  const [error, setError] = useState(null); // Obsługa błędów

  useEffect(() => {
    fetch(`http://localhost:5000/api/categories/${genre}`) // Port 5000 dla backendu
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setAnimeList(data))
      .catch((error) => setError(error.message));
  }, [genre]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="category-detail">
      <h1>Anime for category: {genre}</h1>
      {animeList.length > 0 ? (
        <ul>
          {animeList.map((anime) => (
            <li key={anime._id}>
              <h2>{anime.title}</h2>
              <p>Genres: {anime.genres.join(", ")}</p>
              <p>Rating: {anime.rating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No anime found for this category.</p>
      )}
    </div>
  );
};

export default CategoryDetail;
