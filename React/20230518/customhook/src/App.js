import { useEffect, useState } from 'react'
import TestBox from './components/TestBox';
import { useMouseLocation } from './hooks/useMouseLocation';

function App() {
  const location = useMouseLocation();
  return (
    <div>
      <TestBox />
      {`x축 : ${location.x} y축 : ${location.y}`}
    </div>
  );
}
export default App;
