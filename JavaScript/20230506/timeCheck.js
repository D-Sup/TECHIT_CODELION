let start = Date.now();

const result = x => {
  console.log(`${x}가 실행되는데 걸리는 시간 : ${Date.now() - start}`);
};

const asyncBlocking = () => {
  return new Promise(resolve => {
    let i = 0;
    while (i < 9999999) {
      i++;
    }
    resolve('blocking finished');
  });
};

result('동기식 코드1');

setTimeout(() => {
  result('setTimeout finished');
}, 0);

// result(asyncBlocking());
// 프로미스 객체를 만드는 과정은 동기적으로 진행됩니다!
result(
  asyncBlocking().then(txt => {
    result(txt);
  }),
);
result('동기식 코드2');

// ---------------------------------------

async function message() {
  let hello = await new Promise(resolve => {
    setTimeout(() => {
      resolve('hello');
    }, 100);
  });

  let world = await new Promise(resolve => {
    setTimeout(() => {
      resolve('world');
    }, 100);
  });

  console.log(`${hello} ${world}`);
}

message();

// promise로 변형해보기

function message() {
  new Promise(resolve => {
    setTimeout(() => {
      resolve('hello');
    }, 100);
  }).then((result) => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve(resolve + 'world');
      }, 100);
    }).then(message => {
      console.log(message);
    });
  });
  console.log(`${hello} ${world}`);
}

message();


// ----------------------------------


function message() {

  Promise.all([
    new Promise(resolve => {
      setTimeout(() => {
        resolve('hello');
      }, 100);
    }),
    new Promise(resolve => {
      setTimeout(() => {
        resolve(resolve + 'world');
      }, 100);
    })
  ]).then(([hello, world]) => {
  // ]).then((resultArray) => {
    console.log(`${hello} ${world}`);
  })
}

message();


async function message() {
  const [hello, world] = await Promise.all([
      new Promise((resolve) => {
          setTimeout(() => {
              resolve('hello');
          }, 100)
      }),
      new Promise((resolve) => {
          setTimeout(() => {
              resolve('world');
          }, 100)
      })
  ]);

  console.log(`${hello} ${world}`);
}

message();