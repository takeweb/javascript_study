
const add1 = (x, y) => x + y
result1 = add1(2,3);
console.log(result1);

const add2 = x => y => x + y
result2 = add2(2)(3);
console.log(result2);

const add3 = x => y => x + y
const add4 = add3(1)
console.log(add4(2));
console.log(add4(3));
console.log(add4(100));

const add5 = add3(4)(2);
console.log(add5);