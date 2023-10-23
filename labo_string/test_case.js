/**
 * 大文字/小文字に変換する
 * 種類: インスタンスメソッド
 * 分類: 非破壊
 * String.prototype.toLowerCase: 全て小文字に変換
 * String.prototype.toUpperCase: 全て大文字に変換
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 */
const str = "WingsProject";

console.log(`元の文字列: ${str}`); // WingsProject
console.log(`toLowerCase: ${str.toLowerCase()}`); // wingsproject
console.log(`toUpperCase: ${str.toUpperCase()}`); // WINGSPROJECT
console.log(`元の文字列: ${str}`); // WingsProject

export {};
