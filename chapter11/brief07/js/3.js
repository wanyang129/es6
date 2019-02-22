// 对象的Symbol.species属性,指向一个构造函数.创建衍生对象时,会使用该属性.
class MyArray extends Array {

}
const a = new MyArray(1, 2, 3);
const b = a.map(x => x);
const c = a.filter(x => x > 1);

console.log(b);
console.log(c);

console.log(b instanceof MyArray);
console.log(c instanceof MyArray);
/**
 * 上面代码中,子类MyArray继承了父类Array,a是MyArray的实例,b和c是a的衍生对象.
 * b和c都是MyArray的实例.
 */