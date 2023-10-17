import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Creacion from './Creacion';
import { CreacionesContext } from '../context/creacionesContext';

function MisCreaciones() {
  const { creaciones } = useContext(CreacionesContext);

  return (
    <div>
      <Header />
      <h1>Mis Creaciones</h1>
      <div className="creaciones-container">
        <div className="creaciones-column">
          {creaciones.slice(0, Math.ceil(creaciones.length / 2)).map(creacion => (
            <Creacion key={creacion.id} creacion={creacion} />
          ))}
        </div>
        <div className="creaciones-column">
          {creaciones.slice(Math.ceil(creaciones.length / 2)).map(creacion => (
            <Creacion key={creacion.id} creacion={creacion} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  ); 
}

export default MisCreaciones;
