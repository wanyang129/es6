// Object.assign方法有很多用处
// 为对象添加属性
class Point {
  constructor(x, y) {
    Object.assign(this, { x, y });
  }
}
// 为对象添加方法
Object.assign(someClass.prototype, {
  someMethod(arg1, arg2) {

  },
  anotherMethod() {

  }
})
// 等同于下面的写法
someClass.prototype.someMethod = function (arg1, arg2) {

};
someClass.prototype.anotherMethod = function () {

};
// 克隆对象
function clone(origin) {
  return Object.assign({}, origin);
}
// 上面代码将原始对象拷贝到一个空对象,就得到了原始对象的克隆.
// 采用这种方法克隆,只能克隆原始对象自身的值,不能克隆它继承的值.如果想要保持继承连,可以采用下面的代码
function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}
// 合并多个对象
const merge = (target, ...sources) => Object.assign(target, ...sources);
// 如果希望合并后返回一个新对象,可以改写上面函数,对一个空对象合并.
const merge = (...sources) => Object.assign({}, ...sources);
// 为属性指定默认值
const DEFAULTS = {
  logLevel: 0,
  outputFormat: 'html'
};
function processContent(options) {
  options = Object.assign({}, DEFAULTS, options);
  console.log(options);
}
/**
 * 由于浅拷贝的问题,DEFAULTS对象和options对象的所有属性值,最好都是简单类型,不要指向另一个对象.
 * 否则,DEFAULTS对象的该属性很可能不起作用.
 */
const DEFAULTS = {
  url: {
    host: 'example.com',
    port: 7070
  }
};
console.log(processContent({
  url: {
    port: 8000
  }
}));