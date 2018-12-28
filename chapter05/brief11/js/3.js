const RE_OPT_A = /^(?<as>a+)?$/;
const matchObj = RE_OPT_A.exec('');
console.log(matchObj);
console.log(matchObj.groups.as);
console.log('as' in matchObj.groups);
// 具名组as没有找到匹配,那么matchObj.groups.as属性值就是undefined,并且as这个键名在groups是始终存在的