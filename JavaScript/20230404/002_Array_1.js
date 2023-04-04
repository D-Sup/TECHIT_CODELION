const arr = [10, 20, 30]
arr[0] = 100 // const는 값의 변화가 안된다고 하지 않았나? // mutable
console.log(arr)
console.dir(arr)

// string
const s = 'hello wolrd'
console.log(s[0])
s[0] = 'i' // immutable

// arr.1 // error
// 숫자로 들어간 값은 대괄호로 호추할 수 있고
// length는 문자임, 문자로 입력된 값은 .을 찍어서 호출할 수 있음
arr[1]
arr.length
arr['length']

// 두개가 같은 얘기다
arr.length = 10
arr[0] = 100
// [10, 20, 30, empty × 7]

// 프로퍼티를 추가하는 것도 가능하다
arr['dongsup'] = 100
arr.dongsup = 1000

// 배열의 특징
// let arr = [];
// let arr = [1,2,3];
// let arr2 = new Array(4,5,6);
// let arr2 = new Array(3)
// Array(100).fill(0)

// 배열의 특징
// 1. 배열은 순서가 있음. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing 이라고함
// 배열안에 값을 원소(elements) 라고 합니다

// 2. 배열에 다른 원시타입과 객체 타입을 포함 할 수 있습니다.
// 2차원 배열은 행렬 즉, 매트릭스라고 부름
// 배열안에 배열을 원소로 가지고 있을때
const arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

arr[0]
// [1,2,3]
arr[1]
// [4,5,6]
arr[2]
// [7,8,9]
arr[1][2]
// 6

// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10 // 스칼라
const b = [10,20,30] // 벡터
const c = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
] // 메트릭스
const d = [
  [[1,2], [1,2], [1,2]],
  [[1,2], [1,2], [1,2]],
  [[1,2], [1,2], [1,2]]
] // 텐서(3차원 이상의 다차원)

// 그렇기에 인공지능 중 가장 유명한 라이브러리
// 텐서플로우는 결국 다차원 행렬의 연산이다
// 인공지능은 행렬의 연산이다

// push
const arr = [1, 2, 3];
arr.push(4)

// push 실무 예제
// let tableBodyData = []
//     for (const iterator of data) {
//         tableBodyData.push(`          
//             <tr>
//                 <td>${iterator['a']}</td>
//                 <td>${iterator['b']}</td>
//                 <td>${iterator['c']}</td>
//                 <td>${iterator['d']}</td>
//                 <td>${iterator['e']}</td>
//                 <td>${iterator['f']}</td>
//             </tr>
//         `)
//     }
//     document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')
const arr = [1, 2, 3, 4, 5]
arr.pop() 
// 1. 마지막에서 값을 꺼내고 
// 2. 꺼낸 값을 반환(return) 합니다.
// 5
arr
// (4) [1, 2, 3, 4]

// pop
const arr = [1, 2, 3, 4, 5]
let lastValue = arr.pop()
arr

// unshift
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1);

// shift
// 1. 앞에서 값을 꺼내고 
// 2. 꺼낸 값을 반환(return) 합니다.
const myArray2 = ["사과", "바나나", "수박"];
// myArray2.shift();
// console.log(myArray2); 

let firstValue = myArray2.shift();
firstValue
// 사과

// push 배열의 뒤에서 값을 추가한다
// pop 배열의 뒤에서 값을 꺼내고 반환할 수 있다
// unshift 배열의 앞에서 값을 추가한다
// shift 배열의 앞에서 값을 꺼내고 반환할 수 있다

// arr.splice(start, deleteCount , items)
const arr = [1,2,3];
arr.splice(1, 0, 4); // arr에 1번째에 아무것도 삭제하지 않고 4를 넣겠다

const arr = [1,2,3];
arr.splice(1, 0, [10,20,30]); // arr에 1번째에 아무것도 삭제하지 않고 [10,20,30]를 넣겠다

const arr = [1,2,3];
arr.splice(1, 0, ...[10,20,30]); // arr에 1번째에 아무것도 삭제하지 않고 10,20,30를 넣겠다

const arr = [1,2,3];
arr.splice(1, 0, 10,20,30); // arr에 1번째에 아무것도 삭제하지 않고 10,20,30를 넣겠다

// 문제
const arr = [10,20,30,40,50]
const x = [1,2,3]
// [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]
arr.splice(1,0,...x)
arr.splice(6,1,...x)

const arr = [10, 20, 30, 40, 50]
arr.splice(2,1,5) // arr에 2번째에, 1개를 삭제하고, 5를 넣는다
// arr.splice().splice() // 메서드 체이닝이 안되는 이유는 splice는 arr가 아니라 삭제된 값을 반환하기 때문
// 따라서 리턴값이 빈 array이기 때문에 메서드 체이닝이 안됨
arr.splice(2,2) // 2번째 인덱스에서 값 2개를 삭제 삽입은 없음

const arr = [1,2,3,4,5]
arr.splice()
// []

const arr = [1,2,3,4,5]
arr.splice(1)
// [2, 3, 4, 5]

const arr = [1,2,3,4,5]
arr.splice(2)
// [3, 4, 5]

// arr.slice(start, end)
const myArray = ['apple', 'banana', 'cherry', 'durian', 'elderberry'];
console.log(myArray.slice(1,4))
console.log(myArray)
myArray.slice(1)
myArray.slice(0,100)

//////

const arr = [10, 20, 30, 40, 50]
// arr.forEach(함수)
// 함수(callbackfn): (value: number, index: number, array: number[]
arr.forEach(function(item, index){
    console.log(index, item)
})

arr.forEach(function(item, index){
    console.log(index, item)
    console.log('hello')
    console.log('world')
})

arr.forEach(function(item, index, arr){
    console.log(index, item, arr)
    console.log('hello')
    console.log('world')
})

// 실무에서 사용하는 코드는 아닙니다.
const arr = Array(100).fill(0)
const arr = []

// arr.forEach(function(item, index){
//     arr2.push(index)
// })

// 같은 코드1 (이름이 없는 함수 사용)
// arr.forEach(function(item, index){
//     arr2.push(index+1)
// })

// 같은 코드2 (화살표 함수 사용)
// arr.forEach((item, index) => {
//     arr2.push(index+1)
// })

// 같은 코드3(중괄호를 생략한 화살표 함수 사용, 주로 실무에서 사용)
// arr.forEach((item, index) => arr2.push(index+1))

// 같은 코드4(이렇게는 사용하지 않습니다.)
const arr = Array(100).fill(0)
const arr2 = []

function hojun(item, index){
    arr2.push(index+1)
}

arr.forEach(hojun)

// nodeList에서 forEach와 Array에서 forEach는 다릅니다
// nodeList에서 forEach는 익스플로러를 지원하지 않습니다

const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push('💖' + item + '💖');
});

// map (면접 질문에서도 많이 나옴, 데이터를 뽑으려고 많이 사용된다)
// map은 새로운 배열을 생성
const arr = [1,2,3]
arr.map((item, index)=>{
  item ** 2
})

const arr = [1,2,3]
arr.map(function(x){
  return x ** 2
})

arr.map(x=> x**2)

const arr = Array(100).fill(0)
// 같은 코드 1
const arr = Array(100).fill(0)
arr.map((v, i) => i)

// 같은 코드 2
const arr = Array(100).fill(0)
arr.map(function(v, i){
    return i
})

// 같은 코드 3
const arr = Array(100).fill(0)
function hojun(v, i){
    return i
}
arr.map(hojun)

// 같은 코드 4
const arr = Array(100).fill(0)
arr.map((v, i) => {
    return i
})

// forEach와 map의 차이
// forEach는 행위가 들어가는거고
// map은 생성할 값을 적시해줘야 return

// 실무 팁(***)
let tip1 = [1,2,3,4,5]
// console.log(tip1[tip1.length-1])
// 원본 수정(손상) 없이 [1,2,3,4] 값과 [5]라는 값을 얻어내고 싶을 때
console.log([...tip1].pop())
let tip2 = [...tip1]
console.log(tip2.pop())
console.log9(tip2)

let tip3 = [1,2,3,4,5]
let tip4 = [10,20,30,40,50]

console.log(...tip3, 1000, ...tip4) 
// [1,2,3,4,5, 1000, 10,20,30,40,50]

const tip5 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
Math.max(...tip5.flat())
// 다차원 배열에서 최솟값, 최댓값 찾기
// flat - 배열 평탄화
const tip6 = [
  [[1,2], [1,2], [1,2]],
  [[1,2], [1,2], [1,2]],
  [[1,2], [1,2], [1,2]]
] 

tip6.flat()
tip6.flat(1) // 한번 평탄화 
tip6.flat(2) // 두번 평탄화
tip6.flat(Infinity) // 다 펼쳐지면 스톱

const tip7 = new Array(10).fill(0) // new없이도 작동
const tip8 = Array.from('hello world') // new없이도 작동
'.'.repeat(100).split('.') // 권하진 않음
// split보다는 from을 추천

let tip10 = [1,2,3,4,5]
// 주의 : 마지막에 SLICE 한 값이 반영
console.log([tip10.slice(0,2), 1000, tip10.slice(2, 5)])
console.log([...tip10.slice(0,2), 1000, ...tip10.slice(2, 5)])
[1,2,1000,3,4,5]
tip10.splice(2, 0, 1000)
// map
const tip11 = Array(100).fill(0).map((v,i) => i+1)

const tip12 = [
  {
    "_id": "642ba3980785cecff3f39a8d",
    "index": 0,
    "age": 28,
    "eyeColor": "green",
    "name": "Annette Middleton",
    "gender": "female",
    "company": "KINETICA"
  },
  {
    "_id": "642ba398d0fed6e17f2f50c9",
    "index": 1,
    "age": 37,
    "eyeColor": "green",
    "name": "Kidd Roman",
    "gender": "male",
    "company": "AUSTECH"
  },
  {
    "_id": "642ba39827d809511d00dd8d",
    "index": 2,
    "age": 39,
    "eyeColor": "brown",
    "name": "Best Ratliff",
    "gender": "male",
    "company": "PRISMATIC"
  }
]
const ages1 = tip12.map((item) => item.age);
const ages2 = tip12.map((item) => {
    return item.age
});
console.log(ages1, ages2);

// arr가 아닌 [] 안에 값만 바뀌는 것이기 때문에 메모리 주소가 변화하지 않는다
// arr 에 const를 사용
// 마감일을 고려해서 견고함을 어느정도 챙겨야될까

// 마틴이 클린코드에서 주장한 원칙 5개(solid)
// SRP : 단일 책임 원칙(각 클래스(또는 모듈, 오브젝트)는 하나의 정보만 가지게 만들어야 한다)
// OCP : 개방 폐쇠 원칙(확장에는 열려 있으며, 변경에는 닫혀 있어야 한다)
// LSP : 리스코프 치환 원칙(인터페이스의 서브타이핑은 인터페이스에 정의된 형태를 최대한 유지)
// ISP : 인터페이스 분리 원칙(인터페이스는 최소한으로 유지)
// DIP : 의존 관계 역전 원칙(상위 레벨의 모듈이나 인터페이스가 서브 클래스나 타이핑에 영향을 받아서는 안된다)

// ---

// 개발자들이 가장 많이 사용하는 개발 원칙
// KISS : 최대한 단순함을 유지하라
// DRY : 똑같은 기능, 코드를 반복하지 마라
// YAGNI : 그 기능이 필요하기 전까지는 미리 만들지 마라

// ---

// 클린소프트웨어 - 악취
// 경직성 : 프로그램 변경이 어렵다. 원하는 곳만 변경하면 장애가 난다.
// 취약성 : 프로그램 변경시 아무런 연관이 없는 부분에서 장애 발생
// 부동성 : 재사용할 수 있는 컴포넌트로 구분이 어려움
// 점착성 : 개발 환경이 비효율적
// 불필요한 복잡성 : 직접 효용이 없는 구조가 디자인에 포함
// 불필요한 반복 : 단일 추상 개념으로 통합할 수 있는 반복구조 포함
// 불투명성 : 직접 만든 사람이 아닌 다른 사람이 코드를 읽고 이해하기 힘들다

// 작은 효율성에 대해서는, 말하자면 97% 정도에 대해서는 잊어버려라. 섣부른 최적화는 모든 악의 근원이다. - 도널드 커누스

// 패스트캠퍼스 CTO님
// 1. 일단 동작하게 만든 다음 더 좋게 만들어라
// 2. 언제나 발견했을 때보다 깨끗하게 해놓고 캠핑장을 떠나라
// 3. 바퀴를 새로 발명하는 일의 좋은 점은 둥근 바퀴를 얻을 수 있다는 점입니다.
