import "./cardItem.css";

const CardItem = (props) => {
    return (
        <figure className="card-item">
            <img src={props.img} alt={props.imgAlt} />
            <figcaption>{props.imgAlt}</figcaption>
        </figure>
    );
}

export default CardItem;