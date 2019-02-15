// 字符串是一个类似数组的对象，也原生具有Iterator接口
var someString = 'hi';
console.log(typeof someString);
console.log(typeof someString[Symbol.iterator]);
var iterator = someString[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// 上面代码中，调用Symbol.iterator方法返回一个遍历器对象，在这个遍历器上可以调用next方法，实现对于字符串的遍历。
// 可以覆盖原生的Symbol.iterator方法，达到修改遍历器行为的目的。
var str = new String('hi');
console.log([...str]);
str[Symbol.iterator] = function () {
  return {
    next: function () {
      if (this._first) {
        this._first = false;
        return { value: 'bye', done: false }
      } else {
        return { done: true }
      }
    },
    _first: true
  }
}
console.log([...str]);
console.log(str);