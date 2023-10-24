/**
 * String.prototype.charCodeAt(数字編)
 * 説明: 指定された位置にある UTF-16 コード単位を表す 0 から 65535 までの整数を返します。
 * 種類: インスタンスメソッド
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 */
const words = "0123456789";

console.log(`「0」の文字コード: ${words.charCodeAt(0)}`); // 48
console.log(`「1」の文字コード: ${words.charCodeAt(1)}`); // 49
console.log(`「2」の文字コード: ${words.charCodeAt(2)}`); // 50
console.log(`「3」の文字コード: ${words.charCodeAt(3)}`); // 51
console.log(`「4」の文字コード: ${words.charCodeAt(4)}`); // 52
console.log(`「5」の文字コード: ${words.charCodeAt(5)}`); // 53
console.log(`「6」の文字コード: ${words.charCodeAt(6)}`); // 54
console.log(`「7」の文字コード: ${words.charCodeAt(7)}`); // 55
console.log(`「8」の文字コード: ${words.charCodeAt(8)}`); // 56
console.log(`「9」の文字コード: ${words.charCodeAt(9)}`); // 57

export {};
