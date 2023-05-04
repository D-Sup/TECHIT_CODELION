function Clock() {
  const timeNow = new Date();
  return (
    <div>
      <h2>년 : {timeNow.getFullYear()}</h2>
      <h2>월/일: {`${timeNow.getMonth() + 1}/${timeNow.getDay()}`}</h2>
      <h2>시간: {`${timeNow.getHours()}시${timeNow.getMinutes()}분${timeNow.getSeconds()}초`}</h2>
    </div>
  );
}

export default Clock;
