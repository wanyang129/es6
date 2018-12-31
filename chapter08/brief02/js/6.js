let spans = document.querySelectorAll("span.name");
let names1 = Array.prototype.map.call(spans, s => s.textContent);
let names2 = Array.from(spans, s => s.textContent);
console.log("names1", names1);
console.log("names2", names2);

console.log(Array.from([1, , 2, , 3], (n) => n || 0));

function tyesOf() {
  return Array.from(arguments, value => typeof value);
}
console.log(tyesOf(null, [], NaN));
// 如果map函数里用到了this关键字,还可以传入Array.from的第三个参数,用来绑定this.
console.log(Array.from({ length: 2 }, () => 'jack'));

function countSymbols(string) {
  return Array.from(string).length;
}