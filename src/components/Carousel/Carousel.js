import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import { useNavigate } from "react-router-dom";

const Carousel = ({ animeList }) => {
  const navigate = useNavigate();

  // Losowe sortowanie tablicy anime
  const shuffledAnimeList = [...animeList]
    .sort(() => Math.random() - 0.5)
    .slice(0, 50);

  // Ustawienia karuzeli
  const settings = {
    infinite: true, // Nieskończona pętla
    speed: 2000, // Prędkość przesuwania
    slidesToShow: 5, // Liczba widocznych obrazów
    slidesToScroll: 1, // Liczba przesuwanych obrazów
    autoplay: true, // Automatyczne przesuwanie
    autoplaySpeed: 2000, // Czas przesunięcia
    pauseOnHover: true, // Zatrzymanie najechania myszką
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {shuffledAnimeList.map((anime) => (
          <div
            key={anime._id} // Użycie `_id` jako klucza
            className="carousel-slide"
            onClick={() => navigate(`/anime/${anime._id}`)} // Przekazanie `_id` w URL
          >
            <img src={anime.imageUrl} alt={anime.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
