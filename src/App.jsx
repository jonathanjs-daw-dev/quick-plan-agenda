import { useState, useEffect } from "react";
import eventosData from "./data/eventos.json";
function App() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    setEventos(eventosData);
  }, []);

  return (
    <div className="App">
      <h1>QuickPlan - Agenda de Eventos</h1>
      <p>Eventos cargados {eventos.length}</p>
    </div>
  );
}

export default App;
