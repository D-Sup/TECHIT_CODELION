let x = 5;
let y = 10;
console.log(x >  y) // false

// true, false 

let a2 = 'hello';
let b2 = 'world';

console.log(a2 && b2)

// 별표 ****
console.log(Boolean('hello')) // t
console.log(Boolean('')) // f
console.log(Boolean([1,2,3])) // t
console.log(Boolean([])) // 말도 안되게 t
console.log(Boolean({'one':10, 'two':20})) // t
console.log(Boolean({})) // t일줄 알았지만 f
console.log(Boolean(0)) // f
console.log(Boolean(-1)) // t 0외 다른숫자는 t
console.log(Boolean(undefined)) // f
console.log(Boolean(null)) // f
console.log(Boolean(NaN)) // f

if (undefined) {
  console.log('hello')
}

let aa;
if(aa) {
  console.log('hello')
}
// 아래와 같이 코드를 짰을때 만약 aaa가 사용자가 입력해야하는 값인데
// if문에 저렇게 수식이 들어갔다고 하면 어떻게 될것인가?
// 답할 수 있어야 견고한 코드를 짤 수 있다
// 견고한 코드 : 어떤 상황에서도 기능이 무너지지 않는 코드
let aaa;
if(aaa > 100) {
  console.log('hello')
}