import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FavoritosContext = createContext();

const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("creaciones.json") // Asegúrate de proporcionar la ruta correcta
      .then((response) => {
        setFavoritos(response.data);
        setLoading(false); // Indicar que la carga ha terminado
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Asegurarse de que la carga termine en caso de error
      });
  }, []);

  const agregarAFavoritos = (creacion) => {
    setFavoritos([...favoritos, creacion]);
  };

  const quitarDeFavoritos = (id) => {
    const nuevosFavoritos = favoritos.filter((creacion) => creacion.id !== id);
    setFavoritos(nuevosFavoritos);
  };

  // Esperar a que la carga de datos termine antes de proporcionar el contexto
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
