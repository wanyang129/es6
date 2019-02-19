// 与es5一样,实例的属性除非显示定义在其本身(即定义在this对象上),否则都是定义在原型上(即定义在class上).
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ',' + this.y + ')';
  }
}
var point = new Point(2, 3);
console.log(point.toString());
console.log(point.hasOwnProperty('x'));
console.log(point.hasOwnProperty('y'));
console.log(point.hasOwnProperty('toString'));
console.log(point.__proto__.hasOwnProperty('toString'));