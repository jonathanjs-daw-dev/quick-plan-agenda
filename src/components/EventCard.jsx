const EventCard = ({ evento }) => {
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
    </div>
  );
};

export default EventCard;
