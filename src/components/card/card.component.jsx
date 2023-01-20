import "./card.style.css";

const Card = ({ monster: { id, name, email } }) => (
  <div className="card-container">
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}?size=180x180&set=set2`}
    ></img>
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
