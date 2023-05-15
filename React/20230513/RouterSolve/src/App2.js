import React, { useState, useEffect } from "react";

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  const [num, setNum] = useState(0);
  console.log("렌더링이 됩니다..?"); //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.
  setTimeout(() => {
    const today = new Date();
    setToday(today);
    setHour(today.getHours());
    setMin(today.getMinutes());
    setSec(today.getSeconds());
  }, 1000);
  // setTimeout 함수가 쌓이게 된다
  return (
    <div>
      <button onClick={() => setNum(num + 1)}>asdfasf</button>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default Time;