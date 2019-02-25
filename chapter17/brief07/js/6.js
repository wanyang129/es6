function* inner() {
  yield 'hello!';
}
function* outer2() {
  yield 'open';
  yield* inner();
  yield 'close';
}
var gen = outer2();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
/**
 * 上面例子中，outer2使用了yield*表达式，outer1没使用。
 * 结果就是，outer1返回一个遍历器对象，outer2返回该遍历器对象的内部值。
 * 
 * 从语法角度看，如果yield表达式后面跟的是一个遍历器对象，需要在yield表达式后面加上星号，
 * 表明它返回的是一个遍历器对象。这被称为yield*表达式。
 */