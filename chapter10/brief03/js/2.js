const source = {
  set foo(value) {
    console.log(value);
  }
};
const target2 = {};
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
console.log(Object.getOwnPropertyDescriptor(target2, 'foo'));

const shallowMerge = (target2, source) => Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
