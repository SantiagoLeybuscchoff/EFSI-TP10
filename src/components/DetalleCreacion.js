import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritosContext } from '../context/favoritosContext';
import { CreacionesContext } from '../context/creacionesContext';
import Header from './Header';
import Footer from './Footer';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; // Importa iconos de corazón para favoritos

function DetalleCreacion() {
  const { id } = useParams();
  const { agregarAFavoritos, quitarDeFavoritos } = useContext(FavoritosContext);
  const { creaciones } = useContext(CreacionesContext);
  const creacion = creaciones.find((creacion) => creacion.id === parseInt(id, 10));

  if (!creacion) {
    return <p>Cargando...</p>;
  }

  const favsLocalStorage = localStorage.getItem('favoritos');
  const favoritos = favsLocalStorage ? JSON.parse(favsLocalStorage) : [];
  const isFavorito = favoritos.some((favorito) => favorito.id === creacion.id);

  const fechaParseada = new Date(creacion.fecha);
  const fechaFormateada = format(fechaParseada, 'dd MMMM yyyy', { locale: es });

  return (
    <div className="detalle-creacion">
      <Header />
      <div className="detalle-creacion-content">
        <h1>{creacion.titulo}</h1>
        <p>{creacion.descripcion}</p>
        <img src={creacion.imagen} alt={creacion.titulo} width="640" height="640"/>
        <p>Fecha: {fechaFormateada}</p>
        {isFavorito ? (
          <button onClick={() => quitarDeFavoritos(creacion.id)} className="favorito-button">
            <FaHeart /> Quitar de Favoritos
          </button>
        ) : (
          <button onClick={() => agregarAFavoritos(creacion)} className="favorito-button">
            <FaRegHeart /> Agregar a Favoritos
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default DetalleCreacion;

