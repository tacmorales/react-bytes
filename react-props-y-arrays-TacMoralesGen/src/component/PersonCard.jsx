import "./PersonCard.css";

// eslint-disable-next-line react/prop-types
const PersonCard = ({ key, name, username, email, img }) => {
  return (
    <article id={key} className="card">
      <img src={img} alt="Avatar" />
      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
        <p><b>Nombre de usuario:</b> {username}</p>
        <p><b>Correo:</b> {email}</p>
      </div>
    </article>
  );
};

export default PersonCard;
