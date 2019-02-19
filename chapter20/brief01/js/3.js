// 构造函数的prototype属性,在es6的类上面继续存在.事实上,类的所有方法都定义在类的prototype属性上面.
class Point {
  constructor() {

  }
  toString() {

  }
  toValue() {

  }
}
// 等同于
Point.prototype = {
  constructor() { },
  toString() { },
  toValue() { },
}