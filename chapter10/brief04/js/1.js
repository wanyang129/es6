// javascript语言的对象继承是同原型链实现的.
// __proto__属性,用来读取或设置当前对象的prototype对象.目前,所有浏览器(包括ie11)都部署了这个属性.
// es5的写法
const obj = {
  method: function () {

  }
};
obj.__proto__ = someOtherObj;
// es6的写法
var obj = Object.create(someOtherObj);
obj.method = function () {

}
// Object.setPrototypeOf()写操作
// Object.getPrototypeOf()读操作
// Object.create()生成操作

// 实现上,__proto__调用的是Object.prototype.__proto__
Object.defineProperty(Object.prototype, '__proto__', {
  get() {
    let _thisObj = Object(this);
    return Object.getPrototypeOf(_thisObj);
  },
  set(proto) {
    if (this === undefined || this === null) {
      throw new TypeError();
    }
    if (!isObject(this)) {
      return undefined;
    }
    if (!isObject(proto)) {
      return undefined;
    }
    let status = Reflect.setPrototypeOf(this, proto);
    if (!status) {
      throw new TypeError();
    }
  }
});
function isObject(value) {
  return Object(value) === value;
}