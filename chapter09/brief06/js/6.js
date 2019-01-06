const o = Object.create({ x: 1, y: 2 });
o.z = 3;
let { x, ...newObj } = o;
let { y, z } = newObj;
console.log(newObj);
console.log(x);
console.log(y);
console.log(z);
/**
 * 上面代码中,变量x是单纯的解构赋值,所以可以读取对象o继承的属性;
 * 变量y和z是扩展运算符的解构赋值,只能读取对象o自身的属性,所以变量z可以赋值成功,变量y取不到值.
 * 
 * es6规定,变量声明语句之中,如果使用解构赋值,扩展运算符后面必须是一个变量名,而不能是一个结构赋值表达式,
 * 所以上面代码引入了中间变量newObj.
 */

//  结构赋值的一个用户,是扩展某个函数的参数,引入其他操作.
function baseFunction({ a, b }) {

}
function wrapperFunction({ x, y, ...restConfig }) {
  // 使用x和y参数进行操作
  // 其余参数传给原始函数
  return baseFunction(restConfig);
}