/**
 * String.prototype.charCodeAt(記号編)
 * 説明: 指定された位置にある UTF-16 コード単位を表す 0 から 65535 までの整数を返します。
 * 種類: インスタンスメソッド
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 */
const words = "!@#$%^&()*-_=+|`~[]:;\"',<.>/?";
// const words = "!@#$%^&()*-_=+|`~[]\"',<.>/?";
const charArray = [...words];
const charObjArray = [];

charArray.sort();
console.log(charArray.length);
console.log(charArray);
charArray.forEach((_value, index, array) => {
  // console.log(value);
  const obj = {
    key: array.toString().charCodeAt(index),
    val: `\n${array.toString().charAt(index)}`,
  };
  charObjArray.push(obj);
});

console.log(charObjArray);
charObjArray.forEach((val, key) => {
  console.log(`${val.toString()}の文字コード: ${key}`);
});

export {};
