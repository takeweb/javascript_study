// 変数と関数を囲わなくても動く
let counter1 = 0;
function count() {
  return counter1++;
}

console.log(`counter1: ${count()}`);
console.log(`counter1: ${count()}`);
console.log(`counter1: ${count()}`);

let counter2 = 1;
function count2() {
  return counter2++;
}

console.log(`counter2: ${count2()}`);
console.log(`counter2: ${count2()}`);
console.log(`counter2: ${count2()}`);

console.log(`counter1: ${count()}`);
