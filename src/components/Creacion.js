import React from 'react';
import { Link } from 'react-router-dom';

function Creacion({ creacion }) {
  return (
    <div className="creacion-card">
      <div className="creacion-image">
        <img src={creacion.imagen} alt={creacion.titulo} width="300" height="200"  />
      </div>
      <div className="creacion-info">
        <h2>{creacion.titulo}</h2>
        <p>{creacion.descripcion}</p>
        <p>Fecha: {creacion.fecha}</p>
        <Link to={`/DetalleCreacion/${creacion.id}`} >
          Ver más
        </Link>
      </div>
    </div>
  );
}

export default Creacion;
