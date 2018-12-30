// 参数默认值可以与解构赋值的默认值,结合起来使用.
function foo({ x, y = 5 }) {
  console.log(x, y);
}
foo({});
foo({ x: 1 });
foo({ x: 1, y: 2 });
// foo();
/**
 * 上面代码只使用了对象的解构赋值默认值,没有使用函数参数的默认值.
 * 只有当函数foo的参数是一个对象时,变量x和y才会通过解构赋值生成.
 * 如果函数foo调用时没有提供参数,变量x和y就不会生成,从而报错.
 * 通过提供函数参数的默认值,就可以避免这种情况.
 */

function foo1({ x, y = 5 } = {}) {
  console.log(x, y);
}
foo1();
// 上面代码指定,如果没有提供参数,函数foo1的参数默认为一个空对象