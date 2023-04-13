// title: 집합, 합집합, 교집합, 차집합, 여집합
// + 실무에서 많이 사용이 안되지만
// + 알고리즘 문제에서는 거의 필수로 사용되는 자료형입니다

// ========================================================================

let s = new Set('aabbbccccdd'); // 중복을 제거하는구나

별명게시판 = ['안동섭', '안동섭', '안동섭', '김동섭', '윤동섭', '야동섭', '안동찜닭'];

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야 합니다.)
let 게시자 = new Set(별명게시판);
게시자.size;

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of 게시자) {
  console.log(
    i,
    별명게시판.filter(e => e === i),
  );
}

for (const i of 게시자) {
  console.log(i, 별명게시판.filter(e => e === i).length);
}

// ------------------------------------------------
/*
# 풀이
| let map = new Map();
| for (const i of 별명게시판) {
|   map.set(i, (map.get(i) || 0) + 1);
| }

+ 1번째 순회 '안동섭'
| map.set(i, (map.get(i) || 0) + 1)
| let map = new Map()
| map.get('안동섭') 
> undefined
| map.set('안동섭', 1)

+ 2번째 순회 i에 '안동섭'
| map.set(i, (map.get(i) || 0) + 1)
| map.set('안동섭', 2) // 최종
*/
// ========================================================================

// # set 연습 

let s = new Set('aabbbccccdd');
s.size;
s.has('a');
s.has('f');
s.add('z');
s;

for (const i of s) {
  console.log(i);
}

let s = new Set('aabbbccccdd'.split(''))
let s = new Set(['a','a''b','b','b','c','d','d','d',])

// ========================================================================

// # 교집합

let a = new Set('abc')
let b = new Set('cde')
let cro = [...a].filter(e => b.has(e))

// + forEach 유의점

s.forEach((value, value, set)=>{})
// array와 다르게 value가 2번입니다
// IE10은 미지원

// # 합집합

let union = new Set([...a].concat(...b))
let union = new Set([...a, ...b])


// # 차집합

let dif = [...a].filter(e=> !b.has(e))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// # set, map, object, array, string가 이터러블 객체? 순서는 보장하는지?
// + 이터러블한 객체란? 순회가 가능한 객체다.
// + 쉽게 for문을 돌려서 잘 실행되면 순회가 가능하다고 할 수 있다
// + set, map, array, string (object x)

// 순서를 보장하나요? (object는 순서를 보장하지 않습니다)
// set, map, array, string
// 순서를 보장하지 않기때문에 object에서 keys를 뽑아서 정렬을 했는데 정렬이 안될경우 map을 사용하면 순서보장이 되기떄문에 정렬이 됨

// NaN과 undefined도 Set에 저장할 수 있습니다. 
// 원래 NaN !== NaN이지만, Set에서 NaN은 NaN과 같은 것으로 간주됩니다.

// ========================================================================

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(isNaN(undefined)); // true
console.log(isNaN(null)); // false
console.log(isNaN(NaN)); // true
console.log("---");

// isNaN 은 혼란을 주기 때문에 Number.isNaN 을 써야한다

// ES6에서 추가 도입(암기)
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(NaN)); // true

// 삽입 순서대로 요소를 순회할 수 있다는게 순서를 보장한다는 것과는 다른 말일까요?
// 어떠한 상황에서도 변경시키지 않는다는 것

// link: https://github.com/weniv/game-with-phaser
// link: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set
// link: https://myung-ho.tistory.com/90

// ========================================================================

// # 교집합의 갯수 구하는 문제
// link: https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

function solution(s1, s2) {
  s1 = new Set(s1)
  s2 = new Set(s2)
  let cro = [...s1].filter(e => s2.has(e))
  return cro.length;
}

// link: https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order) // '29423' 
      .split("") // ['2', '9', '4', '2', '3']
      .filter((num) => mySet.has(parseInt(num))).length;
}

// link: https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n) {
  let answer = [];

  let i = 2;
  while (i <= n) {
      if (n % i === 0) {
          answer.push(i);
          n = n / i;
      } else {
          i++;
      }
  }

  return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}