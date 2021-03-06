// 观察者模式指的是函数自动观察数据对象,一旦对象有变化,函数就会自动执行.

// observable函数返回一个原始对象的Proxy代理,拦截赋值操作,触发充当观察者的各个函数.
const queuedObservers = new Set();
const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, { set });
function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}
const person = observable({
  name: '张三',
  age: 20
});
function print() {
  console.log(`${person.name},${person.age}`);
}
observe(print);
person.name = '李四';