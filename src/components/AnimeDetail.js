import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AnimeDetail.css";

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/anime/${id}`);
        const data = await response.json();
        setAnime(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching anime details:", err);
        setLoading(false);
      }
    };

    fetchAnimeDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!anime) {
    return <p>Anime not found</p>;
  }

  return (
    <div className="anime-detail">
      <div className="header">
        <img src={anime.imageUrl} alt={anime.title} />
        <div>
          <h1>{anime.title}</h1>
          <p>Rating: {anime.rating}</p>
          <p>Duration: {anime.duration || "Unknown"}</p>
          <p>Release Date: {anime.releaseDate || "Unknown"}</p>
          <p>Director: {anime.director || "Unknown"}</p>
        </div>
      </div>

      <div className="genres">
        <h3>Genres</h3>
        <p>{anime.genres?.join(", ") || "No genres available"}</p>
      </div>

      <div className="moods">
        <h3>Moods</h3>
        <p>{anime.moods?.join(", ") || "No moods available"}</p>
      </div>

      <div className="characters">
        <h3>Main Characters</h3>
        <ul>
          {anime.characters?.map((character, index) => (
            <li key={index}>{character}</li>
          )) || <p>No characters available</p>}
        </ul>
      </div>

      <div className="voice-cast">
        <h3>Voice Cast</h3>
        <ul>
          {anime.voiceCast?.map((voice, index) => (
            <li key={index}>{voice}</li>
          )) || <p>No voice cast available</p>}
        </ul>
      </div>

      <div className="streaming">
        <h3>Where to Watch</h3>
        <p>
          {anime.streamingPlatforms?.join(", ") ||
            "No streaming platforms available"}
        </p>
      </div>

      <div className="gallery">
        <h3>Gallery</h3>
        <div className="gallery-images">
          {anime.gallery?.map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index}`} />
          )) || <p>No images available</p>}
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
