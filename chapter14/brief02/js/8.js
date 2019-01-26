// Reflect.construct方法等同于new target(...args),这提供了一种不使用new,来调用构造函数的方法.
function Greeting(name) {
  this.name = name;
}
const instance = new Greeting('张三');
const instance = Reflect.construct(Greeting, ['张三']);