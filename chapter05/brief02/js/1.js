/**
 * 字符串对象共有4个方法,可以使用正则表达式:match() replace() search() split()
 * es6将这4个方法,在语言内部全部调用RegExp的实例方法,从而做到所有与正则相关的方法,全部都定义在RegExp对象行
 * 
 * String.prototype.match调用RegExp.prototype[Symbol.match]
 * String.prototype.replace调用RegExp.prototype[Symbol.replace]
 * String.prototype.search调用RegExp.protottype[Symbol.search]
 * String.prototype.split调用RegExp.prototype[Symbol.split]
 */