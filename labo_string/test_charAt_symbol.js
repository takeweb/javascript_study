/**
 * String.prototype.charCodeAt(記号編)
 * 説明: 指定された位置にある UTF-16 コード単位を表す 0 から 65535 までの整数を返します。
 * 種類: インスタンスメソッド
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 */
const words = "!@#$%^&()*-_=+|`~[]:;\"',<.>/?";

console.log(`${words.charAt(0)}の文字コード: ${words.charCodeAt(0)}`); // 33
console.log(`${words.charAt(1)}の文字コード: ${words.charCodeAt(1)}`); // 64
console.log(`${words.charAt(2)}の文字コード: ${words.charCodeAt(2)}`); // 35
console.log(`${words.charAt(3)}の文字コード: ${words.charCodeAt(3)}`); // 36
console.log(`${words.charAt(4)}の文字コード: ${words.charCodeAt(4)}`); // 37
console.log(`${words.charAt(5)}の文字コード: ${words.charCodeAt(5)}`); // 94
console.log(`${words.charAt(6)}の文字コード: ${words.charCodeAt(6)}`); // 38
console.log(`${words.charAt(7)}の文字コード: ${words.charCodeAt(7)}`); // 40
console.log(`${words.charAt(8)}の文字コード: ${words.charCodeAt(8)}`); // 41
console.log(`${words.charAt(9)}の文字コード: ${words.charCodeAt(9)}`); // 42
console.log(`${words.charAt(10)}の文字コード: ${words.charCodeAt(10)}`); // 45
console.log(`${words.charAt(11)}の文字コード: ${words.charCodeAt(11)}`); // 95
console.log(`${words.charAt(12)}の文字コード: ${words.charCodeAt(12)}`); // 61
console.log(`${words.charAt(13)}の文字コード: ${words.charCodeAt(13)}`); // 43
console.log(`${words.charAt(14)}の文字コード: ${words.charCodeAt(14)}`); // 124
console.log(`${words.charAt(15)}の文字コード: ${words.charCodeAt(15)}`); // 96
console.log(`${words.charAt(16)}の文字コード: ${words.charCodeAt(16)}`); // 126
console.log(`${words.charAt(17)}の文字コード: ${words.charCodeAt(17)}`); // 91
console.log(`${words.charAt(18)}の文字コード: ${words.charCodeAt(18)}`); // 93
console.log(`${words.charAt(19)}の文字コード: ${words.charCodeAt(19)}`); // 58
console.log(`${words.charAt(20)}の文字コード: ${words.charCodeAt(20)}`); // 59
console.log(`${words.charAt(21)}の文字コード: ${words.charCodeAt(21)}`); // 34
console.log(`${words.charAt(22)}の文字コード: ${words.charCodeAt(22)}`); // 39
console.log(`${words.charAt(23)}の文字コード: ${words.charCodeAt(23)}`); // 44
console.log(`${words.charAt(24)}の文字コード: ${words.charCodeAt(24)}`); // 60
console.log(`${words.charAt(25)}の文字コード: ${words.charCodeAt(25)}`); // 46
console.log(`${words.charAt(26)}の文字コード: ${words.charCodeAt(26)}`); // 62
console.log(`${words.charAt(27)}の文字コード: ${words.charCodeAt(27)}`); // 47
console.log(`${words.charAt(28)}の文字コード: ${words.charCodeAt(28)}`); // 63

export {};
