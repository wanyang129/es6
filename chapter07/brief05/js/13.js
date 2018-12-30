// 由于箭头函数使得this从"动态"变成"静态",下面两个场合不应该使用箭头函数.
// 第一个场合是定义函数的方法,且该方法内部包括this
const cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}
// 第二个是需要动态this的时候,也不应使用箭头函数
var button = document.getElementById("press");
// button.addEventListener("click", () => {
//   this.classList.toggle("on");
// });
/**
 * 上面代码运行时,点击按钮会报错,因为button的监听函数是一个箭头函数,
 * 导致里面的this就是全局对象.如果改成普通函数,this就会动态指向被点击的按钮对象.
 */
button.addEventListener("click", function () {
  this.classList.toggle("on");
})