import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

function Creacion({ creacion }) {
  const fechaParseada = new Date(creacion.fecha);
  
  const fechaFormateada = format(fechaParseada, 'dd MMMM yyyy', { locale: es });

  return (
    <Link to={`/DetalleCreacion/${creacion.id}`} className="creacion-card">
      <div className="creacion-image">
        <img src={creacion.imagen} alt={creacion.titulo} width="150" height="100" />
      </div>
      <div className="creacion-info">
        <h2>{creacion.titulo}</h2>
        <p>{creacion.descripcion}</p>
        <p>{fechaFormateada}</p>
      </div>
    </Link>
  );
}

export default Creacion;
