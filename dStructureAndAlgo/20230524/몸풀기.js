// title: 값 서로 바꾸기
let a = 'hello'
let b = 'lions'
let c;
c = a;
a = b;
b = c;

let a1 = 10;
let b1 = 20;

// # 첫번째 방법
a1 = a1 + b1; // a1 : 40;
b1 = a1 - b1; // b1 : 10;
a1 = a1 - b1; // 40 - 10

// # 두번째 방법
[a1,b1] = [b1,a1]

// # 세번째 방법
a = [a,b];
b = a[0];
a = a[1]

// # 네번째 방법
function switchNum(a,b){
  a1 = b;
  b1 = a;
  console.log(a1, b1);
}
switchNum(a1,b1)




