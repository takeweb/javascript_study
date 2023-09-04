const array = [1, 2, 3, 4, 5];

// 配列要素で１つでも偶数がある場合、true
const result1 = array.some((x) => x % 2 === 0);
console.log(result1);

// 配列要素で数値以外のものがないので、false
const result2 = array.some((x) => isNaN(x));
console.log(result2);
