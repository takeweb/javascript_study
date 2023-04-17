// https:github.com/MikeMcl/decimal.js/
// npm install decimal.js
import Decimal from 'decimal.js';

let d1 = new Decimal('0.14');
let d2 = new Decimal('0.28');

// add:加算、sub:減算数、mul:乗算、div:除算、
// eq:等しい、gt:より大きい、gte:以上、lt:未満、lte:以下
let result = d1.add(d2);

console.log(result);
