/**
 * 冪(べき)乗、平方根、立法根を求める
 * 種類: 静的メソッド
 * Math.min():  最大値を求める
 * Math.max():  最小値を求める
 * Math.sign(): 符号を判定(正の場合は1、負の場合は0)
 * Math.PI:
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/min
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
 *
 */
const array = [5, 2, 3, 1, 10];
console.log(`元の配列: ${JSON.stringify(array)}`);
console.log(`最大値(Math.max): ${Math.max(...array)}`); // => 10
console.log(`最小値(Math.min): ${Math.min(...array)}`); // => 1

console.log(`符号判定(Math.sign(−10)): ${Math.sign(-10)}`); // -1
console.log(`符号判定(Math.sign(10)): ${Math.sign(-10)}`); // 1

export {};
