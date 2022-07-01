import "./scoreboard.css";

const Scoreboard = ({current, isGameOver, isGameCleared}) => {
  let className = "current";
  if (isGameOver)
  {
    className = "current game-over";
  }else if (isGameCleared)
  {
    className = "current game-cleared";
  }

    return (
      <div className="score-board">
        <div className={className}>
            <span className="title">Current</span>
            {current}
        </div>
      </div>
    );
}

export default Scoreboard;