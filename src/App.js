import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect} from "react";
import Contexto from "./contexto";
import './App.css';
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Navbar from "./components/Navbar";

function App() {
  const [fotos, setfotos] = useState([])
  const estadocompartido = { fotos, setfotos }
  const API_KEY = "an741sHQsKSC9OIDdez5P4NMqkrgoCxl4zt06psYyHm05YKJEoFpzPen";
  const url = `https://api.pexels.com/v1/search?query="nature"&per_page=20`

  useEffect(() => {
    obtenerJson()
  }, [])


  const obtenerJson = async () => {
    const response = await fetch(url, { headers: { Authorization: API_KEY } })
    const data = await response.json()
    var arreglofotos = []
    data.photos.forEach(element => {
      arreglofotos.push(element)
    });
    setfotos(arreglofotos)
  }
  return (
    <div className="App">
      <Contexto.Provider value={estadocompartido}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Favoritos" element={<Favoritos />}></Route>
          </Routes>
        </BrowserRouter>
      </Contexto.Provider>
    </div>
  );
}

export default App;
