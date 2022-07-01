import "./cardItem.css";

const CardItem = (props) => {
    const handleClick = () => {
        if (!props.isGameOver && !props.isGameCleared)
        {
            props.onClick(props.alt);
        }
    }

    return (
      <figure className="card-item" onClick={handleClick}>
        <img src={props.img} alt={props.alt} />
        <figcaption>{props.alt}</figcaption>
      </figure>
    );
}

export default CardItem;