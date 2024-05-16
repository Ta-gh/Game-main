import React, {useState} from 'react';
import GameBoard from "./GameBoard";
import Menu from "./menu/Menu";
import Results from "./Results";
import bragnik from '../img/bragnik.png'
import ledibag from '../img/ledibag.png'
import plag from '../img/plag.png'
import supercat from '../img/supercat.png'
import tiki from '../img/tiki.png'
import vami from '../img/vami.png'
import k2 from '../img/k2.png'
import hloya from '../img/hloya.png'
import sass from '../img/sass.png'
import alaya from '../img/alaya.png'
import cull from '../img/cull.png'
import ob from '../img/ob.png'
import pchela from '../img/pchela.png'
import trix from '../img/trix.png'
import barkk from '../img/barkk.png'
import cvinka from '../img/cvinka.png'
import luka from '../img/luka.png'
import carapace from '../img/Carapace.png'

const Game = () => {
  const [menuActive, setMenuActive] = useState(true);
  const [gameActive, setGameActive] = useState(false);
  const [resultsActive, setResultsActive] = useState(false);
  const [gameOptions, setGameOptions] = useState({size: 4});
  const [gameResult, setGameResult] = useState({score: 0, fails: 0, time: 0});
  const [gameContent, setGameContent] = useState([]);

  const clearGame = () => {
    setGameResult({score: 0, fails: 0, time: 0});
  }

  const startGame = () => {
    setMenuActive(false);
    setGameActive(true);
    setGameContent(generateNumberArray(gameOptions.size)); // Установка содержимого игры при начале игры
  }

  const goToMenu = () => {
    clearGame();
    setGameActive(false);
    setResultsActive(false);
    setMenuActive(true);
  }

  const endGame = (result) => {
    setGameActive(false);
    setGameResult(result);
    setResultsActive(true);
  }

  return (
    <div>
      {menuActive && <Menu startGame={startGame} gameOptions={{value: gameOptions, set: setGameOptions}}/>}
      {resultsActive && <Results gameResult={gameResult} size={gameOptions.size} goToMenu={goToMenu}/>}
      {gameActive && <GameBoard size={gameOptions.size} content={gameContent} endGame={endGame} goToMenu={goToMenu}/>}
    </div>
  );
};

export default Game;

function generateNumberArray(size) {
 

   function generateCards(numberOfPairs) {


    const array = [
        {src: bragnik},
        {src: ledibag},
        {src: plag},
        {src: tiki},
        {src: supercat},
        {src: vami},
        {src: k2},
        {src: hloya},
        {src: alaya},
        {src: cull},
      {src: sass},
      {src: pchela},
      {src: ob},
      {src: trix},
      {src: barkk},
      {src: cvinka},
      {src: luka},
      {src: carapace},
    ];

    const selectedImages = array.slice(0, numberOfPairs);
    const pairs = [];

    selectedImages.forEach((item, index) => {
        for (let i = 1; i <= 2; i++) {
            const obj = {
                open: false,
                done: false,
                id: `${index}`,
                content: item.src
            };
            pairs.push(obj);
        }
    });

    // Перемешиваем массив пар
    for (let i = pairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }

    return pairs;
  }
 // const numberOfPairs = pairs.length*2; // Количество пар карточек, выбранное пользователем
const newArray = generateCards(size*size/2);
console.log(newArray);

  return newArray;
}