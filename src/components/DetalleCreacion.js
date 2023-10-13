import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritosContext } from '../context/FavoritosContext';
function DetalleCreacion() {
  const { id } = useParams();
  const { favoritos, agregarAFavoritos, quitarDeFavoritos } = useContext(FavoritosContext);
  const creacion = favoritos.find((creacion) => creacion.id === parseInt(id, 10));

  if (!creacion) {
    return <p>Cargando...</p>;
  }

  const isFavorito = favoritos.some((favorito) => favorito.id === creacion.id);

  return (
    <div>
      <h1>{creacion.titulo}</h1>
      <p>{creacion.descripcion}</p>
      <img src={creacion.imagen} alt={creacion.titulo} />
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
