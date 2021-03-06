import { useState, useRef } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Scoreboard from './components/Scoreboard/Scoreboard';
import CardItem from './components/CardItem/CardItem';

import Naruto from "./resources/images/naruto.png";
import Sasuke from "./resources/images/sasuke.png";
import Gaara from "./resources/images/gaara.png";
import Kakashi from "./resources/images/kakashi.png";
import Itachi from "./resources/images/itachi.png";
import Jiraiya from "./resources/images/jiraiya.png";
import Tsunade from "./resources/images/tsunade.png";
import Shikamaru from "./resources/images/shikamaru.png";
import Choji from "./resources/images/choji.png";
import Hinata from "./resources/images/hinata.png";
import Sakura from "./resources/images/sakura.png";
import Ino from "./resources/images/ino.png";

function shuffleArray(array) {
  let copiedArr = [...array]
  for (let i = copiedArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copiedArr[i], copiedArr[j]] = [copiedArr[j], copiedArr[i]];
  }
  return copiedArr;
}

function App() {
  const [cardItems, setCardItems] = useState([
    {
      alt: "Naruto",
      src: Naruto,
    },
    {
      alt: "Sasuke",
      src: Sasuke,
    },
    {
      alt: "Sakura",
      src: Sakura,
    },
    {
      alt: "Gaara",
      src: Gaara,
    },
    {
      alt: "Kakashi",
      src: Kakashi,
    },
    {
      alt: "Itachi",
      src: Itachi,
    },
    {
      alt: "Jiraiya",
      src: Jiraiya,
    },
    {
      alt: "Tsunade",
      src: Tsunade,
    },
    {
      alt: "Shikamaru",
      src: Shikamaru,
    },
    {
      alt: "Choji",
      src: Choji,
    },
    {
      alt: "Hinata",
      src: Hinata,
    },
    {
      alt: "Ino",
      src: Ino,
    },
  ]);
  const [gameOver, setGameOver] = useState(false);
  const [gameCleared, setGameCleared] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const clickItemsRef = useRef([]);

  const processClick = (cardCaption) => {
    // UPDATE SCORE
    let itemIndex = clickItemsRef.current.findIndex(item => item === cardCaption);

    if (itemIndex !== -1)
    {
      setGameOver(true);
    }
    else {
      clickItemsRef.current.push(cardCaption);

      setCurrentScore(latest => {
        let newScore = latest + 1;
        if (newScore === cardItems.length)
        {
          setGameCleared(true);
        }
        return newScore;
      });

      // SHUFFLE CARD ITEMS
      setCardItems(latest => {
        return shuffleArray(latest);
      });
    }

  }

  const jsxCardItems = cardItems.map(item => {
    return (
      <CardItem key={item.alt} img={item.src} alt={item.alt} onClick={processClick} isGameOver={gameOver} isGameCleared={gameCleared} /> 
    );
  });

  const restartGame = () => {
    window.location.reload();
  }
  
  return (
    <>
      <Header />
      <main>
        <span className='info-text'>Pick all cards with no repitition</span>
        <Scoreboard current={currentScore} isGameOver={gameOver} isGameCleared={gameCleared} />
        <div className='board'>
        {jsxCardItems}
        </div>
        <button className='reload-btn' type={"button"} onClick={restartGame}>Restart</button>
      </main>
    </>
  );
}

export default App;


