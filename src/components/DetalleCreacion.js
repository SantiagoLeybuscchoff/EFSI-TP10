import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritosContext } from '../context/favoritosContext';
import { CreacionesContext } from '../context/creacionesContext';
function DetalleCreacion() {
  const { id } = useParams();
  const { favoritos, agregarAFavoritos, quitarDeFavoritos } = useContext(FavoritosContext);
  const { creaciones } = useContext(CreacionesContext);
  const creacion = creaciones.find((creacion) => creacion.id === parseInt(id, 10));
 


  //esto esta medio mal, porque cuando borro una creacion de favoritos no me deja entrar al detalleCreacion gracias a esta condicion
  if (!creacion) {
    return <p>Cargando...</p>;
  }


 

  const isFavorito = favoritos.some((favorito) => favorito.id === creacion.id);

  return (
    <div>
      <h1>{creacion.titulo}</h1>
      <p>{creacion.descripcion}</p>
      <img src={creacion.imagen} alt={creacion.titulo} width="750" height="750"/>
      <p>Fecha: {creacion.fecha}</p>
      {isFavorito ? (
        <button onClick={() => quitarDeFavoritos(creacion.id)}>Quitar de Favoritos</button>
      ) : (
        <button onClick={() => agregarAFavoritos(creacion)}>Agregar a Favoritos</button>
      )}
    </div>
  );
}

export default DetalleCreacion;
