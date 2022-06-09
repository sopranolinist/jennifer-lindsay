import { useEffect, useState } from 'react'
import { GRAY_COLOR } from '../../helpers/WordleHelper'

interface WordleLineProps {
  enabled: boolean,
  handleLetterChange: Function,
  colors: string[],
  reset: boolean
}

function WordleLine({ enabled, handleLetterChange, colors, reset }: WordleLineProps) {
  const [letter1, setLetter1] = useState('');
  const [letter2, setLetter2] = useState('');
  const [letter3, setLetter3] = useState('');
  const [letter4, setLetter4] = useState('');
  const [letter5, setLetter5] = useState('');
  const [letter1Color, setLetter1Color] = useState(GRAY_COLOR);
  const [letter2Color, setLetter2Color] = useState(GRAY_COLOR);
  const [letter3Color, setLetter3Color] = useState(GRAY_COLOR);
  const [letter4Color, setLetter4Color] = useState(GRAY_COLOR);
  const [letter5Color, setLetter5Color] = useState(GRAY_COLOR);

  const handleFocus = (e: React.SyntheticEvent<EventTarget>) => (e.target as HTMLInputElement).select();

  const handleChange = (e: React.SyntheticEvent<EventTarget>) => {
    switch(+(e.target as HTMLInputElement).id) {
      case 1:
        setLetter1((e.target as HTMLInputElement).value.toLowerCase())
        break;
      case 2:
        setLetter2((e.target as HTMLInputElement).value.toLowerCase())
        break;
      case 3:
        setLetter3((e.target as HTMLInputElement).value.toLowerCase())
        break;
      case 4:
        setLetter4((e.target as HTMLInputElement).value.toLowerCase())
        break;
      case 5:
        setLetter5((e.target as HTMLInputElement).value.toLowerCase())
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if(reset) {
      setLetter1('');
      setLetter2('');
      setLetter3('');
      setLetter4('');
      setLetter5('');
      setLetter1Color(GRAY_COLOR);
      setLetter2Color(GRAY_COLOR);
      setLetter3Color(GRAY_COLOR);
      setLetter4Color(GRAY_COLOR);
      setLetter5Color(GRAY_COLOR);
    }
  }, [reset]);

  useEffect(() => {
    if(enabled && colors.length > 0) {
      setLetter1Color(colors[0]);
      setLetter2Color(colors[1]);
      setLetter3Color(colors[2]);
      setLetter4Color(colors[3]);
      setLetter5Color(colors[4]);
    }
  }, [enabled, colors]);

  useEffect(() => {
    handleLetterChange(`${letter1}${letter2}${letter3}${letter4}${letter5}`);
  },[handleLetterChange, letter1, letter2, letter3, letter4, letter5])

  return (
    <ul className='letter'>
      <li style={{background: letter1Color}}>
        <input 
          type='text'
          id='1'
          name='rating'
          value={letter1}
          maxLength={1}
          onChange={handleChange}
          onFocus={handleFocus}
          disabled={!enabled}
        />
      </li>
      <li style={{background: letter2Color}}>
        <input 
          type='text'
          id='2'
          name='rating'
          value={letter2}
          maxLength={1}
          onChange={handleChange}
          onFocus={handleFocus}
          disabled={!enabled}
        />
      </li>
      <li style={{background: letter3Color}}>
        <input 
          type='text'
          id='3'
          name='rating'
          value={letter3}
          maxLength={1}
          onChange={handleChange}
          onFocus={handleFocus}
          disabled={!enabled}
        />
      </li>
      <li style={{background: letter4Color}}>
        <input 
          type='text'
          id='4'
          name='rating'
          value={letter4}
          maxLength={1}
          onChange={handleChange}
          onFocus={handleFocus}
          disabled={!enabled}
        />
      </li>
      <li style={{background: letter5Color}}>
        <input 
          type='text'
          id='5'
          name='rating'
          value={letter5}
          maxLength={1}
          onChange={handleChange}
          onFocus={handleFocus}
          disabled={!enabled}
        />
      </li>
    </ul>
  )
}

export default WordleLine