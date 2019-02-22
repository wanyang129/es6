/**
 * 对象的Symbol.toStringTag属性,指向一个方法.
 * 在该对象上面调用Object.prototype.toString方法时,如果这个属性存在,它的返回值会出现在toString方法返回的字符串之中,表示对象的类型.
 * 也就是说,这个属性可以用来定制[object Object]或[object Array]中object后面的那个字符串.
 */
console.log({ [Symbol.toStringTag]: 'Foo' }.toString());

class Collection {
  get [Symbol.toStringTag]() {
    return 'xxx';
  }
}
let x = new Collection();
console.log(Object.prototype.toString.call(x));