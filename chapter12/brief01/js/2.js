// const set = new Set(document.querySelectorAll('div'));
// console.log(set.size);

const set = new Set();
document.querySelectorAll('div').forEach(div => set.add(div));
console.log(set.size);

// 去除数组重复成员的方法
// [...new Set(array)]

// 去除字符串里面的重复字符
console.log([...new Set('abcabbc')].join(''))