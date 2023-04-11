const mainForm = document.querySelector('#mainForm');
const message = document.querySelector('.msg-notice');
const info = [
  '설문지를 작성하세요!',
  '시작했습니다!',
  '다음으로 가볼까요!',
  '오 절반지났습니다!',
  '거의 끝났어요!',
  '고생하셨습니다~ 제출해주세요!',
];
let count = 0;

mainForm.addEventListener('input', e => {
  count = 0;
  if (e.target.value === '') {
    e.target.classList.remove('write');
  } else {
    e.target.classList.add('write');
  }
  count = mainForm.querySelectorAll('.write').length;
  message.textContent = info[count];
  bar(count);
});

mainForm.addEventListener('click', e => {
  const input = mainForm.querySelectorAll('input');
  if (e.target.type == 'submit') {
    count == input.length ? bar(0) : (message.textContent = `아직남은 설문이 ${input.length - count}개 남았습니다`);
  } else if (e.target.type == 'reset') {
    bar(0);
    message.textContent = info[0];
    input.forEach(e => {
      e.classList.remove('write');
    });
  }
});

function bar(count) {
  mainForm.querySelector('.bar-progress').setAttribute('value', `${count * 20}`);
}
