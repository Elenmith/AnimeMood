import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import { useNavigate } from "react-router-dom";

const Carousel = ({ animeList }) => {
  // Ustawienia karuzeli

  const navigate = useNavigate();

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
      <h2>Anime Posters</h2>
      <Slider {...settings}>
        {animeList.map((anime) => (
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
