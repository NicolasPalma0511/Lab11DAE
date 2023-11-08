import React, { useState } from 'react';

const TareaForm = ({ agregarTarea }) => {
  const [texto, setTexto] = useState('');
  const [error, setError] = useState('');

  const manejarCambio = (e) => {
    setTexto(e.target.value);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (!texto.trim()) {
      setError('La tarea no puede estar vacia, ingresa un nombre para la tarea');
      return;
    }

    const maxLongitudTexto = 20;
    if (texto.length > maxLongitudTexto) {
      setError(`El nombre de la tarea no debe superar los ${maxLongitudTexto} caracteres.`);
      return;
    }

    setError('');

    agregarTarea(texto);

    setTexto('');
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
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </div>
      </div>
      {error && <div className="text-danger mt-2">{error}</div>}
    </form>
  );
};

export default TareaForm;
