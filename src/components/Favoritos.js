import React, { useContext } from 'react'
import { FavoritosContext } from '../context/favoritosContext';
import Footer from './Footer'
import Header from './Header'
import Creacion from './Creacion';

export default function Favoritos() {
  const { favoritos } = useContext(FavoritosContext);
  return (
    <div className="home-page">
    <Header/>
    <div className="creaciones-container">
        {favoritos.map(favorito => (
          <Creacion key={favorito.id} creacion={favorito} />
        ))}
      </div>
    <Footer/>
    </div>
  )
}
