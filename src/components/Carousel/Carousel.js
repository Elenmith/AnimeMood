import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import { useNavigate } from "react-router-dom";

const Carousel = ({ animeList, speed = 2000, autoplaySpeed = 3000 }) => {
  const navigate = useNavigate();

  // Losowe sortowanie tablicy anime
  const shuffledAnimeList = [...animeList]
    .sort(() => Math.random() - 0.5)
    .slice(0, 50);

  // Ustawienia karuzeli
  const settings = {
    infinite: true,
    speed, // Prędkość przesuwania (z props)
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed, // Czas przesunięcia (z props)
    pauseOnHover: false,
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
