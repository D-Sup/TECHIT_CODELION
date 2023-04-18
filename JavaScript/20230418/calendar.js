function calendar(newYear, newMonth) {
    // 1. 무슨 요일에 시작하는지 알아야 한다!
    const time = new Date(newYear, newMonth - 1, 1);
    // 2. 해당 월에 날이 며칠이나 있는지!
    // 32일을 넣어서 4월은 30일까지 있어서 5월 2일로 2일이 반환되어
    // 32 - 2 로 4월이 총 30일이라는 것을 알 수 있음
    // 0일을 넣으면 이전달이 나오게됨
    // const timeLength = 32 - new Date(newYear, newMonth - 1 ,32).getDate();
    const timeLength = new Date(newYear, newMonth, 0).getDate();
    console.log(timeLength);
    
    let year = time.getFullYear(),
        month = time.getMonth(),
        date = time.getDate(),
        day = time.getDay();

    const captionYear = document.querySelector('.year'),
        captionMonth = document.querySelector('.month'),
        timeEl = document.querySelector('time'),
        days = document.querySelectorAll('tr td');

    for(let i=0; i<days.length; i++) {
      days[i].innerHTML = '&nbsp;';
    }

    for (let i = day; i < day + timeLength; i++) {
        days[i].textContent = date++;
    }

    captionYear.textContent = year;
    captionMonth.textContent = month + 1;
    timeEl.dateTime = `${year}-${month + 1}`;
}

const btns = document.querySelectorAll('button');
btns.forEach((item)=>{
  item.addEventListener('click', () => {
    if(item.classList.contains('prev')){
      calendar(year, --month)
  } else {
      calendar(year, ++month)
  }
})
})

let year = new Date().getFullYear(),
    month = new Date().getMonth() + 1;

calendar(year, month);