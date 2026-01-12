const EventCard = ({ evento, onVerDetalle }) => {
  return (
    <div className="event-card">
      <h3>{evento.titulo}</h3>
      <p>
        <strong>Categoria:</strong> {evento.categoria}
      </p>
      <p>
        <strong>Fecha:</strong> {evento.fecha}
      </p>
      <p>
        <strong>Lugar:</strong> {evento.lugar}
      </p>
      <button onClick={() => onVerDetalle(evento)}>Ver Detalles</button>
    </div>
  );
};

export default EventCard;
