import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CreacionesContext = createContext();

const CreacionesProvider = ({ children }) => {
  const [creaciones, setCreaciones] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("creaciones.json") // Asegúrate de proporcionar la ruta correcta
      .then((response) => {
        setCreaciones(response.data);
        setLoading(false); // Indicar que la carga ha terminado
      })
      .catch((error) => {
        console.error('Error al cargar los datos de creaciones:', error);
        setLoading(false); // Asegurarse de que la carga termine en caso de error
      });
  }, []);
  


  // Esperar a que la carga de datos termine antes de proporcionar el contexto
  if (loading) {
    return <p>Cargando creacion...</p>;
  }

  

  return (
    <CreacionesContext.Provider
      value={{ creaciones}}
    >
      {children}
    </CreacionesContext.Provider>
  );
};

export default CreacionesProvider;
