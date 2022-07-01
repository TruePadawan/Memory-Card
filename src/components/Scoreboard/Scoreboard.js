import "./scoreboard.css";

const Scoreboard = ({current, highest}) => {
    return (
      <div className="score-board">
        <div className="current">
            <span className="title">Current</span>
            {current}
        </div>
        <div className="highest">
            <span className="title">Highest</span>
            {highest}
        </div>
      </div>
    );
}

export default Scoreboard;