// 如果将一个匿名函数赋值给一个变量,es5的name属性,会返回空字符串,而es6的name属性会返回实际的函数名
var f = function () { };
console.log(f.name);
// 如果将一个具名函数赋值给一个变量,则es5和es6的name属性都返回这个具名函数原本的名字
const bar = function baz() { };
console.log(bar.name);
// Function构造函数返回的函数实例,name属性的值为anonymous
console.log((new Function).name);
// bind返回的函数,name属性值会加上bound前缀
function foo() { };
console.log(foo.bind({}).name);
console.log((function () { }).bind({}).name);