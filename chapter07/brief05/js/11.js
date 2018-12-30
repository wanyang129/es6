// 除了this,一下三个变量再箭头函数之中也是不存在的,指向外层函数的对应变量:arguments、super、new.target
function foo() {
  setTimeout(() => {
    console.log('args:', arguments);
  }, 100);
}
foo(2, 4, 6, 8);
// 上面代码中,箭头函数内部的变量arguments,其实是函数foo的arguments变量