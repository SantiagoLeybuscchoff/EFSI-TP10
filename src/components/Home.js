import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Creacion from './Creacion';

function Home() {
  const [creaciones, setCreaciones] = useState([]);

  useEffect(() => {
    // Realiza una solicitud Axios para obtener los datos del archivo JSON local
    axios.get('/creaciones.json')
      .then(response => {
        // Limita las creaciones a las primeras 6
        const primeras6Creaciones = response.data.slice(0, 6);
        setCreaciones(primeras6Creaciones);
      })
      .catch(error => {
        console.error('Error al cargar los datos de creaciones:', error);
      });
  }, []);

  return (
<div>
    <Header/>
    <h1>Destacados</h1>
      <div className="creaciones-container">
        {creaciones.map(creacion => (
          <Creacion key={creacion.id} creacion={creacion} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
