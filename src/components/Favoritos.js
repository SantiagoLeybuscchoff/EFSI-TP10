import React, { useContext } from 'react'
import { FavoritosContext } from '../context/favoritosContext';
import Footer from './Footer'
import Header from './Header'
import Creacion from './Creacion';

export default function Favoritos() {
  //const { favoritos } = useContext(FavoritosContext);
  const favsLocalStorage = localStorage.getItem('favoritos');
  const favoritos = favsLocalStorage ? JSON.parse(favsLocalStorage) : [];
  return (
    <div className="home-page" >
      <Header />
      <div className='title-container'>
        <h1 className='title'>Favoritos</h1>
      </div>
      {favoritos.length > 0 ? (
        <div className="creaciones-container">
          {favoritos.map(favorito => (
            <Creacion key={favorito.id} creacion={favorito} />
          ))}
        </div>
      ) : (
        <h1>No hay favoritos</h1>
      )}


      <Footer />
    </div>
  )
}
