function authorize(user, action) {
  if (!user.hasPrivilege(action)) {
    throw new Error(`User ${user.name} is not authorized to do ${action}.`);
  }
}
// 大括号内部可以放入任意的javascript表达式,可以进行运算,以及引用对象属性.
// let x = 1;
// let y = 2;
// 采用数组的解构赋值写法
let [x, y] = [1, 2];
console.log(`${x}+${y}=${x + y}`);
console.log(`${x}+${y * 2}=${x + y * 2}`);
let obj = { x: 1, y: 2 };
console.log(`${obj.x + obj.y}`);
// 模板字符串还能调用函数
function fn() {
  return "Hello World";
}
console.log(`foo ${fn()} bar`);
// 如果大括号中的值不是字符串,将按照一般的规则转换为字符串.比如,大括号中是一个对象,将默认调用对象的toString方法
// 如果模板字符串中的变量没有声明,将报错
// let msg = `Helo ${place}`;
console.log(`Hello ${'world'}`);
const tmpl = address => `
  <table>
    ${address.map(addr => `
      <tr><td>${addr.first}</td></tr>
      <tr><td>${addr.last}</td><tr>
    `).join('')}
  </table>
`;
const data = [
  { first: '<Jane>', last: 'Bond' },
  { first: 'Lars', last: '<croft>' }
];
console.log(tmpl(data));

let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
func('Jack');

let str2 = '(name)=>`Hello ${name}!`';
let func2 = eval.call(null, str2);
func2('Jack');