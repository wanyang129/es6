let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2);
console.log("arr1", arr1);

console.log(new (Date.bind.apply(Date, [null, 2015, 1, 1])));
console.log(new Date(...[2015, 1, 1]));