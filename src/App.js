import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");

  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false, fechaCreacion: new Date() }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const ordenarTareasPorFecha = (ascendente) => {
    const tareasOrdenadas = [...tareas];
    tareasOrdenadas.sort((a, b) => (ascendente ? a.fechaCreacion - b.fechaCreacion : b.fechaCreacion - a.fechaCreacion));
    setTareas(tareasOrdenadas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Lista de Tareas</h1>
      <div className="row">
        <div className="col-md-6">
          <TareaForm agregarTarea={agregarTarea} />
        </div>
        <div className="col-md-6">
          <Filtros filtrarTareas={filtrarTareas} ordenarTareasPorFecha={ordenarTareasPorFecha} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ListaTareas
            tareas={tareasFiltradas}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
            toggleCompletada={toggleCompletada}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
