import React from 'react';

function Filtros({ filtrarTareas, ordenarTareasPorFecha }) {
  return (
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-secondary" onClick={() => filtrarTareas('Todas')}>
        Todas
      </button>
      <button type="button" className="btn btn-secondary" onClick={() => filtrarTareas('Pendientes')}>
        Pendientes
      </button>
      <button type="button" className="btn btn-secondary" onClick={() => filtrarTareas('Completadas')}>
        Completadas
      </button>
      <button type="button" className="btn btn-secondary" onClick={() => ordenarTareasPorFecha(true)}>
        Fecha Ascendente
      </button>
      <button type="button" className="btn btn-secondary" onClick={() => ordenarTareasPorFecha(false)}>
        Fecha Descendente
      </button>
    </div>
  );
}

export default Filtros;
