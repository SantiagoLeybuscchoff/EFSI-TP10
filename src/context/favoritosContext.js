import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FavoritosContext = createContext();

const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const favoritosGuardados = localStorage.getItem("favoritos");
    if (favoritosGuardados) {
      setFavoritos(JSON.parse(favoritosGuardados));
    }
    setLoading(false); 
  }, []);

  const agregarAFavoritos = (creacion) => {
    const nuevosFavoritos = [...favoritos, creacion];
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };

  const quitarDeFavoritos = (id) => {
    const nuevosFavoritos = favoritos.filter((creacion) => creacion.id !== id);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };

  if (loading) {
    return <p>Cargando favoritos...</p>;
  }

  

  return (
    <FavoritosContext.Provider
      value={{ favoritos, agregarAFavoritos, quitarDeFavoritos }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;
