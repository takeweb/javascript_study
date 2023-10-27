/**
 * 冪(べき)乗、平方根、立法根を求める
 * 種類: 静的メソッド
 * Math.pow():  冪乗を求める
 * Math.sqrt(): 平方根を求める
 * Math.cbrt(): 立法根を求める
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt
 */
console.log(`2の3乗(Math.pow()): ${Math.pow(2, 3)}`); // 8
console.log(`2の3乗(2 ** 3): ${2 ** 3}`); // 8
console.log(`36の平方根(Math.sqrt()): ${Math.sqrt(36)}`); // 6
console.log(`36の平方根(2 ** 0.5): ${Math.sqrt(36)}`); // 6
console.log(`64の立法根: ${Math.cbrt(64)}`); // 4

export {};
