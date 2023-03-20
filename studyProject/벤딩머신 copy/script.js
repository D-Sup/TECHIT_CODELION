const items = document.querySelectorAll('.items');
const amount_btn = document.querySelector('.btn-amount');
const inputNumber_input = document.getElementById('inputNumber');
const balanceCount = document.getElementById('balanceCount');
const basket = document.querySelector('.basket');
const return_btn = document.querySelector('.btn-return');
const submit_btn = document.querySelector('.btn-submit');
const Possession = document.getElementById('possession-money');
const totalPrice = document.querySelector('.totalPrice');
const EarnedItems = document.querySelector('.EarnedItems');

let soldOut = [];
let stock = [];
let selectCount = [0, 0, 0, 0, 0, 0];
let totalAmount = 0;
let changeMoney;
let money;
let finalAmount = 0;
function load() {
  choose();
  calcMoney();
}

function choose() {
  for (let i = 0; i < 6; i++) {
    items[i].children[3].innerHTML = randomizer(i);
  }
  for (let i = 0; i < soldOut.length; i++) {
    items[soldOut[i]].lastElementChild.classList.add('out');
  }
  items.forEach(items => {
    items.addEventListener('click', e => {
      const selectItem = e.currentTarget.dataset.id;
      calcChoose(selectItem, e);
      if (stock[selectItem] > 0) {
        appendBasket(selectItem, e);
      }
    });
  });
}

function calcChoose(selectItem, e) {
  stock[selectItem] += -1;
  if (stock[selectItem] > 0) {
  } else if (stock[selectItem] === 0) {
    items[selectItem].lastElementChild.classList.add('out');
    appendBasket(selectItem, e);
  }
}

function randomizer(i) {
  const random = Math.floor(Math.random() * 5);
  stock.push(random);
  if (random === 0) {
    soldOut.push(i);
  }
  return random;
}

function appendBasket(selectItem, e) {
  let num = selectCount[selectItem] + 1;
  if (selectCount[selectItem] === 0) {
    const element = document.createElement('div');
    element.classList.add('selectItem');
    const attr = document.createAttribute('data-id');
    attr.value = selectItem;
    element.setAttributeNode(attr);
    element.innerHTML = `
            <img src="${e.currentTarget.children[0].src}" alt="">
            ${e.currentTarget.children[1].textContent}
            <div class="countSelectItem">${num}</div>
            `;
    basket.append(element);
  } else {
    const addItems = basket.querySelectorAll('.selectItem');
    addItems.forEach(e => {
      if (e.dataset.id === selectItem) {
        e.lastElementChild.textContent = num;
      }
    });
  }
  selectCount[selectItem] += 1;
}

function calcMoney() {
  money = window.prompt('소지금을 입력해주세요🙏🏻', '5000');
  Possession.textContent = money;
  amount_btn.addEventListener('click', () => {
    if (Number(inputNumber_input.value) > money) {
      alert('가진 금액보다 더 충전할 수 없습니다');
      inputNumber_input.value = '';
    } else {
      totalAmount += inputNumber_input.value === '' ? 0 : parseInt(inputNumber_input.value);
      balanceCount.textContent = totalAmount;
      money -= inputNumber_input.value;
      inputNumber_input.value = '';
      Possession.textContent = money;
    }
  });
  submit_btn.addEventListener('click', () => {
    const paymentAmount = selectCount.reduce((a, b) => a + b) * 1000;
    if (paymentAmount <= totalAmount) {
      changeMoney = totalAmount - paymentAmount;
      totalAmount -= paymentAmount;
      balanceCount.textContent = '';
      money += changeMoney;
      Possession.textContent = money;
      finalAmount += paymentAmount;
      totalPrice.children[0].textContent = `총금액 : ${finalAmount}`;
      selectCount = [0, 0, 0, 0, 0, 0];
      appendEarnedItems();
    } else {
      alert('잔액이 부족합니다');
    }
  });
  return_btn.addEventListener('click', () => {
    console.log(Possession.textContent);
    console.log(totalAmount);
    Possession.textContent = parseInt(Possession.textContent) + totalAmount;
    money += totalAmount;
    totalAmount = 0;
    balanceCount.textContent = '';
  });
}

function appendEarnedItems() {
  const selectItem = basket.querySelectorAll('.selectItem');
  selectItem.forEach(e => {
    const element = document.createElement('div');
    element.classList.add('buyItem');
    element.innerHTML = e.innerHTML;
    EarnedItems.append(element);
  });
  basket.innerHTML = '';
}

load();
