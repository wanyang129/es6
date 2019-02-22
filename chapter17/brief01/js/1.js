/**
 * Generator函数有多种理解角度。
 * 语法上，首先可以把它理解成，Generator函数是一个状态机，封装了多个内部状态。
 * 
 * 执行Generator函数会返回一个遍历器对象，
 * 也就是说，Generator函数除了状态机，还是一个遍历器生成函数。
 * 返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。
 */
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloWorldGenerator();
/**
 * 上面代码定义了一个Generator函数helloWorldGenerator，
 * 它内部有两个yield表达式（hello和world），即该函数有三个状态：hello，world和return语句（结束执行）。
 * 
 * Generator函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。
 * 不同的是，调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是遍历器对象。
 * 
 * 必须调用遍历器对象的next方法，使得指针移向下一个状态。
 * 也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，
 * 直到遇到下一个yield表达式（或return语句）为止。
 * 换言之，Generator函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
 */
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
/**
 * 调用Generator函数，返回一个遍历器对象，代表Generator函数的内部指针。
 * 以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。
 * value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；
 * done属性是一个布尔值，表示是否遍历结束。
 */