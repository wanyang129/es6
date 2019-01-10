/**
 * WeakSet结构有以下三个方法.
 *  WeakSet.prototype.add(value):向WeakSet实例添加一个新成员
 *  WeakSet.prototype.delete(value):清除WeakSet实例的指定成员
 *  WeakSet.prototype.has(value):返回一个布尔值,表示某个值是否在WeakSet实例之中
 */
const ws = new WeakSet();
const obj = {};
const foo = {};
ws.add(window);
ws.add(obj);
console.log(ws.has(window));
console.log(ws.has(foo));
ws.delete(window);
console.log(ws.has(window));
// WeakSet没有size属性,没有办法遍历它的成员
console.log(ws.size);

const foos = new WeakSet();
class Foo {
  constructor() {
    foos.add(this);
  }
  method() {
    if (!foos.has(this)) {
      throw new TypeError("Foo.prototype.mehod 只能在Foo的实例上调用!");
    }
  }
}