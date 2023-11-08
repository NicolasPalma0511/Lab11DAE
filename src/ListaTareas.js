import React from 'react';

const ListaTareas = ({ tareas, eliminarTarea, editarTarea, toggleCompletada }) => {
  return (
    <ul className="list-group">
      {tareas.map((tarea, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>{tarea.texto}</span>
            <small className="ml-3"> - {tarea.fechaCreacion.toLocaleString()}</small>
          </div>
          <div>
            <button onClick={() => toggleCompletada(index)} className={`btn ${tarea.completada ? 'btn-secondary' : 'btn-success'} btn-sm mr-2`}>
              {tarea.completada ? 'Desmarcar' : 'Completar'}
            </button>
            <button onClick={() => editarTarea(index, prompt('Editar tarea:', tarea.texto))} className="btn btn-warning btn-sm mr-2">
              Editar
            </button>
            <button onClick={() => eliminarTarea(index)} className="btn btn-danger btn-sm">
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListaTareas;
