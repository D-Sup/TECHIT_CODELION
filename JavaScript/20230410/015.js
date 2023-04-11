const mainForm = document.querySelector('#mainForm'),
  progressBar = mainForm.querySelector('.bar-progress'),
  message = mainForm.querySelector('.msg-notice'),
  inputs = mainForm.querySelectorAll('input'),
  btnReset = mainForm.querySelector('button[type="reset"]');

mainForm.addEventListener('keyup', () => {
  let validCounter = 0;

  inputs.forEach(item => {
    if (item.validity.valid) {
      validCounter++;
    }
  });

  switch (validCounter) {
    case 1:
      message.textContent = '시작했습니다!';
      progressBar.setAttribute('value', '20');
      break;
    case 2:
      message.textContent = '다음으로 가볼까요!';
      progressBar.setAttribute('value', '40');
      break;
    case 3:
      message.textContent = '오 절반지났습니다!';
      progressBar.setAttribute('value', '60');
      break;
    case 4:
      message.textContent = '거의 끝났어요!';
      progressBar.setAttribute('value', '80');
      break;
    case 5:
      message.textContent = '고생하셨습니다~';
      progressBar.setAttribute('value', '100');
      break;
    default:
      message.textContent = '설문지를 작성하세요!';
      progressBar.setAttribute('value', '0');
  }
});

btnReset.addEventListener('click', () => {
  message.textContent = '설문지를 작성하세요!';
  progressBar.setAttribute('value', '0');
});

// const mainForm = document.getElementById('mainForm');
// const progress = document.querySelector('.bar-progress');
// const msgNotice = document.querySelector('.msg-notice');

// mainForm.addEventListener('input', function (event) {
//     const inputs = mainForm.querySelectorAll('input');
//     const validInputs = mainForm.querySelectorAll('input:valid');

//     progress.value = validInputs.length / inputs.length * 100;
//     if (progress.value === 20) {
//         msgNotice.textContent = '설문지 작성이 시작되었어요~ 끝까지 작성해주세요!';
//     } else if (progress.value === 40) {
//         msgNotice.textContent = '좋아요~ 계속 고고씽~!';
//     } else if (progress.value === 60) {
//         msgNotice.textContent = '절반 지났습니다! 화이팅!';
//     } else if (progress.value === 80) {
//         msgNotice.textContent = '거의 다 했어요! 조금만 더 ~~';
//     } else if (progress.value === 100) {
//         msgNotice.textContent = '잘했습니다! 제출해주세요~';
//     } else {
//         msgNotice.textContent = '설문지를 작성하세요!';
//     }
// })

// mainForm.addEventListener('click', function (event) {
//     const target = event.target;
//     if (target.tagName !== 'BUTTON') return;

//     if (target.type === 'submit') {
//         const inputs = mainForm.querySelectorAll('input');
//         const validInputs = mainForm.querySelectorAll('input:valid');

//         if (validInputs.length === inputs.length) {
//             alert('제출되었습니다.');
//         } else {
//             alert('입력이 완료되지 않았습니다.');
//         }
//     } else if (target.type === 'reset') {
//         progress.value = 0;
//         msgNotice.textContent = '설문지를 작성하세요!';
//     }
// })
