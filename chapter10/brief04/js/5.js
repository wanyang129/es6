function Rectangle() {

}
const rec = new Rectangle();
console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);

Object.setPrototypeOf(rec, Object.prototype);
console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);
// 如果参数不是对象,会被自动转为对象
console.log(Object.getPrototypeOf(1));
console.log(Object.getPrototypeOf('foo'));
console.log(Object.getPrototypeOf(true));

console.log(Object.getPrototypeOf(1) === Number.prototype);
console.log(Object.getPrototypeOf('foo') === String.prototype);
console.log(Object.getPrototypeOf(true) === Boolean.prototype);

// 如果参数是undefined或null,它们无法转为对象,所以会报错.
// Object.getPrototypeOf(null);
Object.getPrototypeOf(undefined);