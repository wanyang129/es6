/**
 * 让Generator函数返回一个正常的对象实例，既可以用next方法，又可以获得正常的this。
 * 首先，生成要给空对象，使用call方法绑定Generator函数内部的this。
 * 这样，构造函数调用以后，这个空对象就是Generator函数的实例对象了。
 */
function* F() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}
var obj = {};
var f = F.call(obj);
console.log(f.next());
console.log(f.next());
console.log(f.next());

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
/**
 * 上面代码中，首先是F内部的this对象绑定obj对象，然后调用它，返回一个Iterator对象。
 * 这个对象执行三次next方法（因为F内部有两个yield表达式),完成F内部所有代码的运行。
 * 这时，所偶内部属性都绑定在obj对象上了，因此obj对象也就成了F的实例。
 */
console.log(obj instanceof F);