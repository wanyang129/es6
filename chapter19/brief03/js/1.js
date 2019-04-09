// async函数的语法规则总体上比较简单,难点是错误处理机制.
// async函数返回一个Promise对象.
// async函数内部return语句返回的值,会成为then方法回调函数的参数.
async function f() {
  return 'hello world';
}
f().then(v => console.log(v));

async function g() {
  throw new Error('出错了');
}
g().then(v => console.log(v), e => console.log(e));
/**
 * async函数返回的Promise对象,必须等到内部所有await命令后面的Promise对象执行完,才会发生状态改变,
 * 除非遇到return语句或者抛出错误.也就是说,只有async函数内部的异步操作执行完,才会执行then方法指定的回调函数.
 */
async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1]
}
getTitle('https://tc39.github.io/ecma262/').then(console.log);