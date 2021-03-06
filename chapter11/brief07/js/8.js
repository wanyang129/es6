/**
 * 对象的Symbol.split属性,指向一个方法,当该对象被String.prototype.split方法调用时,会返回该方法的返回值.
 * String.prototype.split(separator,limit)
 * 等同于
 * separator[Symbol.split](this,limit)
 */
class MySplitter {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    let index = string.indexOf(this.value);
    if (index === -1) {
      return string;
    }
    return [
      string.substr(0, index),
      string.substr(index + this.value.length)
    ];
  }
}
console.log('foobar'.split(new MySplitter('foo')));
console.log('foobar'.split(new MySplitter('bar')));
console.log('foobar'.split(new MySplitter('baz')));