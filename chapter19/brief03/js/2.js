// 正常情况下,await命令后面是一个Promise对象,返回该对象的结果.如果不是Promise对象,就直接返回对应的值.
async function f() {
  return await 123;
}
f().then(v => console.log(v));

class Sleep {
  constructor(timeout) {
    this.timeout = timeout;
  }
  then(resolve, reject) {
    const startTime = Date.now();
    setTimeout(() => resolve(Date.now() - startTime), this.timeout);
  }
}
(async () => {
  const actualTime = await new Sleep(1000);
  console.log(actualTime);
})();
async function g() {
  try {
    await Promise.reject('出错了');
  } catch (e) {
  }
  return await Promise.resolve('hello world');
}
g().then(v => console.log(v));

async function h() {
  await Promise.reject('出错了').catch(e => console.log(e));
  return await Promise.resolve('hello world');
}
h().then(v => console.log(v));