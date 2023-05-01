// pandding
// pulfilled 이행상태
// resolve 성공상태
// rejected 실패상태

function sayHello() {
  return new Promise((resolve, reject) => {
    const hello = 'hello world';
    resolve(hello);
    // reject(new Error());
  });
}

sayHello()
  .then(resolvedData => {
    console.log(resolvedData);
    return resolvedData;
  })
  .then(resolvedData => {
    console.log(resolvedData);
    return resolvedData;
  })
  .then(resolvedData => {
    console.log(resolvedData);
  })
  .catch(error => {
    console.log(error);
  });
