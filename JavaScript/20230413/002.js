// title: this(***)
// 정해진 틀안에 쓰이는 경우가 많음 (클래스)

function a() {
  console.log(this);
}
a(); // > window를 호출

function b() {
  console.log('hello world');
}
b();
window.b(); // > window를 호출

let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};

myObj.func1(); // > myObj를 호출

let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};
let test = myObj.func1;
test(); // > window 호출

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
+ 함수의 이름은 결국 변수일뿐이다
+ 그럼 변수는? 포스트잇이다
+ 1이라는 공간에 함수가 저장되어 있다 그곳을 가리키는 곳이 func1이고
+ myObj 안에서 func1 접근해서 호출했으니까 myObj를 호출되지만
+ 메모리 주소를 가리키고 있는 공간을 test가 가져간것
+ 따라서 호출한애는 ().test 괄호안에 있는 바로 window인 것이다
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# this가 누구일까?
+ 찍어보면 된다. console.log
++ 1. function1
++ 2. myObj
++ 3. window
## 이해해보자
| window.console.log()
+ log 입장에서는 호출한애는 console 인것이다
+ 그럼 console입장에서는 window 인것이다
+ 즉, 함수를 호출한 방법에 의해 결정이 된다
* this가 어려운 이유는 this를 포함하고 있는 함수나 객체가 있는 위치에 따라 this의 의미가 달라지기 떄문입니다
========================================================================
*/
function sayName() {
  console.log(this);
}

var c = {
  hello: 'world',
  say: sayName,
};

var b = {
  // var b = {c}
  c: c,
};

var a = {
  // var a = {b}
  b: b,
};

function sayName() {
  console.log(this);
}

var c = {
  hello: 'world',
  say: sayName,
};

var b = {
  // var b = {c}
  c: c,
  say: sayName,
};

var a = {
  // var a = {b}
  b: b,
  say: sayName,
};
/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* c.say = sayName 이 아니다
함수나 변수를 선언하면 전역에 sayName, c,b,a가 그려짐
c를 호출했을 때 또다른 영역이 그려지는데 거기에는 hello라는 애와 say가 있게됨
say는 sayName을 가리키는 것이 아니다 sayName 가 가진 함수의 기능을 말하는 것이다
함수는 변수이고 변수는 가리키고 있는 것 뿐
근데 왜 호출한 애는 c인가? c안에 say가 있기 때문
========================================================================
*/
// # 교집합의 갯수 구하는 문제
// link: https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

function solution(s1, s2) {
  s1 = new Set(s1);
  s2 = new Set(s2);
  let cro = [...s1].filter(e => s2.has(e));
  return cro.length;
}

// ========================================================================

// # 추가 예제

function sayName() {
  console.log(this.name);
}

sayName(); // window.name 과 같다

function sayName() {
  console.log(this.name);
}

sayName(); // window.name 과 같다

let peter = {
  name: 'Peter Parker',
  say: sayName,
};

let bruce = {
  name: 'Bruce Wayne',
  say: sayName,
};

peter.say();
bruce.say();

// ------------------------------------------------

function attackKnife() {
  // 레이저 공격
  this.hp -= 20;
}

function attackKnife() {
  // 레이저 공격
  this.hp -= 5;
}

let jombi = {
  name: 'jombi',
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 10000,
  power: 2,
};

let thanos = {
  name: 'thanos',
  damaged: attackBeam,
  hp: 1000,
  power: 100,
};

jombi.damaged1(); // Beam
jombi.damaged2(); // Knife
jombi;

// ------------------------------------------------

// # bind

function attackBeam() {
  // 레이저 공격
  this.hp -= 20;
}

function attackKnife() {
  // 레이저 공격
  this.hp -= 5;
}

let jombi = {
  name: 'jombi',
  damaged: [attackBeam, attackKnife],
  hp: 10000,
  power: 2,
};

let thanos = {
  name: 'thanos',
  damaged: attackBeam,
  hp: 1000,
  power: 100,
};

jombi.damaged[0](); // Beam
jombi.damaged[1](); // Knife
jombi.hp;

// ------------------------------------------------

let 호텔 = [
  {
    이름: '하나호텔',
    위치: '제주도 제주시 001',
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: '둘호텔',
    위치: '제주도 제주시 002',
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: '셋호텔',
    위치: '제주도 제주시 003',
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

// ------------------------------------------------

function sayName() {
  console.log(this);
}

var c = {
  hello: 'world',
  say: sayName,
};

var b = {
  c: c,
};

var a = {
  b: b,
};

a.b.c.say();
// window에는 abc가 다들어가고 a에 b라는에가 생성되고

function a() {
  console.log(this);
  function b() {
    console.log(this);
    function c() {
      console.log(this);
    }
    c();
  }
  b();
}
a();
/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
+ a, b, c 모두 window
+ a.b.c() 이런 식으로 함수에 함수에 함수가 있으면 호출한 객체를 타고 올라가는 형태가 아닙니다.
+ window입장에서 a를 실행시켰고 b라는 애를 실행시켰고 또 그안에 있는 c를 실행시킨다 이것을 호출한 객체는 결국엔 window이다
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
