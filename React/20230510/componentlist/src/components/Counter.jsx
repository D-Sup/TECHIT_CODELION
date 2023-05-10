import React, { useState } from 'react'


export default function Counter() {
  const [number, setNumber] = useState(0)

function increment() {
  // setNumber(number+1)
  setNumber(prevNumber => prevNumber + 1)
}

  return (
    <>
    <div>Counter: {number}</div>
    <button onClick={increment}>+1</button>
    <button onClick={()=>setNumber(number-1)}>-1</button>
    </>
  )
}
