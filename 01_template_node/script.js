// https:github.com/MikeMcl/decimal.js/
// npm install decimal.js
import Decimal from 'decimal.js';

let d1 = new Decimal('0.14');
let d2 = new Decimal('0.28');
let result = d1.add(d2);

console.log(result);
