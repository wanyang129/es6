// Reflect.ownKeys方法可以返回所有类型的键名,包括常规键名和Symbol键名
let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};
console.log(Reflect.ownKeys(obj));

let size = Symbol('size');
class Collection {
  constructor() {
    this[size] = 0;
  }
  add(item) {
    this[this[size]] = item;
    this[size]++;
  }
  static sizeOf(instance) {
    return instance[size];
  }
}
let x = new Collection();
console.log(Collection.sizeOf(x));

x.add('foo');
console.log(Collection.sizeOf(x));

console.log(Object.keys(x));
console.log(Object.getOwnPropertyNames(x));
console.log(Object.getOwnPropertySymbols(x));