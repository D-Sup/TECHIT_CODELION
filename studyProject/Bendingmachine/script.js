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
let switchOnOff = true;

function load() {
  choose();
  calcMoney();
}

// 무작위 숫자 생성, 품절 아이템 class 추가, 아이템 선택된 상태 추가

function choose() {
  for (let i = 0; i < 6; i++) {
    items[i].children[3].innerHTML = randomNumber(i);
  }
  for (let i = 0; i < soldOut.length; i++) {
    items[soldOut[i]].lastElementChild.classList.add('out');
  }
  items.forEach(items => {
    items.addEventListener('click', e => {
      const selectItem = e.currentTarget.dataset.id;
      e.currentTarget.classList.add('active');
      calcChoose(selectItem, e);
      if (stock[selectItem] > 0) {
        appendBasket(selectItem, e);
      }
      console.log(stock);
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

function randomNumber(i) {
  const random = Math.floor(Math.random() * 10);
  stock.push(random);
  if (random === 0) {
    soldOut.push(i);
  }
  return random;
}

// 장바구니에 아이템 추가, 획득한 음료에 아이템 추가

function appendBasket(selectItem, e) {
  let num = selectCount[selectItem] + 1;
  if (selectCount[selectItem] === 0) {
    const element = document.createElement('div');
    element.classList.add('selectItem');
    element.classList.add('translateX-minus');
    const attr = document.createAttribute('data-id');
    attr.value = selectItem;
    element.setAttributeNode(attr);
    element.innerHTML = `
            <img src="${e.currentTarget.children[0].src}" alt="">
            ${e.currentTarget.children[1].textContent}
            <div class="countSelectItem">${num}</div>
            `;
    basket.append(element);
    delay();
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

function delay() {
  const selectItem = basket.querySelectorAll('.selectItem');
  const buyItem = EarnedItems.querySelectorAll('.buyItem');
  if (switchOnOff) {
    setTimeout(() => {
      selectItem.forEach(e => {
        e.classList.remove('translateX-minus');
      });
    }, 100);
  } else {
    setTimeout(() => {
      selectItem.forEach(e => {
        e.classList.add('translateX-plus');
        setTimeout(() => {
          e.classList.remove('translateX-plus');
          basket.innerHTML = '';
          buyItem.forEach(e => {
            e.classList.remove('translateXX-minus');
            switchOnOff = true;
          });
        }, 100);
      });
    }, 100);
  }
}

function appendEarnedItems() {
  const selectItem = basket.querySelectorAll('.selectItem');
  selectItem.forEach(e => {
    const element = document.createElement('div');
    element.classList.add('buyItem');
    element.classList.add('translateXX-minus');
    element.innerHTML = e.innerHTML;
    EarnedItems.append(element);
    switchOnOff = false;
    delay();
  });
}

// 계산에 필요한 함수

let total = 0;
function calcMoney() {
  PossessionAmount = window.prompt('소지금을 입력해주세요🙏🏻', '10000');
  Possession.textContent = PossessionAmount;
  amount_btn.addEventListener('click', () => {
    if (Number(inputNumber_input.value) > PossessionAmount) {
      alert('가진 금액보다 더 충전할 수 없습니다');
      inputNumber_input.value = '';
    } else if (Number(inputNumber_input.value) <= PossessionAmount && inputNumber_input.value !== '') {
      total += parseInt(inputNumber_input.value);
      totalAmount += parseInt(inputNumber_input.value);
      balanceCount.textContent = total;
      inputNumber_input.value = '';
      PossessionAmount -= totalAmount;
      Possession.textContent = PossessionAmount;
      totalAmount = 0;
    }
  });
  submit_btn.addEventListener('click', () => {
    const paymentAmount = selectCount.reduce((a, b) => a + b) * 1000;
    if (paymentAmount <= total) {
      changeMoney = total - paymentAmount;
      PossessionAmount += changeMoney;
      Possession.textContent = PossessionAmount;
      total = 0;
      inputNumber_input.value = '';
      balanceCount.textContent = '0';
      finalAmount += paymentAmount;
      totalPrice.children[0].textContent = `총금액 : ${finalAmount}`;
      selectCount = [0, 0, 0, 0, 0, 0];
      items.forEach(e => {
        e.classList.remove('active');
      });
      appendEarnedItems();
    } else {
      alert('잔액이 부족합니다');
    }
  });
  return_btn.addEventListener('click', () => {
    if (total > 0) {
      PossessionAmount += total;
      Possession.textContent = PossessionAmount;
      balanceCount.textContent = '0';
      total = 0;
    } else {
      alert('잔액이 없습니다');
    }
  });
}

load();
