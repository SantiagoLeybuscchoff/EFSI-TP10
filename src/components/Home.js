import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Creacion from './Creacion';
import { CreacionesContext } from '../context/creacionesContext';



function Home() {
  const { creaciones } = useContext(CreacionesContext);


  return (
    <div className="home-page"> {/* Agrega una clase para identificar la página Home */}
      <Header />
      <h1>Destacados</h1>
      <div className="creaciones-container">
       {creaciones.slice(0, 6).map(creacion => (
         <Creacion key={creacion.id} creacion={creacion} />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
