import React from 'react';

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
        <a href={creacion.url}>Ver más</a>
      </div>
    </div>
  );
}

export default Creacion;
