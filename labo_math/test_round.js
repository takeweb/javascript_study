/**
 * 小数点以下の数値を丸める
 * 種類: 静的メソッド
 * Math.round(): 四捨五入
 * Math.ceil():  常に右方向に切り上げ
 * Math.floor(): 常に左方向に切り捨て
 * Math.trunc(): ０方向へ切り捨て
 * Math.abs():   絶対値
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 *
 */
console.log(`4.56: ${Math.ceil(4.56)}`); // 5
console.log(`4.56: ${Math.ceil(-4.56)}`); // -4
console.log(`4.56: ${Math.floor(4.56)}`); // 5
console.log(`4.56: ${Math.floor(-4.56)}`); // -4
console.log(`4.56: ${Math.round(4.56)}`); // 5
console.log(`4.56: ${Math.round(-4.56)}`); // -4
console.log(`4.56: ${Math.trunc(4.56)}`); // 5
console.log(`4.56: ${Math.trunc(-4.56)}`); // -4
console.log(`4.56: ${Math.abs(-4.56)}`); // 4.56

export {};
