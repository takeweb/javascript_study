/**
 * 任意の桁数で小数点を丸める
 * 種類: インスタンスプロパティ
 * String.prototype.length: 文字列長をUTF-16コード単位の数で表す
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length
 */
const song1 = "ともだち賛歌";
const song2 = "叱られて";

console.log(`「ともだち賛歌」の長さ: ${song1.length}`); // 6
console.log(`「叱られて」の長さ(そのまま): ${song2.length}`); // 4

let len = song2.length;
let snum = song2.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length - 1;
console.log(`「叱られて」のサロゲートペアの個数: ${snum}`); // 0
console.log(`「叱られて」の長さ(サロゲートペアの個数から): ${len - snum}`);
console.log(`「叱られて」の長さ(スプレッド演算子): ${[...song2].length}`); // 4

export {};
