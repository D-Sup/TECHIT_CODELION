import React from 'react';
import { useState, useMemo} from 'react';

function 부하() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  return s;
}

export default function TryUseMemo() {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo)
  }

  console.log('랜더링!!')

  const result = useMemo(()=>{
    return 부하()
    // 평소에는 memo되어 있는걸 가져다 쓰고
    // countTwo가 바뀌었을 때 부하 함수를 실행시키는 메모
    // useEffect 는 진행시켜줘~ useMemo는 
    // 실행한 값이 넘어와서 들어온다 
    // 이전에 계산한 값을 가져온다
  }, [countTwo])

  return (
    <div className="App">
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
    </div>
  );
}
