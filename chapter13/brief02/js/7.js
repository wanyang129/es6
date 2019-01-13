// set方法用来拦截某个属性的赋值操作,可以接受四个参数,依次为目标对象、属性名、属性值和Proxy实例本身,其中最后一个参数可选.
// 假定Person对象有一个age属性,该属性应该是一个不大于200的整数,那么可以使用Proxy保证age的属性符合要求
let validator = {
  set: function (obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200 || value < 0) {
        throw new RangeError('The age seems invalid');
      }
    }
    // 对于满足条件的age属性以及其他属性,直接保存
    obj[prop] = value;
  }
};
let person = new Proxy({}, validator);
person.age = 100;
console.log(person.age);
// person.age = 'young';
// person.age = 300;
// person.age = -2;
// console.log(person.age);

// 利用set方法,还可以数据绑定,即每当对象发生变化时,会自动更新DOM
const handler = {
  get(target, key) {
    invariant(key, 'get');
    return target[key];
  },
  set(target, key, value) {
    invariant(key, 'set');
    target[key] = value;
    return true;
  }
};
function invariant(key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}
const target = {};
const proxy = new Proxy(target, handler);
// console.log(proxy._prop);
proxy._prop = 'c';
// 上面代码中,只要读写的属性名的第一个字符是下划线,一律抛错,从而达到禁止读写内部属性的目的