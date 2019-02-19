// 类的内部所有定义的方法,都是不可枚举的.
class Point {
  constructor(x, y) {

  }
  toString() {

  }
}
console.log(Object.keys(Point.prototype));
console.log(Object.getOwnPropertyNames(Point.prototype));