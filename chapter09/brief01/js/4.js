// 属性的赋值器setter和取值器getter,事实上也是采用这种写法
const cart = {
  _wheels: 4,
  get wheels() {
    return this._wheels;
  },
  set wheels(value) {
    if (value < this._wheels) {
      throw new Error('数值太小了!');
    }
    this._wheels = value;
  }
}
// 简洁写法的属性名总是字符串,这会导致一些看上去比较奇怪的结果
const obj = {
  class() { }
};
// 等同于
var obj = {
  'class': function () { }
}
// 如果某个方法的值是一个Generator函数,前面需要加上星号
const obj = {
  *matchMedia() {
    yield 'hello world';
  }
};