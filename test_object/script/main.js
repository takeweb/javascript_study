const obj = {
  "key": "value"
};

console.log(obj.toString() === Object.prototype.toString());
// console.log(obj.toString() === obj.prototype.toString()); // NG

console.log(obj.toString());
console.log(JSON.stringify(obj));

