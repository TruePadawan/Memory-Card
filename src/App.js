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

function App() {
  return (
    <>
      <Header />
      <main>
        <span className='info-text'>Pick all individual cards with no repitition</span>
        <Scoreboard current={0} highest={0} />
        <div className='board'>
          <CardItem img={Naruto} imgAlt={"Naruto"} />
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
          <CardItem img={Gaara} imgAlt={"Gaara"} />
        </div>
      </main>
    </>
  );
}

export default App;
