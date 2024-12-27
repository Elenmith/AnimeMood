import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";

function App() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/anime")
      .then((response) => setAnimeList(response.data))
      .catch((error) => console.error("Błąd podczas pobierania anime:", error));
  }, []);

  return (
    <div>
      <Header />
      <main>{/* Główna zawartość strony */}</main>
    </div>
  );
}

export default App;
