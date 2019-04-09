// 如果await后面的异步操作出错,那么等同于async函数返回的Promise对象被reject
async function f() {
  await new Promise(function (resolve, reject) {
    throw new Error('出错了');
  });
}
f().then(v => console.log(v)).catch(e => console.log(e));

// 如果有多个await命令,可以统一放在try...catch结构中.
async function main() {
  try {
    const val1 = await firstStep();
    const val2 = await secondStep(val1);
    const val3 = await thirdStep(val1, val2);
    console.log('Final:', val3);
  } catch (err) {
    console.error(err);
  }
}
const superagent = require('superagent');
const NUM_RETRIEST = 3;
async function test() {
  let i;
  for (let i = 0; i < NUM_RETRIEST; ++i) {
    try {
      await superagent.get('http://google.com/this-throws-an-error');
      break;
    } catch (err) { }
  }
  console.log(i);
}
test();
// await命令后面的Promise对象,运行结构可能是rejected,所以最好把await命令放在try...catch代码块中.
async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}
async function myFunction() {
  await somethingThatReturnsAPromise().catch(function (err) {
    console.log(err);
  });
}
// 多个await命令后面的异步操作,如果不存在继发关系,最好让它们同时出发.
// let foo=await getFoo();
// let bar=await getBar();

let [foo, bar] = await Promise.all([getFoo(), getBar()]);
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
// await命令只能用在async函数之中

async function dbFunc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));
  let results = await Promise.all(promises);
  console.log(results);
}
async function dbFunc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));
  let results = [];
  for (let promise of promises) {
    results.push(await promise);
  }
  console.log(results);
}
// esm模块加载器支持顶层await,即await命令可以不放在async函数里面,直接使用.
const start = async () => {
  const res = await fetch('google.com');
  return res.text();
};
start().then(console.log);

const res = await fetch('google.com');
console.log(await res.text());