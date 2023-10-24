/**
 * String.prototype.charCodeAt(記号編)
 * 説明: 指定された位置にある UTF-16 コード単位を表す 0 から 65535 までの整数を返します。
 * 種類: インスタンスメソッド
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 */
const words = "!@#$%^&()*-_=+|`~[]:;\"',<.>/?";
const charArray = [...words];
const charMap = new Map();

charArray.sort();
console.log(charArray);
charArray.forEach((_value, index, array) => {
  charMap.set(
    array.toString().charAt(index),
    array.toString().charCodeAt(index)
  );
});

charMap.forEach((value, key) => {
  console.log(`${key}の文字コード: ${value}`);
});

export {};
