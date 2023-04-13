// title: apply, call, bind

// # call
// + call() 메서드의 인수에 this 로 사용할 값을 전달할 수 있습니다.

var peter = {
  name: 'Peter Parker',
  sayName: function () {
    console.log(this.name);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
peter.sayName.call(bruce); // 너의 name에서는 bruce를 잡아

// ------------------------------------------------

var peter = {
  name: 'Peter Parker',
  sayName: function (감탄사) {
    console.log(this.name + 감탄사);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
peter.sayName.call(bruce, '!'); // > Bruce Wayne!
peter.sayName('!'); // > peter Parker!
peter.sayName(); // > Peter Parkerundefined

// + apply() 메서드의 인수에 this 로 사용할 값을 전달할 수 있으며,
// + 배열의 형태로도 전달할 수 있습니다. 아규먼트가 배열로 바뀐 call과 동일합니다.
// + 위에서 !의 값이 들어가는 자리가 아래에서는 ['batman', 'richman']이 된 것이라 \이해해주시면 됩니다.

// ------------------------------------------------

var peter = {
  name: 'Peter Parker',
  sayName: function (is, is2) {
    console.log(this.name + ' is ' + is + ' or ' + is2);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};

peter.sayName.apply(bruce, ['batman', 'richman']);

// ------------------------------------------------

// # call과 apply 비교

// 비교1
var peter = {
  name: 'Peter Parker',
  sayName: function (감탄사1, 감탄사2) {
    console.log(this.name + 감탄사1 + 감탄사2);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
peter.sayName.call(bruce, '!', '!!');

// 비교2
var peter = {
  name: 'Peter Parker',
  sayName: function (감탄사1, 감탄사2) {
    console.log(this.name + 감탄사1 + 감탄사2);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
peter.sayName.call(bruce, ['!', '!!']);

// ------------------------------------------------
// # bind

function sayName() {
  console.log(this.name);
}

var bruce = {
  name: 'bruce',
  sayName: sayName,
};

var peter = {
  name: 'peter',
  sayName: sayName.bind(bruce),
};

peter.sayName();
bruce.sayName();
