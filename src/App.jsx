import { useState, useEffect } from "react";
import eventosData from "./data/eventos.json";
import EventCard from "./components/EventCard";

const App = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    setEventos(eventosData);
  }, []);

  return (
    <div className="App">
      <h1>QuickPlan - Agenda de Eventos</h1>
      <p>Eventos cargados {eventos.length}</p>
      <div className="eventos-lista">
        {eventos.map((evento) => (
          <EventCard key={evento.id} evento={evento} />
        ))}
      </div>
    </div>
  );
};

export default App;
