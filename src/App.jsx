import { useState, useEffect } from "react";
import eventosData from "./data/eventos.json";
import EventCard from "./components/EventCard";
import EventDetail from "./components/EventDetail";
import "./App.css";

const App = () => {
  const [eventos, setEventos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // carga de favoritos desde localStorage
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosGuardados = localStorage.getItem("favoritos");
    return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
  });

  useEffect(() => {
    // simulamos carga de datos
    setLoading(true);
    setError(null);

    setTimeout(() => {
      try {
        setEventos(eventosData);
        setLoading(false);
      } catch (error) {
        setError("Error al cargar los eventos.");
        setLoading(false);
      }
    }, 1500); // 1.5 segundos de retraso somulado
  }, []);

  const verDetalle = (evento) => {
    setEventoSeleccionado(evento);
  };

  const volverALista = () => {
    setEventoSeleccionado(null);
  };

  const añadirAFavoritos = (eventoId) => {
    const nuevosFavoritos = [...favoritos, eventoId];
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };

  const quitarDeFavoritos = (eventoId) => {
    const nuevosFavoritos = favoritos.filter((id) => id !== eventoId);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };

  const estaEnFavoritos = (eventoId) => {
    return favoritos.some((id) => id === eventoId);
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
      {loading ? (
        <div className="loading">
          <p>Cargando eventos...</p>
        </div>
      ) : null}
      {error ? (
        <div className="error">
          <p>Error: {error}</p>
          <button onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      ) : null}
      {!loading && !error ? (
        <>
          {eventoSeleccionado ? (
            <EventDetail
              evento={eventoSeleccionado}
              onVolver={volverALista}
              onAñadirFavorito={añadirAFavoritos}
              estaEnFavoritos={estaEnFavoritos}
            />
          ) : (
            <>
              <p>
                Mostrando {eventosFiltrados.length} de {eventos.length} eventos
              </p>
              {favoritos.length > 0 && (
                <div className="seccion-favoritos">
                  <h2>Mis Favoritos ({favoritos.length})</h2>
                  <ul>
                    {favoritos.map((favoritoId) => {
                      const evento = eventos.find((e) => e.id === favoritoId);
                      return evento ? (
                        <li key={favoritoId}>
                          {evento.titulo}
                          <button onClick={() => quitarDeFavoritos(favoritoId)}>
                            ✕ Quitar
                          </button>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
              )}
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
                {eventosFiltrados.length === 0 ? (
                  <p className="sin-resultados">
                    No se encontraron eventos con esos criterios
                  </p>
                ) : (
                  eventosFiltrados.map((evento) => (
                    <EventCard
                      key={evento.id}
                      evento={evento}
                      onVerDetalle={verDetalle}
                    />
                  ))
                )}
              </div>
            </>
          )}
        </>
      ) : null}
    </div>
  );
};

export default App;
