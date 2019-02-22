class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
  // 默认的Symbol.species属性
  // static get [Symbol.species](){
  //   return this;
  // }
}
/**
 * 上面代码中,由于定义了Symbol.species属性,创建衍生对象时就会使用这个属性返回的函数,
 * 最为构造函数.这个例子也说明,定义Symbol.species属性要采用get取值器.
 */
const a = new MyArray(1, 2, 3);
const b = a.map(x => x);
const c = a.filter(x => x > 1);
console.log(b);
console.log(c);
console.log(b instanceof MyArray);
console.log(b instanceof Array);
console.log(c instanceof MyArray);
console.log(c instanceof Array);

class T1 extends Promise { }
class T2 extends Promise {
  static get [Symbol.species]() {
    return Promise;
  }
}
console.log(new T1(r => r()).then(v => v) instanceof T1);
console.log(new T2(r => r()).then(v => v) instanceof T2);

/**
 * 总之,Symbol.species的作用在于,实例对象在运行过程中,需要再次调用自身的构造函数时,会调用该属性指定的构造函数.
 * 它的主要用途是,有些类库是在基类的基础上修改的,那么子类使用继承的方法时,作者可能希望返回基类的实例,而不是子类的实例.
 */