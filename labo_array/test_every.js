const array = [1, 2, 3, 4, 5];

// 配列要素全てが10より小さい場合は、true
const result1 = array.every((x) => x < 10);
console.log(result1);

// 配列要素全てが偶数ではないので、false
const result2 = array.every((x) => x % 2 === 0);
console.log(result2);
