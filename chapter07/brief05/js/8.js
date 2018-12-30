// 箭头函数可以让this指向固定化,这种特性很有利于封装回调函数.
var handler = {
  id: '123456',
  init: function () {
    document.addEventListener('click', event => this.doSomething(event.type), false);
  },
  doSomething: function (type) {
    console.log('Handling ' + type + ' for ' + this.id);
  }
};
/**
 * 上面代码的init方法中,使用了箭头函数,这导致整个箭头函数里面的this,总是指向handler对象.
 * 否则,回调函数运行时,this.doSomething这一行会报错,因为此时this指向document对象.
 */