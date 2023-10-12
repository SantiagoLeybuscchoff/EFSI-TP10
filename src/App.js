import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Info from "./components/Info";
import Favoritos from "./components/Favoritos";
import MisCreaciones from "./components/MisCreaciones";
import Contacto from "./components/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Info" element={<Info />}></Route>
          <Route path="/MisCreaciones" element={<MisCreaciones />}></Route>
          <Route path="/Favoritos" element={<Favoritos />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>

        </Routes>
      </BrowserRouter>

      
    </>
  );
}
export default App;
