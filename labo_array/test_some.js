/**
 * Array.prototype.someメソッド
 * 全ての要素で１つでも条件を満たす場合にtrueをそれ以外はfalseを返す
 * 対応するメソッド: Array.prototype.everyメソッド
 */
const array = [1, 2, 3, 4, 5];
console.log(`元の配列: ${JSON.stringify(array)}`);

// 配列要素で１つでも偶数がある場合、true
const result1 = array.some((x) => x % 2 === 0);
console.log(`全ての要素の中で１つでも偶数があれば、${result1}`);

// 配列要素で数値以外のものがないので、false
const result2 = array.some((x) => isNaN(x));
console.log(`全ての要素の中で１つも数値以外がないので、${result2}`);

export default {};
