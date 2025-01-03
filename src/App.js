import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MoodProvider } from "./context/MoodContext";
import MoodPage from "./components/MoodPage/MoodPage";
import AnimeDetail from "./components/AnimeDetail";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import Moods from "./components/Moods/Moods";
import MoodDetail from "./components/MoodDetails/MoodDetails"; // Nowa podstrona dla szczegółów nastroju

function App() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/anime")
      .then((response) => setAnimeList(response.data))
      .catch((error) => console.error("Błąd podczas pobierania anime:", error));
  }, []);

  return (
    <Router>
      <MoodProvider>
        <Header />
        <Routes>
          {/* Strona główna */}
          <Route path="/" element={<Main />} />

          {/* Strona wyników dla nastrojów */}
          <Route path="/moods/:mood" element={<MoodPage />} />

          {/* Strona szczegółowa anime */}
          <Route path="/anime/:id" element={<AnimeDetail />} />

          <Route path="/categories" element={<Categories />} />

          <Route path="/moods" element={<Moods />} />

          <Route path="/moods/:mood" element={<MoodDetail />} />
        </Routes>
        <Footer />
      </MoodProvider>
    </Router>
  );
}

export default App;
