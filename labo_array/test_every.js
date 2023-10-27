/**
 * Array.prototype.everyメソッド
 * 全ての要素が条件を満たす場合にtrueをそれ以外はfalseを返す
 * 対応するメソッド: Array.prototype.someメソッド
 */
const array = [1, 2, 3, 4, 5];
console.log(`元の配列: ${JSON.stringify(array)}`);

// 配列要素全てが10より小さい場合は、true
const result1 = array.every((x) => x < 10);
console.log(`全ての要素が10より小さいので、${result1}`);

// 配列要素全てが偶数ではないので、false
const result2 = array.every((x) => x % 2 === 0);
console.log(`全ての要素が偶数なので、${result2}`);

export default {};
