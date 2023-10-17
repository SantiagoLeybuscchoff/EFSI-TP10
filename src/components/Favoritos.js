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
    {favoritos.length > 0 ? (
        <div className="creaciones-container">
        {favoritos.map(favorito => (
          <Creacion key={favorito.id} creacion={favorito} />
        ))}
      </div>
      ) : (
        <h3>No hay favoritos</h3>
      )}
    
    <Footer/>
    </div>
  )
}
