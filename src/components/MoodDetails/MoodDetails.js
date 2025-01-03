import React from "react";
import { useParams } from "react-router-dom";

const MoodDetail = () => {
  const { mood } = useParams();

  // Przykładowe dane dla rekomendacji (zastąp własnymi danymi z API/bazy)
  const recommendations = {
    relaxing: ["Aria the Animation", "Mushishi", "Natsume's Book of Friends"],
    exciting: ["Attack on Titan", "One Punch Man", "Jujutsu Kaisen"],
    romantic: ["Your Name", "Toradora!", "Clannad"],
    dramatic: ["Death Note", "Code Geass", "Re:Zero"],
    funny: ["Gintama", "KonoSuba", "Nichijou"],
  };

  const animeList = recommendations[mood.toLowerCase()] || [];

  return (
    <div className="mood-detail">
      <h1>{mood.charAt(0).toUpperCase() + mood.slice(1)} Anime</h1>
      {animeList.length > 0 ? (
        <ul>
          {animeList.map((anime, index) => (
            <li key={index}>{anime}</li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available for this mood.</p>
      )}
    </div>
  );
};

export default MoodDetail;
