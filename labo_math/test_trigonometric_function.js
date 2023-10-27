/**
 * 三角関数関連
 * 種類: インスタンスメソッド
 * Math.cos(): コサイン
 * Math.sin(): サイン
 * Math.tan(): タンジェント
 * Math.acos(): アークコサイン
 * Math.asin(): アークサイン
 * Math.atan(): アークタンジェント
 * Math.atan2(): ２変数のアークタンジェント
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/cos
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/sin
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/tan
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/acos
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/asin
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/atan
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2
 */
console.log(`コサイン: ${Math.cos(1)}`); // => 0.5403023058681398
console.log(`サイン: ${Math.sin(1)}`); // => 0.8414709848078965
console.log(`タンジェント: ${Math.tan(1)}`); // => 1.5574077246549023
console.log(`アークコサイン: ${Math.acos(1)}`); // => 0
console.log(`アークサイン: ${Math.asin(1)}`); // => 1.5707963267948966
console.log(`アークタンジェント: ${Math.atan(1)}`); // => 0.7853981633974483
console.log(`２変数のアークタンジェント: ${Math.atan2(1, 2)}`); // => 0.4636476090008061

export {};
