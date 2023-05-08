import { useState } from 'react';
import Mood from './Components/Mood.jsx';
import './App.css'

function App() {
  return (
    <>
      <h1>오늘의 기분을 선택해주세요 😁</h1>
      <Mood/>
    </>
  );
}

export default App;
