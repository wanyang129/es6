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

// 使用扩展运算符拷贝数组
// const itemsCopy = [...items];

// 使用Array.from方法,将类似数组的对象转为数组.
// const foo = document.querySelectorAll('.foo');
// const nodes = Array.from(foo);

// 立即执行函数可以写成箭头函数的形式
// (() => {
//   console.log('Welcome to the Internet');
// })();

// 那些需要使用函数表达式的场合,尽量使用箭头函数代替,因为这样更简洁,而且绑定了this
// [1, 2, 3].map(x => x * x);

// 箭头函数取代Function.prototype.bind,不应再用self/_this/that绑定this
// const boundMethod = (...params) => method.apply(this, parms);

// 所有配置项都应该集中在一个对象,放在最后一个参数,布尔值不可以直接作为参数
// function divide(a, b, { option = false } = {}) { }

/**
 * 不要在函数体内使用arguments变量,使用rest运算符代替.
 * 因为rest运算符显示表明你想要获取参数,而且arguments是一个类似数组的对象,
 * 而rest运算符可以体用一个真正的数组.
 */
// function concatenateAll(...args) {
//   return args.join('');
// }
// 使用默认值语法设置函数参数的默认值
// function handleThings(opts = {}) { }

// let map = new Map(arr);

// for (let key of map.keys()) {
//   console.log(key);
// }

// for (let value of map.values()) {
//   console.log(value);
// }
// for (let item of map.entries()) {
//   console.log(item[0], item[1]);
// }

// 总是用Class,取代需要prototype的操作.因为Class的写法更简洁,更易于理解.
// class Queue {
//   constructor(contents = []) {
//     this._queue = [...contents];
//   }
//   pop() {
//     const value = this._queue[0];
//     this._queue.splice(0, 1);
//     return value;
//   }
// }

// 使用extends实现继承,因为这样更简单,不会有破坏instanceof运算的危险.
// class PeekableQueue extends Queue {
//   peek() {
//     return this._queue[0];
//   }
// }

// 使用import取代require
// import { func1, func2 } from 'moduleA';

// 使用export取代module.exports

// // commonJS写法
// var React = require('react');
// var Breadcrumbs = React.createClass({
//   render() {
//     return <nav />;
//   }
// });
// module.exports = Breadcrumbs;

// // es6写法
// import React from 'react';
// class Breadcrumbs extends React.Components {
//   render() {
//     return <nav />;
//   }
// };
// export default Breadcrumbs;

// 不要在模考输入中使用通配符.因为这样可以确保你的模块之中,有一个默认输出.
// import myObject from './importModule';

// 如果模块默认输出一个函数,函数名的首字母应该小写.
// function makeStyleGuide() {

// }
// export default makeStyleGuide;

// 如果模块默认输出一个对象,对象名的首字母应该大写
const StyleGuide = {
  es6: {

  }
};
export default StyleGuide;