const article = document.querySelector('.popup');
const openBtn = document.querySelector('.btn-open');
const closeBtn = article.querySelector('.btn-close');

const dim = document.querySelector('.dim');

// 첫번째 포커스 요소
const firstEl = article.querySelector('a');

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
dim.addEventListener('click', closePopup);

window.addEventListener('keydown', e => {
  if (article.classList.value === "popup active" && e.key === 'Escape') {
    closePopup();
  }
});

closeBtn.addEventListener('keydown', e => {
  console.log(e.key);
  if (!e.shiftKey && e.key === 'Tab') {
    // tab만 누를 경우
    e.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener('keydown', e => {
  // Shift+tab 같이 누를 경우
  if (e.shiftKey && e.key === 'Tab') {
    e.preventDefault();
    closeBtn.focus();
  }
});

function openPopup() {
  article.classList.add('active');
}

function closePopup() {
  article.classList.remove('active');
}
