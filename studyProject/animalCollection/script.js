const animalCollection = {
  1: ['Squirrel', 'animal01.png'],
  2: ['wildPig', 'animal02.png'],
  3: ['wolf', 'animal03.png'],
  4: ['Owl', 'animal04.png'],
  5: ['Bear', 'animal05.png'],
  6: ['Eagle', 'animal06.png'],
  7: ['Fox', 'animal07.png'],
  8: ['Deer', 'animal08.png'],
  9: ['Hedgehog', 'animal09.png'],
};

let count = 0;
const wrapper = document.querySelector('.container');
const animals_img = document.querySelector('.animals');
const title_h1 = document.querySelector('.title');
wrapper.addEventListener('click', () => {
  count++;
  count === 10 ? (count = 1) : count;
  animals_img.classList.toggle('rotationY_180');
  title_h1.classList.toggle('rotationX_360');
  setTimeout(() => {
    imgChange();
  }, 100);
});

function imgChange() {
  animals_img.src = `./images/${animalCollection[count][1]}`;
  title_h1.innerHTML = animalCollection[count][0];
}
