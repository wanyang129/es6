/**
 * Generator函数返回的遍历器对象,
 * 都有一个throw方法,可以在函数体外抛出错误,
 * 然后在Generator函数体内捕获.
 */
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};
var i = g();
i.next();
try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
/**
 * 上面代码中,遍历器对象i连续抛出两个错误.
 * 第一个错误被Generator函数体内的catch语句捕获.
 * i第二次抛出错误,由于Generator函数内部的catch语句已经执行过了,
 * 不会再捕捉到这个错误了,所以这个错误就被抛出了Generator函数体,
 * 被函数体外的catch语句捕获.
 * 
 * throw方法可以接受一个参数,
 * 该参数会被catch语句接收,
 * 建议抛出Error对象的实例.
 */