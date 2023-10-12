import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Creacion from './Creacion'; 

function MisCreaciones() {
  const [creaciones, setCreaciones] = useState([]);

  useEffect(() => {
    // Realiza una solicitud Axios para obtener los datos del archivo JSON local
    axios.get('creaciones.json')
      .then(response => {
        setCreaciones(response.data);
      })
      .catch(error => {
        console.error('Error al cargar los datos de creaciones:', error);
      });
  }, []);

  return (
    <div>
    <Header/>
      <h1>Mis Creaciones</h1>
      <div className="creaciones-container">
        {creaciones.map(creacion => (
          <Creacion key={creacion.id} creacion={creacion} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default MisCreaciones;
