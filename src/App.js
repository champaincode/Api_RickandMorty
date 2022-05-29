import Navbar from "./components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

import Personajes from "./components/Personajes";
import Pagination from "./components/Pagination";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});

  const inicialUrl = "https://rickandmortyapi.com/api/character"

  const consumingApi = (url) => {
    axios.get(url).then((res) => {
      setPersonajes(res.data.results);
      setInfo(res.data.info);
    });
  };

  useEffect(() => {
    consumingApi(inicialUrl)
  }, []);

  const onPrevious = (e) => {
    consumingApi(info.prev)
  };

  const onNext = () => {
    consumingApi(info.next)
  };

  return (
    <>
      <Navbar brand={"Rick and Morty app"} />

      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Personajes personajes={personajes} />
        <Pagination />
      </div>
    </>
  );
}

export default App;
