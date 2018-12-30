/**
 * 箭头函数有几个使用注意点
 * 1.函数体内的this对象,就是定义时所在的对象,而不是使用时所在的对象
 * 2.不可以当做构造函数,也就是说,不可以使用new命令,否则会抛出一个错误
 * 3.不可以使用arguments对象,该对象在函数体内不存在.如果要用,可以用rest参数代替
 * 4.不可以使用yield命令.因此箭头函数不能用作Generator函数
 */
// this对象的指向是可变的,但是在箭头函数中,它是固定的
function foo() {
  setTimeout(() => {
    console.log("foo id", this.id);
  }, 1000);
}
var id = 21;
foo.call({ id: 42 });
function bar() {
  setTimeout(function () {
    console.log("bar id", this.id);
  }, 1000);
}
bar.call({ id: 42 });
/**
 * 上面代码中,setTimeout的参数是一个箭头函数,这个箭头函数的定义生效是在foo函数生成时,
 * 而它的真正执行要等到1000毫秒后.如果是普通函数,执行时this应该指向全局对象window,这时应该输出21.
 * 但是,箭头函数导致this总是指向函数定义生效时所在的对象(本例是{id:42}),所以输出的是42
 */
// 箭头函数可以让setTimeout里面的this,绑定定义时所在的作用域,而不是指向运行时所在的作用域
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}
var timer = new Timer();
setTimeout(() => console.log("s1:", timer.s1), 3100);
setTimeout(() => console.log("s2:", timer.s2), 3100);