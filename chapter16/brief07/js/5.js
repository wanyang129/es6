/**
 * 有些数据结构是在现有数据结构的基础上,计算生成的.
 * 比如es6的数组 Set Map都部署了以下三个方法,调用后都返回遍历器对象.
 *  entries()返回一个遍历器对象,用来遍历[键名,键值]组成的数组.
 *    对于数组,键名就是索引值;对于Set,键名与键值相同.Map结构的Iterator接口,默认就是调用entries方法.
 *  keys()返回一个遍历器对象,用来遍历所有的键名.
 *  values()返回一个遍历器对象,用来遍历所有的键值.
 * 
 *  这三个方法调用后生成的遍历器对象,所遍历的都是计算生成的数据结构.
 */
let arr = ['a', 'b', 'c'];
for (let pair of arr.entries()) {
  console.log(pair);
}
// 类似数组的对象包括好几类.下面是for...of循环用于字符串 DOM NodeList对象 arguments对象的例子.
let str = "hello";
for (let s of str) {
  console.log(s);
}
let paras = document.querySelectorAll("p");
for (let p of paras) {
  p.classList.add("test");
}

function printArgs() {
  for (let x of arguments) {
    console.log(x);
  }
}
printArgs('a', 'b');
// 对于字符串来说,for...of循环还有一个特点,就是会正确识别32位UTF-16字符
for (let x of 'a\uD83D\uDC0A') {
  console.log(x);
}
// 并不是所有类似数组的对象都具有Iterator接口,一个简便的解决方法,就是使用Array.from方法将其转为数组.
let arrayLike = { length: 2, 0: 'a', 1: 'b' };
// for (let x of arrayLike) {
//   console.log(x);
// }

for (let x of Array.from(arrayLike)) {
  console.log(x);
}

/**
 * 对于普通的对象,for...of结构不能直接使用,会报错,必须部署了Iterator接口后才能使用.
 * 但是,这样情况侠士,for...in循环依然可以用来遍历键名.
 */
let es6 = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
};
for (let e in es6) {
  console.log(e);
}
// 报错
// for (let e of es6) {
//   console.log(e);
// }

// forEach方法的问题在于,无法中途跳出forEach循环,break命令或return命令都不能凑效.