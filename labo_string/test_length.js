/**
 * String.prototype.length
 * 説明: 文字列長をUTF-16コード単位の数で表す　文字の長さを取得
 * 種類: インスタンスプロパティ
 * サロゲートペア(１文字4byte)の問題があるから、そのまま(String.prototype.length)で使うと誤差が出ると言う話
 * サロゲートペアの文字:    𠮟
 * サロゲートペア以外の文字: 叱
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length
 * https://codezine.jp/article/detail/1592
 */
const word1 = "ともだち賛歌";
const word2 = "𠮟られて";
const word3 = "叱られて";
const word4 = "𪛊";

console.log(`「ともだち賛歌」の長さ: ${word1.length}`); // 6
console.log(`「𠮟られて」の長さ(そのまま): ${word2.length}`); // 5
console.log(`「叱られて」の長さ(そのまま): ${word3.length}`); // 4
console.log(`「𪛊」の長さ(そのまま): ${word4.length}`); // 2

// 上位サロゲート(\uD800-\uDBFF)と下位サロゲート(\uDC00-\uDFFF)に分離
const surrogatePare = word2.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g);
const snum = surrogatePare.length - 1;
console.log(`「𠮟られて」のサロゲートペア: ${surrogatePare}`); // ,られて
console.log(`「𠮟られて」のサロゲートペアの個数: ${snum}`); // 1
console.log(
  `「𠮟られて」の長さ(サロゲートペアの個数から): ${word2.length - snum}`
); // 4
console.log(`「𠮟られて」の長さ(スプレッド演算子): ${[...word2].length}`); // 4

export {};
