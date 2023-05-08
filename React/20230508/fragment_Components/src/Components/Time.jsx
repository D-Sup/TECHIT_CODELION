import React, { useState, useEffect } from 'react';

function Time(props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <h1 style={{ color: 'red' }}>년 : {year}</h1>
      <h1>
        월/일 : {month}/{date}
      </h1>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}


export default Time;
