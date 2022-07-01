import "./cardItem.css";

const CardItem = (props) => {
    return (
      <figure className="card-item" onClick={props.onClick}>
        <img src={props.img} alt={props.alt} />
        <figcaption>{props.alt}</figcaption>
      </figure>
    );
}

export default CardItem;