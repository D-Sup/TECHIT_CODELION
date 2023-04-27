class VendingMachineEvents {
  constructor() {
    const vMachine = document.querySelector('.section1');
    this.balance = vMachine.querySelector('.bg-box p');
    this.itemList = vMachine.querySelector('.cola-list');
    this.inputCostEl = vMachine.querySelector('#input-money');
    this.btnPut = vMachine.querySelector('#input-money+.btn');
    this.btnReturn = vMachine.querySelector('.bg-box+.btn');
    this.btnGet = vMachine.querySelector('.btn-get');
    this.stagedList = vMachine.querySelector('.get-list');

    const myinfo = document.querySelector('.section2');
    this.myMoney = myinfo.querySelector('.bg-box strong');

    const getInfo = document.querySelector('.section3');
    this.getList = getInfo.querySelector('.get-list');
    this.txtTotal = getInfo.querySelector('.total-price');
  }

  bindEvent() {
    /*
    * 1. 입금 버튼 기능
    * 입금 버튼을 누르면 1. 소지금 === 소지금 - 입금액 
    * 1) 소지금 === 소지금 - 입금액
    * 2) 잔액 === 기존 잔액 + 입금액
    * 3) 입금액이 소지금보다 많은 경고창 출력
    * 4) 입금액이 입금되면 입금창은 초기화 되어야한다.
    */
    this.btnPut.addEventListener('click', () => {
      const inputCost = parseInt(this.inputCostEl.value); // 입력값
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',','')); // 소지금
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',','')) // 잔액

      if(inputCost) {
        // 입금액이 소지금 보다 적거나 같다면?
        if(inputCost <= myMoneyVal && inputCost > 0) {
          this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + '원';


          this.balance.textContent = new Intl.NumberFormat().format((balanceVal? balanceVal : 0 ) + inputCost) + '원';
        } else { // 입금액이 소지금 보다 많다
          alert('소지금이 부족합니다.')
        }
        this.inputCostEl.value = null;
      }
    })
  }
}

export default VendingMachineEvents;