/**
 * String.prototype.charCodeAt(数字編)
 * 説明: 指定された位置にある UTF-16 コード単位を表す 0 から 65535 までの整数を返します。
 * 種類: インスタンスメソッド
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 */
const words = "0123456789";

// 「!」〜「/」の文字コード: 0021〜002F

// 「0」〜「9」の文字コード: 0030〜0039
console.log(`「0」の文字コード: ${words.charCodeAt(0).toString(16).padStart(4, "0").toUpperCase().padStart(4, "0").toUpperCase()}`); // 0030
console.log(`「1」の文字コード: ${words.charCodeAt(1).toString(16).padStart(4, "0").toUpperCase().padStart(4, "0").toUpperCase()}`); // 0031
console.log(`「2」の文字コード: ${words.charCodeAt(2).toString(16).padStart(4, "0").toUpperCase().padStart(4, "0").toUpperCase()}`); // 0032
console.log(`「3」の文字コード: ${words.charCodeAt(3).toString(16).padStart(4, "0").toUpperCase().padStart(4, "0").toUpperCase()}`); // 0033
console.log(`「4」の文字コード: ${words.charCodeAt(4).toString(16).padStart(4, "0").toUpperCase().padStart(4, "0").toUpperCase()}`); // 0034
console.log(`「5」の文字コード: ${words.charCodeAt(5).toString(16).padStart(4, "0").toUpperCase().padStart(4, "0").toUpperCase()}`); // 0035
console.log(`「6」の文字コード: ${words.charCodeAt(6).toString(16).padStart(4, "0").toUpperCase().padStart(4, "0").toUpperCase()}`); // 0036
console.log(`「7」の文字コード: ${words.charCodeAt(7).toString(16).padStart(4, "0").toUpperCase().padStart(4, "0").toUpperCase()}`); // 0037
console.log(`「8」の文字コード: ${words.charCodeAt(8).toString(16).padStart(4, "0").toUpperCase().padStart(4, "0").toUpperCase()}`); // 0038
console.log(`「9」の文字コード: ${words.charCodeAt(9).toString(16).padStart(4, "0").toUpperCase().padStart(4, "0").toUpperCase()}`); // 0039

// 「:」〜「@」の文字コード: 003A〜0040

export {};
