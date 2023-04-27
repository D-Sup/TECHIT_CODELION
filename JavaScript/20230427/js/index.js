import ColaGenerator from "./classes/colaGenerator.js";
import VendingMachineEvents from "./classes/vendingMachineEvents.js";

const colaGenerator = new  ColaGenerator();
const vendingMachineEvents = new  VendingMachineEvents();

// 탑레벨 await : 최상위 모듈에서 실행되는 await
// 모듈중에서 index.js가 최상위에 있는데 
// 최상위 모델에서는 async 없이 await으로 실행을 시켜도 상관이 없음


//   (async function () {
// })


(async function () {
    await colaGenerator.setup();
    vendingMachineEvents.bindEvent();
})()