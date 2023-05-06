// const person = { name: 'DongSup' };

// function sayHi(message) {
//   console.log(`${message} ${this.name}`);
// }

// // call 
// sayHi.call(person, "What's up,"); // 출력 결과: What's up, DongSup

// // apply 
// sayHi.apply(person, ['Bonjour']); // 출력 결과: Bonjour Donsup

// // bind 
// const boundFunc = sayHi.bind(person);
// boundFunc('Hi'); // 출력 결과: Hi DongSup

var func = function(a, b, c, d) {
  console.log(this, a, b, c, d);
  
}

var bindFunc1 = func.bind({x: 1})

bindFunc1(1,2,3,4)