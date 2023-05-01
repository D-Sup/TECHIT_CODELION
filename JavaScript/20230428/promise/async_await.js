function sayHello() {
  return new Promise((resolve, reject) => {
    const hello = 'hello world';
    resolve(hello);
    // reject(new Error());
  });
}

async function test () {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();