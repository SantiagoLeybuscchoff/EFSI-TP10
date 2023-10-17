import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Info from "./components/Info";
import Favoritos from "./components/Favoritos";
import MisCreaciones from "./components/MisCreaciones";
import Contacto from "./components/Contacto";
import DetalleCreacion from "./components/DetalleCreacion";
import FavoritosProvider from "./context/favoritosContext";

function App() {
  return (
    <>
    <FavoritosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Info" element={<Info />}></Route>
          <Route path="/MisCreaciones" element={<MisCreaciones />}></Route>
          <Route path="/Favoritos" element={<Favoritos />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
          <Route path="/DetalleCreacion/:id" element={<DetalleCreacion />}></Route>

        </Routes>
      </BrowserRouter>
    </FavoritosProvider>

      
    </>
  );
}
export default App;
