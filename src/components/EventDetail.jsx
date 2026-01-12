const EventDetail = ({
  evento,
  onVolver,
  onAñadirFavorito,
  estaEnFavoritos,
}) => {
  const yaEsFavorito = estaEnFavoritos(evento.id);
  return (
    <div className="event-detail">
      <button onClick={onVolver}>Volver a la lista</button>

      <h2>{evento.titulo}</h2>

      <div className="event-info">
        <p>
          <strong>Categoría:</strong> {evento.categoria}
        </p>
        <p>
          <strong>Fecha:</strong> {evento.fecha}
        </p>
        <p>
          <strong>Lugar:</strong> {evento.lugar}
        </p>
      </div>

      <div className="event-description">
        <h3>Descripción</h3>
        <p>{evento.descripcion}</p>
      </div>

      <div className="favoritos-accion">
        {yaEsFavorito ? (
          <button disabled className="btn-favorito-agregado">
            En favoritos
          </button>
        ) : (
          <button
            onClick={() => onAñadirFavorito(evento.id)}
            className="btn-añadir-favorito"
          >
            Añadir a favoritos
          </button>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
