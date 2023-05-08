import { useState } from 'react';
import MoodResult from './MoodResult.jsx';

export default function Mood() {
  const [currentMood, setCurrentMood] = useState('')
  const moodList = [
    { id: 1, feeling: '좋아요😊'},
    { id: 2, feeling: '정말 좋아요🤗'},
    { id: 3, feeling: '최고예요!😜'},
    { id: 4, feeling: '미쳤어요!!😝'},
  ];
  const moodBox = moodList.map( ({id,feeling}) => {
    return (
      <button key={id} className="mood-item" onClick={() => setCurrentMood(feeling)}>기분이 : {feeling}</button>
    )
  });
  return (
    <>
      <div className="mood-list">{moodBox}</div>
      <MoodResult props={currentMood}/>
    </>

  )
}
