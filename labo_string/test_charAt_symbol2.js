/**
 * String.prototype.charCodeAt(記号編)
 * 説明: 指定された位置にある UTF-16 コード単位を表す 0 から 65535 までの整数を返します。
 * 種類: インスタンスメソッド
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 */
// const symbols = "!@#$%^&()*-_=+|`~[]:;\"',<.>/?";
const symbols = "!#$%&";
const charArray = [...symbols];
const charMap = new Map();

charArray.sort();
console.log(charArray.length);
console.log(charArray);
charArray.forEach((value, index, array) => {
  console.log(value);
  charMap.set(array.toString().charCodeAt(index).toString(16).padStart(4, "0").toUpperCase(), array.toString().charAt(index));
});

console.log(charMap);
charMap.forEach((value, key) => {
  console.log(`${key}の文字コード: ${value}`);
});

export {};
