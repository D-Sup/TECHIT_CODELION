const list = [];
function setTime() {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const t = `${hour}시${min}분${sec}초`;
  console.log(t);
  list.push(t);
  localStorage.setItem('list', list);
}
window.addEventListener('click', setTime);
