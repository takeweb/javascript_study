/**
 * String.prototype.charCodeAt(記号編)
 * 説明: 指定された位置にある UTF-16 コード単位を表す 0 から 65535 までの整数を返します。
 * 種類: インスタンスメソッド
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 */
const words = "!@#$%^&()*-_=+|`~[]:;\"',<.>/?";

console.log(
  `${words.charAt(0)}の文字コード: ${words.charCodeAt(0).toString(16)}`
); // 33
console.log(
  `${words.charAt(21)}の文字コード: ${words.charCodeAt(21).toString(16)}`
); // 34
console.log(
  `${words.charAt(2)}の文字コード: ${words.charCodeAt(2).toString(16)}`
); // 35
console.log(
  `${words.charAt(3)}の文字コード: ${words.charCodeAt(3).toString(16)}`
); // 36
console.log(
  `${words.charAt(4)}の文字コード: ${words.charCodeAt(4).toString(16)}`
); // 37
console.log(
  `${words.charAt(6)}の文字コード: ${words.charCodeAt(6).toString(16)}`
); // 38
console.log(
  `${words.charAt(22)}の文字コード: ${words.charCodeAt(22).toString(16)}`
); // 39
console.log(
  `${words.charAt(7)}の文字コード: ${words.charCodeAt(7).toString(16)}`
); // 40
console.log(
  `${words.charAt(8)}の文字コード: ${words.charCodeAt(8).toString(16)}`
); // 41
console.log(
  `${words.charAt(9)}の文字コード: ${words.charCodeAt(9).toString(16)}`
); // 42
console.log(
  `${words.charAt(13)}の文字コード: ${words.charCodeAt(13).toString(16)}`
); // 43
console.log(
  `${words.charAt(23)}の文字コード: ${words.charCodeAt(23).toString(16)}`
); // 44
console.log(
  `${words.charAt(10)}の文字コード: ${words.charCodeAt(10).toString(16)}`
); // 45
console.log(
  `${words.charAt(25)}の文字コード: ${words.charCodeAt(25).toString(16)}`
); // 46
console.log(
  `${words.charAt(27)}の文字コード: ${words.charCodeAt(27).toString(16)}`
); // 47
// 48〜57は、「0」〜「9」
console.log(
  `${words.charAt(19)}の文字コード: ${words.charCodeAt(19).toString(16)}`
); // 58
console.log(
  `${words.charAt(20)}の文字コード: ${words.charCodeAt(20).toString(16)}`
); // 59
console.log(
  `${words.charAt(24)}の文字コード: ${words.charCodeAt(24).toString(16)}`
); // 60
console.log(
  `${words.charAt(12)}の文字コード: ${words.charCodeAt(12).toString(16)}`
); // 61
console.log(
  `${words.charAt(26)}の文字コード: ${words.charCodeAt(26).toString(16)}`
); // 62
console.log(
  `${words.charAt(28)}の文字コード: ${words.charCodeAt(28).toString(16)}`
); // 63
console.log(
  `${words.charAt(1)}の文字コード: ${words.charCodeAt(1).toString(16)}`
); // 64
// 65〜90は、「A」〜「Z」
console.log(
  `${words.charAt(17)}の文字コード: ${words.charCodeAt(17).toString(16)}`
); // 91
console.log(
  `${words.charAt(18)}の文字コード: ${words.charCodeAt(18).toString(16)}`
); // 93
console.log(
  `${words.charAt(5)}の文字コード: ${words.charCodeAt(5).toString(16)}`
); // 94
console.log(
  `${words.charAt(11)}の文字コード: ${words.charCodeAt(11).toString(16)}`
); // 95
console.log(
  `${words.charAt(15)}の文字コード: ${words.charCodeAt(15).toString(16)}`
); // 96
// 97〜122は、「a」〜「z」
console.log(
  `${words.charAt(14)}の文字コード: ${words.charCodeAt(14).toString(16)}`
); // 124
console.log(
  `${words.charAt(16)}の文字コード: ${words.charCodeAt(16).toString(16)}`
); // 126

export {};
