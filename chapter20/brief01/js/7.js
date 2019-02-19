/**
 * constructor方法是类的默认方法,通过new命令生成对象实例时,自动调用该方法.
 * 一个类必须有constructor方法,如果没有显示定义,一个空的constructor方法会被默认添加.
 */
// class Point {

// }
// // 等同于
// class Point {
//   constructor() { }
// }

class Foo {
  constructor() {
    return Object.create(null);
  }
}
console.log(new Foo() instanceof Foo);