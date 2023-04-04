// 고급 템플릿 리터럴(React)문법을 한 번 더 합니다

const x = 10;
const y = 10;
console.log(`x 값은 ${x}이고 y값은 ${y}이고 두개를 곱한 값은 ${x*y}입니다.`); // 템플릿 리터럴 중괄호 안에 연산을 넣는 것을 권하지 않습니다

const x2 = 10;
const y2 = 10;
const result = x2 * y2;
console.log(`x 값은 ${x}이고 y값은 ${y}이고 두개를 곱한 값은 ${result}입니다.`); 

// console.log('
// h
// e
// l
// l
// o')

console.log(`
h
e
l
l
o`)

const s = 'hello'
const ss = 'world'
const result2 = s + '\n' + ss
console.log(result2);

// 단점을 '굳이' 뽑자면
// if문이 중첩된 상태에서 정렬을 하면 결과에서 탭이 적용됨
if (true) {
  if (true) {
    if (true) {
      console.log(`
      h
      e
      l
      l
      o`)
    }
  }
}
// h
      // e
      // l
      // l
      // o