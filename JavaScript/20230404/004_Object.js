const human = {
  name: 'dongsup',
  age: 25,
  from: 'Korea',
  askingHim: function(){
    console.log('hello world');
  },
  0: '010xxxxxxxx'
}

console.log(human['0'])
console.log(human[0])
// console.log(human.0) error 그래서 arr.1 안되는 것이다

// 유사배열객체는 실무에서도 사용하지 않음
const arr = {
  0: 10,
  1: 20,
  length: 3
};

// 배열이 아닙니다. 유사배열객체라고 한다
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠릅니다

const human = {
  name: "hojun",
  age: 53,
  from: "korea",
  askingHim: function () {
      console.log("hello world!");
  },
  0: '01050442903'
};

human.name = 'jun'
human.askingHim()
delete human.job;

console.log('age' in human)
// console.log(20 in [10,20,30,40]) error
// in연산자가 키를 순회해서 error

const aespa = {
  members: ['카리나', '윈터', '지젤', '닝닝'],
  from: '광야',
  sing: function(){
      return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
  }
};

// 별표(**)
console.log(aespa.hasOwnProperty('itzy'));
console.log(aespa.hasOwnProperty('sing'));

// 별표(***)
// aespa.keys()
console.log(Object.keys(aespa)) // 불편한 코드
console.log(Object.keys(aespa)) // 불편한 코드