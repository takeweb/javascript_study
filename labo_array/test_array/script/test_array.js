// 配列の分割代入
const data = [56, 40, 26, 82, 19, 17, 73, 99];

let [x0, x1, x2, x3, x4, x5, x6, x7] = data;
console.log(x4); // 19

let [y0, y1, y2, y3] = data;
console.log(y1); // 40

let [z0, z1, z2, z3, z4, z5, z6, z7, z8] = data;
console.log(z8);  // undefined

let [, , , , , , , a7, a8] = data;
// console.log(a6); // NG
console.log(a7); // 99
console.log(a8); // undefined

let [b0, b1, b2, ...other] = data;
console.log(b1);    // 40
console.log(other); // [ 82, 19, 17, 73, 99 ]
