// es6引入rest参数(形式为...变量名),用于获取函数的多余参数,这样就不需要使用arguments对象了.
// rest参数搭配的变量是一个数组,该变量将多余的参数放入数组中
function add(...values) {
  let sum = 0;
  for (var val of values) {
    sum += val;
  }
  return sum;
}
console.log(add(2, 5, 3));
// rest参数代替arguments变量
// arguments变量的写法
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort();
}
// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();