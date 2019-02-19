class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ',' + this.y + ')';
  }
}
// es6的类,完全可以看做构造函数的另一种写法
console.log(typeof Point);
console.log(Point === Point.prototype.constructor);
// 使用的时候,也是直接对类使用new命令,跟构造函数的用法完全一致.
class Bar {
  doStuff() {
    console.log('stuff');
  }
}
var b = new Bar();
b.doStuff();