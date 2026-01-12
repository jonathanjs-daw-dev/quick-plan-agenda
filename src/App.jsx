import { useState, useEffect } from "react";
import eventosData from "./data/eventos.json";
import EventCard from "./components/EventCard";

const App = () => {
  const [eventos, setEventos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    setEventos(eventosData);
  }, []);

  const eventosFiltrados = eventos.filter((evento) => {
    const tituloCoincide = evento.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const lugarCoincide = evento.lugar
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    return tituloCoincide || lugarCoincide;
  });

  return (
    <div className="App">
      <h1>QuickPlan - Agenda de Eventos</h1>
      <p>Eventos cargados {eventos.length}</p>
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar eventos por titulo o lugar..."
          value={busqueda}
          onChange={(ev) => setBusqueda(ev.target.value)}
        />
      </div>
      <div className="eventos-lista">
        {eventosFiltrados.map((evento) => (
          <EventCard key={evento.id} evento={evento} />
        ))}
      </div>
    </div>
  );
};

export default App;
