import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TareaForm = ({ agregarTarea }) => {
  const [texto, setTexto] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState(new Date());

  const manejarCambio = (e) => {
    setTexto(e.target.value);
  };

  const manejarFechaCambio = (date) => {
    setFechaCreacion(date);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    agregarTarea(texto, fechaCreacion);
    setTexto('');
    setFechaCreacion(new Date());
  };

  return (
    <form onSubmit={manejarSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nueva tarea"
          value={texto}
          onChange={manejarCambio}
        />
        <DatePicker
          selected={fechaCreacion}
          onChange={manejarFechaCambio}
          className="form-control mr-2"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </div>
      </div>
      <div className="mt-2">
        <small>Fecha de Creación: {fechaCreacion.toLocaleString()}</small>
      </div>
    </form>
  );
};

export default TareaForm;
