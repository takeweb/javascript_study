/**
 * 文字列前後の空白を除去
 * 種類: インスタンスメソッド
 * 分類: 非破壊
 * String.prototype.trim: 文字列前後の空白を除去
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
 */
const result1 = String.fromCharCode(65);
const result2 = String.fromCharCode(66);
const result3 = String.fromCharCode(67);

console.log(`文字コード「0065」の文字列: ${result1}`); // A
console.log(`文字コード「0066」の文字列: ${result2}`); // B
console.log(`文字コード「0067」の文字列: ${result3}`); // C

export {};
