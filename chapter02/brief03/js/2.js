/**
 * const实际上保证的,并不是变量的值不得改动,而是变量指向的那个内存地址所保存的数据不得改动.
 * 对于简单类型的数据(数值、字符串、布尔值),值就保存在变量指向的那个内存地址,因此等同于常量.
 * 但对于复合类型的数据(主要是对象和数组),变量指向的内存地址,保存的只是一个指向实际数据的指针,
 * const只能保证这个指针是固定的(即总是指向另一个固定的地址),至于它指向的数据结构是不是可变的,就完全不能控制了.
 * 因此,将一个对象声明为常量必须非常小心.
 */
const foo = {};
foo.prop = 123;
console.log(foo.prop);
// 常量foo存储的是一个地址,这个地址指向一个对象.不可变的只是这个地址,即不能把foo指向另一个地址,但对象本身是可变的,所以依然可以为其添加新属性.
const a = [];
a.push("Hello");
console.log(a);
a.length = 0;
console.log(a);
// 冻结对象Object.freeze
const foo1 = Object.freeze({});
foo1.prop = 123;
// 将对象彻底冻结的函数
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === "object") {
      constantize(obj[key]);
    }
  });
};
// es6声明变量的6中方法:var、function、let、const、import、class