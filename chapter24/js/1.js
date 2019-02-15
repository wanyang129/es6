// var a=1,b=2,c=3;
// const a = 1;
// const b = 2;
// const c = 3;
// javascript编译器会对const进行优化
// const [a, b, c] = [1, 2, 3];

// 静态字符串一律使用单引号或反引号,不使用双引号.动态字符串使用反引号
// const c = `foobar`;

// const a = 'foobar';
// const b = `foo${a}bar`;

// 使用数组成员对变量赋值时,优先使用解构赋值
// const arr = [1, 2, 3, 4];
// const [first, second] = arr;

// 函数参数如果是对象的成员,优先使用解构赋值
// function getFullName(obj){
//   const { firstName, lastName } = obj;
// }

// function getFullName({ firstName, lastName }){

// }

// 如果函数返回多个值,优先使用对象的解构赋值,而不是数组的解构赋值.这样便于以后添加返回值,以及更改返回值的顺序.
// function processInput(input){
//   return { left, right, top, bottom };
// }
// const { left, right } = processInput(input);

// 单行定义的对象,最后一个成员不以逗号结尾.多行定义的对象,最后一个成员以逗号结尾.
// const a = { k1: v1, k2: v2 };
// const b = {
//   k1: v1,
//   k2: v2,
// };

// 对象尽量静态化,一旦定义,就不得随意添加新的属性.如果添加属性不可避免,要使用Object.assign方法.
// const a = {};
// Object.assign(a, { x: 3 });

// const a = { x: null };
// a.x = 3;

// 如果对象的属性名是动态的,可以在创造对象的时候,使用属性表达式定义.
// const obj = {
//   id: 5,
//   name: 'San Francisco',
//   [getKey('enabled')]: true,
// };

// 对象的属性和方法,尽量采用简介表达法,这样易于描述和书写.
// var ref = 'some value';
// const atom = {
//   ref,
//   value: 1,
//   addValue(value) {
//     return atom.value + value;
//   },
// };