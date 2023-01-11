let obj1 = { name: "aaa", price: 200 };
let obj2 = { name: "bbb", price: 300 };
let obj3 = { name: "ccc", price: 400 };

let array = [obj1, obj2, obj3];
const result = array.reduce((total, obj) => total += obj.price, 0);
console.log(result);
