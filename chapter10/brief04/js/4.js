let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);
proto.y = 20;
proto.z = 40;
console.log(obj.x);
console.log(obj.y);
console.log(obj.z);
// 如果第一个参数不是对象,会自动转为对象.但是由于返回的还是第一个参数,所以这个操作不好产生任何效果.
console.log(Object.setPrototypeOf(1, {}) === 1);
console.log(Object.setPrototypeOf('foo', {}) === 'foo');
console.log(Object.setPrototypeOf(true, {}) === true);

// 由于undefined和null无法转为对象,所以如果第一个参数是undefined或null,就会报错.
// Object.setPrototypeOf(undefined, {});
Object.setPrototypeOf(null, {});