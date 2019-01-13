// get方法用于拦截某个属性的读取操作,
// 可以接受三个参数,依次为目标对象、属性名和proxy实例本身(严格的说,是操作行为所针对的对象),其中最后一个参数可选.
var person = {
  name: '张三'
};
var proxy = new Proxy(person, {
  get: function (target, property) {
    if (property in target) {
      return target[property];
    } else {
      throw new ReferenceError("Propery \"" + property + "\" does not exist");
    }
  }
});
console.log(proxy.name);
console.log(proxy.age);
