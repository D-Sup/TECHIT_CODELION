import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("total");

const PRICE = 17500;

// Action
const addNumber = () => {
  store.dispatch({ type: "ADD" });
};

//Action
const substractNumber = () => {
  store.dispatch({ type: "SUBSTRACT" });
};

// Reducer
const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      minus.disabled = false;
      return state + 1;
    case "SUBSTRACT":
      plus.disabled = false;
      return state - 1;
    default:
      return state;
  }
};

// create Store
const store = createStore(countReducer);


const handleWrite = () => {
  number.innerText = store.getState();
  quantity.innerText = store.getState();
  totalPrice.innerText = store.getState() * PRICE;
  console.log(store.getState());
};

// Update UI
store.subscribe(handleWrite);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);

// // UI Update - text 
// // Redux의 render 함수와 같은 역할
// const updateResult = (c) => {
//     number.innerText = c;
//     quantity.innerHTML = c;
//     totalPrice.innerHTML = c * PRICE;
// };

// // State Change
// // Redux의 reducer 함수와 같은 역할
// const addNumber = () => {
//     count += 1;
//     minus.disabled = false;
//     updateResult(count);
// };

// // State Change
// const substractNumber = () => {
//     count -= 1;
//     plus.disabled = false;
//     updateResult(count);
// };

// // Init
// number.innerHTML = count;
// updateResult(count);


// // Event
// plus.addEventListener("click", addNumber);
// minus.addEventListener("click", substractNumber);