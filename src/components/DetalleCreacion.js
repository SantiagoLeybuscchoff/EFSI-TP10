import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritosContext } from '../context/favoritosContext';
import { CreacionesContext } from '../context/creacionesContext';
import Header from './Header';
import Footer from './Footer';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

function DetalleCreacion() {
  const { id } = useParams();
  const { agregarAFavoritos, quitarDeFavoritos } = useContext(FavoritosContext);
  const { creaciones } = useContext(CreacionesContext);
  const creacion = creaciones.find((creacion) => creacion.id === parseInt(id, 10));
  const favsLocalStorage = localStorage.getItem('favoritos');
  const favoritos= JSON.parse(favsLocalStorage);
  const fechaParseada = new Date(creacion.fecha);
  const fechaFormateada = format(fechaParseada, 'dd MMMM yyyy', { locale: es });


  if (!creacion) {
    return <p>Cargando...</p>;
  }


 

  const isFavorito = favoritos.some((favorito) => favorito.id === creacion.id);

  return (
    <div>
      <Header/>
      <h1>{creacion.titulo}</h1>
      <p>{creacion.descripcion}</p>
      <img src={creacion.imagen} alt={creacion.titulo} width="750" height="750"/>
      <p>{fechaFormateada}</p>
      {isFavorito ? (
        <button onClick={() => quitarDeFavoritos(creacion.id)}>Quitar de Favoritos</button>
      ) : (
        <button onClick={() => agregarAFavoritos(creacion)}>Agregar a Favoritos</button>
      )}
      <Footer/>
    </div>
  );
}

export default DetalleCreacion;
