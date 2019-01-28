// Reflect.defineProperty(target,propertyKey,attributes)
// Reflect.defineProperty方法基本等同于Object.defineProperty,用来为对象定义属性.未来,后者会被逐渐废除.
function myDate() {

}
Object.defineProperty(myDate, 'now', {
  value: () => Date.now()
});
Reflect.defineProperty(myDate, 'now', {
  value: () => Date.now()
})
// 如果Reflect.defineProperty的第一个参不是对象,就会抛出错误,比如Reflect.defineProperty(1,'foo')
// 这个方法可以与Proxy.defineProperty配合使用.
const p = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(descriptor);
    return Reflect.defineProperty(target, prop, descriptor);
  }
});
p.foo = 'bar';
console.log(p.foo);
// 上面代码中,Proxy.defineProperty对属性赋值设置了拦截,然后使用Reflect.defineProperty完成了赋值.