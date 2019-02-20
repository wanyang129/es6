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
/**
 * 上面代码中,x和y都是实例对象point自身的属性(因为定义在this变量上),所以hasOwnProperty方法返回true
 * 而toString是原型对象的属性(因为定义在Point类上),所以hasOwnProperty方法返回false.
 */
// 与es5一样,类的所有实例共享一个原型对象
var p1 = new Point(2, 3);
var p2 = new Point(3, 2);
console.log(p1.__proto__ === p2.__proto__);