// for...of循环可以自动遍历Generator函数运行时生成的Iterator对象,且此时不再需要调用next方法.
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}
for (let v of foo()) {
  console.log(v);
}
/**
 * 上面代码使用for...of循环,依次显示5个yield表达式的值.
 * 这里需要注意,一旦next方法的返回对象的done属性为true,for...of循环就会终止,
 * 且不包含该返回对象,所以上面代码的return语句返回的6,不包括在for...of循环之中.
 */
function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (; ;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}
for (let n of fibonacci()) {
  if (n > 1000)
    break;
  console.log(n);
}
/**
 * 利用for...of循环,可以写出遍历任意对象的方法.
 * 原生的javascript对象没有遍历接口,无法使用for...of循环,
 * 通过Generator函数为它加上这个接口,就可以用了.
 */
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);
  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}
let jane = { first: 'Jane', last: 'Doe' };
for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}:${value}`);
}
/**
 * 除了for...of循环意外,扩展运算符,解构赋值和Array.from方法内部调用的,
 * 都是遍历器接口.这意味着,它们都可以将Generator函数返回的Iterator对象,作为参数.
 */
function* numbers() {
  yield 1;
  yield 2;
  return 3;
  yield 4;
}
console.log([...numbers()]);
console.log(Array.from(numbers()));
let [x, y] = numbers();
console.log(x);
console.log(y);
for (let n of numbers()) {
  console.log(n);
}