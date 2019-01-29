// const p1 = new Promise(function (resolve, reject) {
//   //...
// });
// const p2 = new Promise(function (resolve, reject) {
//   resolve(p1);
// });

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000);
});
p2.then(result => console.log(result)).catch(error => console.log(error));

// 调用resolve或reject并不会终结Promise的参数函数的执行
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 上面代码中,调用resolve(1)以后,后面的console.log(2)还是会执行,并且会首先打印出来.
// 这是因为立即resolved的Promise是在本轮事件循环的末尾执行,总是晚于本轮循环的同步任务.

// 一般来说,调用resolve或reject以后,Promise的使命就完成了,后继操作应该放到then方法里面,而不应该直接写在resolve或reject的后面.
// 所以,最好在它们前面加上return语句,这样就不会有意外.
new Promise((resolve, reject) => {
  return resolve(1);
  console.log(2);
});