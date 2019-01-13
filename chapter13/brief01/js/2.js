// es6原生提供Proxy构造函数,用来生成Proxy实例
var proxy = new Proxy(target, handler);
/**
 * Proxy对象的所有用法,都是上面这种形式,不同的只是handler参数的写法.
 * 其中,new Proxy()表示生成一个Proxy实例.target参数表示所要拦截的目标对象,
 * handler参数也是一个对象,用来定制拦截行为.
 */