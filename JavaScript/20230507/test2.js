let user = {
  firstName: "John"
};

function func(phrase) {
  console.log(phrase + ', ' + this.firstName);
}

// this를 user로 바인딩합니다.
let funcUser = func.bind(user);

funcUser("Hello"); // Hello, John (인수 "Hello"가 넘겨지고 this는 user로 고정됩니다.)