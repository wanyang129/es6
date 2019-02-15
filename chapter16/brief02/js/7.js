let iterable = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator],
};
for (let item of iterable) {
  console.log(item);
}
// 如果Symbol.iterator方法对应的不是遍历器生成函数（即会返回一个遍历器对象），解释引擎将会报错。
var obj = {};
obj[Symbol.iterator] = () => 1;
[...obj]
// 上面代码中，变量obj的Symbol.iterator方法对应的不是遍历器生成函数，因此报错。
