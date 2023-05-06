// var obj = {
//   a: 1, 
//   method: function (x, y) {
//     console.log(this.a, x, y);
    
//   }
// };

// obj.method(2,3);
// obj.method.bind({a:4}, 5,6)

var func = function (a,b,c,d) {
  console.log(this, a,b,c,d);
}

var func2 = function (a,b,c,d) {
  console.log(this, a,b,c,d);
}

var func3 = function (a,b,c,d) {
  console.log(this, a,b,c,d);
}
// func(1,2,3,4)

// func.call({x: 1},1,2,3,4)
// var bindFunc2 = func2.bind({x: 1})
// bindFunc2(5,6,7,8)


var bindFunc3 = func3.bind({x: 1},5,6,7)
bindFunc3(8)


let user = {
  firstName: "John"
};

function func(phrase) {
  console.log(phrase + ', ' + this.firstName);
}

// this를 user로 바인딩합니다.
let funcUser = func.bind(user);

funcUser("Hello"); // Hello, John (인수 "Hello"가 넘겨지고 this는 user로 고정됩니다.)