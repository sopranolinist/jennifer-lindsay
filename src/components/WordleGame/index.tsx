import Card from "../Card"
import React, { useEffect, useState } from 'react'
import Button from "../Button"
import WordleLine from "./WordleLine"
import { MAX_TURNS, BLACK_COLOR, YELLOW_COLOR, GREEN_COLOR } from '../../helpers/WordleHelper'

interface WordleGameProps {
  wordle: string,
  getNextWordleCallback: Function,
  validWordCallback: Function
}

function WordleGame({ wordle, getNextWordleCallback, validWordCallback }: WordleGameProps) {
  const turns = [1,2,3,4,5,6];
  const [message, setMessage] = useState('')
  const [currentTurn, setCurrentTurn] = useState(1);
  const [currentGuess, setCurrentGuess] = useState('');
  const [currentGuessColors, setCurrentGuessColors] = useState<string[]>([]);
  // 0: game not over, 1: game over won, -1: game over lost
  const [gameOver, setGameOver] = useState(0); 
  const [resetting, setResetting] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const checkSubmitDisabled = () => {
    setSubmitDisabled(currentGuess.length < 5 || !validWordCallback(currentGuess));
  }

  const wonGame = (guessColors: string[]) => {
    return guessColors.length > 0 && guessColors.findIndex(color => color !== GREEN_COLOR) === -1
  }

  const handleNewGame = () => {
    setResetting(true);
  }

  const handleProcessGuess = () => {
    const newColors: string[] = [];
    let wordleArray = wordle.split('');
    currentGuess.split('').forEach((letter, index) => {
      // if letter found in correct position
      if (letter === wordleArray[index]) {
        newColors[index] = GREEN_COLOR;
        wordleArray[index]='0'; // mark the matched letter so it doesn't create a false hit in a later loop
      };
    });
    currentGuess.split('').forEach((letter, index) => {
      const indexFound = wordleArray.findIndex(l => l === letter);
      // if letter found in incorrect position
      if (indexFound > -1 && !newColors[index]) {
          newColors[index] = YELLOW_COLOR;
          wordleArray[indexFound] = '0'; // mark the matched letter so it doesn't create a false hit in a later loop
        ;
      } else {
        // else letter not found in any positions
        if(!newColors[index]) newColors[index] = BLACK_COLOR;
      }
    });
    setCurrentGuessColors(newColors);
  }

useEffect(() => {
  if(resetting) {
    setCurrentGuessColors([]);
    setCurrentGuess('');
    setMessage('');
    setCurrentTurn(1);
    setGameOver(0);
    getNextWordleCallback();
    setSubmitDisabled(true);
    setResetting(false);
  }
}, [resetting, getNextWordleCallback]);

  useEffect(() => {
    if(currentGuessColors.length > 0) {
      // player guessed the word - player won
      if(wonGame(currentGuessColors)) {
        setGameOver(1);
        setCurrentTurn(0);
      } else {
        setCurrentGuessColors([]);
        if (currentTurn < MAX_TURNS) {
          // if player still hasn't won start next turn
          setCurrentTurn(currentTurn+1);
        } else {
          // out of turns - player lost
          setGameOver(-1);
          setCurrentTurn(0);
        }
      }
    }
  },[currentGuessColors, currentTurn]);

  useEffect(() => {
    if(gameOver > 0) {
      setMessage(`You won! Congratulations!`)
    } else if (gameOver < 0) {
      setMessage(`The word was "${wordle}." Better luck next time!`)
    }
  }, [gameOver, wordle]);

  const handleLetterChange = (guess: string) => {
    if(guess.length > 0) {
      setCurrentGuess(guess);
      checkSubmitDisabled();
    }
  }

  return (
    <div>
      <Card>
        {/* <form onSubmit={handleProcessGuess}> */}
          <h2>Wordlish</h2>
          {turns.map(t => {
            return <WordleLine key={t} enabled={t === currentTurn} handleLetterChange={handleLetterChange} colors={currentGuessColors} reset={resetting}/>
          })}
          <div className='button-group'>
            <Button onClick={handleProcessGuess} isDisabled={submitDisabled} label='Enter' />
            <Button onClick={handleNewGame} label='New Game' />
          </div>
          {message && <div className='message'>{message}</div>}
        {/* </form> */}
      </Card>
    </div>
  )
}

export default WordleGame