import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetalleCreacion() {
  const { id } = useParams();
  const [creacion, setCreacion] = useState(null);

  useEffect(() => {
    // Utiliza la ruta relativa desde la raíz del sitio web
    axios.get('/creaciones.json')
      .then(response => {
        const creacionEncontrada = response.data.find(creacion => creacion.id === id);

        if (creacionEncontrada) {
          setCreacion(creacionEncontrada);
        } else {
          console.error('Creación no encontrada.');
        }
      })
      .catch(error => {
        console.error('Error al cargar los datos de creaciones:', error);
      });
  }, [id]);

  if (!creacion) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>{creacion.titulo}</h1>
      <p>{creacion.descripcion}</p>
      <img src={creacion.imagen} alt={creacion.titulo} />
      <p>Fecha: {creacion.fecha}</p>
    
    </div>
  );
}

export default DetalleCreacion;
