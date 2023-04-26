// https:github.com/MikeMcl/decimal.js/

let d1 = new Decimal('0.14');
let d2 = new Decimal('0.28');
let result = d1.add(d2);

// document.querySelector("#result").textContent = result.toNumber();
document.querySelector("#result").textContent = result;
