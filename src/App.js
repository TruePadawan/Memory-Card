import { useState } from 'react';
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
      alt : "Naruto",
      src : Naruto
    },
    {
      alt : "Sasuke",
      src : Sasuke
    },
    {
      alt : "Sakura",
      src : Sakura
    },
    {
      alt : "Gaara",
      src : Gaara
    },
    {
      alt : "Kakashi",
      src : Kakashi
    },
    {
      alt : "Itachi",
      src : Itachi
    },
    {
      alt : "Jiraiya",
      src : Jiraiya
    },
    {
      alt : "Tsunade",
      src : Tsunade
    },
    {
      alt : "Shikamaru",
      src : Shikamaru
    },
    {
      alt : "Choji",
      src : Choji
    },
    {
      alt : "Hinata",
      src : Hinata
    },
    {
      alt : "Ino",
      src : Ino
    }
  ]);

  const shuffleCardItems = () => {
    setCardItems(latest => {
      return shuffleArray(latest);
    });
  }

  const jsxCardItems = cardItems.map(item => {
    return (
      <CardItem key={item.alt} img={item.src} alt={item.alt} onClick={shuffleCardItems} /> 
    );
  });

  return (
    <>
      <Header />
      <main>
        <span className='info-text'>Pick all individual cards with no repitition</span>
        <Scoreboard current={0} highest={0} />
        <div className='board'>
        {jsxCardItems}
          {/* <CardItem img={Naruto} imgAlt={"Naruto"} />
          <CardItem img={Sasuke} imgAlt={"Sasuke"} />
          <CardItem img={Itachi} imgAlt={"Itachi"} />
          <CardItem img={Sakura} imgAlt={"Sakura"} />
          <CardItem img={Ino} imgAlt={"Ino"} />
          <CardItem img={Kakashi} imgAlt={"Kakashi"} />
          <CardItem img={Jiraiya} imgAlt={"Jiraiya"} />
          <CardItem img={Tsunade} imgAlt={"Tsunade"} />
          <CardItem img={Choji} imgAlt={"Choji"} />
          <CardItem img={Hinata} imgAlt={"Hinata"} />
          <CardItem img={Shikamaru} imgAlt={"Shikamaru"} />
          <CardItem img={Gaara} imgAlt={"Gaara"} /> */}
        </div>
      </main>
    </>
  );
}

export default App;

