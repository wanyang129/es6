/**
 * 对象的Symbol.unscopables属性,指向一个对象.
 * 该对象指定了使用with关键字时,哪些属性会被with环境排除.
 * 
 * Array.prototype[Symbol.unscopables]
 * {
 *  copyWithin:true
 *  entries:true
 *  fill:true
 *  find:true
 *  findIndex:true
 *  includes:true
 *  keys:true
 * }
 */
console.log(Object.keys(Array.prototype[Symbol.unscopables]));
// 上面代码说明,数组有7个属性,会被with命令排除
// class MyClass {
//   foo() {
//     return 1;
//   }
// }
// var foo = function () {
//   return 2;
// };
// with (MyClass.prototype) {
//   console.log(foo());
// }

// 有unscopables时
class MyClass {
  foo() {
    return 1;
  }
  get [Symbol.unscopables]() {
    return {
      foo: true
    }
  }
}
var foo = function () {
  return 2;
}
with (MyClass.prototype) {
  console.log(foo());
}
/**
 * 上面代码通过指定Symbol.unscopables属性,
 * 使得with语法块不会在当前作用域寻找foo属性,
 * 即foo将指向外城作用域的变量.
 */