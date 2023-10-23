/**
 * 任意の桁数で小数点を丸める
 * 種類: インスタンスプロパティ
 * String.prototype.length: 文字列長をUTF-16コード単位の数で表す
 * サロゲートペア(１文字4byte)の問題があるから、そのまま(String.prototype.length)で使うと誤差が出ると言う話
 * サロゲートペアの文字:    𠮟
 * サロゲートペア以外の文字: 叱
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length
 */
const word1 = "ともだち賛歌";
const word2 = "𠮟られて";
const word3 = "𪛊";
console.log(word2.length);

console.log(`「ともだち賛歌」の長さ: ${word1.length}`); // 6
console.log(`「𠮟られて」の長さ(そのまま): ${word2.length}`); // 5
console.log(`「𪛊」の長さ(そのまま): ${word3.length}`); // 4

let len = word2.length;
let snum = word2.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length - 1;
console.log(`「𠮟られて」のサロゲートペアの個数: ${snum}`); // 0
console.log(`「𠮟られて」の長さ(サロゲートペアの個数から): ${len - snum}`); // 4
console.log(`「𠮟られて」の長さ(スプレッド演算子): ${[...word2].length}`); // 4

export {};
