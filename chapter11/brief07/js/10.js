/**
 * 对象的Symbol.toPrimitive属性,指向一个方法.
 * 该对象被转为原始类型的值时,会调用这个方法,返回该对象对应的原始类性值
 * 
 * Symbol.toPrimitive被调用时,会接受一个字符串参数,表示当前运算的模式,一共有三种模式.
 *  Number:该场合需要转成数值
 *  String:该场合需要转成字符串
 *  Default:该场合可以转成数值,也可以转成字符串
 */
let obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
      default:
        throw new Error();
    }
  }
}
console.log(2 * obj);
console.log(3 + obj);
console.log(obj == 'default');
console.log(String(obj));