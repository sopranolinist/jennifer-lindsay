import React, { useEffect, useState } from 'react'
import WordleGame from "../../components/WordleGame"
import wordleData from "../../data/wordle.json"
import allowedGuessesData from '../../data/allowedguesses.json'

function Wordle() {
  const [wordle, setWordle] = useState('');
  const wordles = wordleData;
  const allowedGuesses = allowedGuessesData;

  const validWord = (word: string) => {
    return allowedGuesses.indexOf(word) > -1 || wordles.indexOf(word) > -1;
  }

  const getNextWordle = () => {
    const nextWordle = wordles[Math.floor(Math.random() * wordles.length)];
    // console.log('DEBUG MODE', {nextWordle});
    setWordle(nextWordle);
  }

  useEffect(() => {
    // initialize the game to the first wordle
    if(wordles.length > 0) getNextWordle();
  }, [wordles]);
  
  return (
    <div>
      <WordleGame wordle={wordle} getNextWordleCallback={getNextWordle} validWordCallback={validWord} />
    </div>
  )
}

export default Wordle