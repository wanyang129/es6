// Object.assign只能进行值的复制,如果要复制的值是一个取值函数,那么将求值后再复制.
const source = {
  get foo() {
    return 1;
  }
};
const target = {};
Object.assign(target, source);
console.log(target);