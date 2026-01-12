import { useState, useEffect } from "react";
import eventosData from "./data/eventos.json";
import EventCard from "./components/EventCard";
import EventDetail from "./components/EventDetail";

const App = () => {
  const [eventos, setEventos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);

  useEffect(() => {
    setEventos(eventosData);
  }, []);

  const verDetalle = (evento) => {
    setEventoSeleccionado(evento);
  };

  const volverALista = () => {
    setEventoSeleccionado(null);
  };

  const eventosFiltrados = eventos.filter((evento) => {
    // Filtro de texto (busqueda)
    const tituloCoincide = evento.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const lugarCoincide = evento.lugar
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideBusqueda = tituloCoincide || lugarCoincide;
    // Agrupa la lógica de búsqueda en una variable
    // Es true si coincide en título O lugar

    // Filtro de categoria
    const coincideCategoria =
      categoriaSeleccionada === "Todas" ||
      evento.categoria === categoriaSeleccionada;
    // Si categoría es "Todas" → siempre true (muestra todo)
    // Si no, verifica que la categoría del evento coincida con la seleccionada

    // Debe de cumplir ambos filtros
    return coincideBusqueda && coincideCategoria;
    // Operador &&: ambas condiciones deben ser verdaderas
    // Solo muestra eventos que cumplen AMBOS filtros
  });

  return (
    <div className="App">
      <h1>QuickPlan - Agenda de Eventos</h1>
      {eventoSeleccionado ? (
        <EventDetail evento={eventoSeleccionado} onVolver={volverALista} />
      ) : (
        <>
          <p>
            Mostrando {eventosFiltrados.length} de {eventos.length} eventos
          </p>
          <div className="buscador">
            <input
              type="text"
              placeholder="Buscar eventos por titulo o lugar..."
              value={busqueda}
              onChange={(ev) => setBusqueda(ev.target.value)}
            />
          </div>
          <div className="filtro-categoria">
            <label htmlFor="categoria">Categoria: </label>
            <select
              id="categoria"
              value={categoriaSeleccionada}
              onChange={(ev) => setCategoriaSeleccionada(ev.target.value)}
            >
              <option value="Todas">Todas las categorías</option>
              <option value="Charla">Charla</option>
              <option value="Torneo">Torneo</option>
              <option value="Taller">Taller</option>
              <option value="Excursión">Excursión</option>
            </select>
          </div>
          <div className="eventos-lista">
            {eventosFiltrados.map((evento) => (
              <EventCard
                key={evento.id}
                evento={evento}
                onVerDetalle={verDetalle}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
