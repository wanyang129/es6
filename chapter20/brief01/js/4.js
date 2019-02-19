// 在类的实例上面调用方法,其实就是调用原型上的方法.
class B { }
let b = new B();
console.log(b.construnctor === B.prototype.construnctor);
// 由于类的方法都定义在prototype对象上面,所以类的新方法可以添加在prototype对象上面.
// Object.assign方法可以很方便的一次向类添加多个方法.
class Point {
  constructor() {

  }
}
Object.assign(Point.prototype, {
  toString() { },
  toValue() { }
});
// prototype对象的constructor属性,直接指向"类"的本身,这与es5的行为是一致的.
console.log(Point.prototype.constructor === Point);