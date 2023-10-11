/**
 * Array.prototype.flatMapメソッド
 * 元の配列をフラット化して新たな配列を返す非破壊メソッド
 * 内容を展開できるところが違い
 */
let phrases = ["hello world", "the definitive gude"];
console.log(`元の配列: ${phrases}`);

let words = phrases.flatMap((phrase) => phrase.split(" "));
console.log(`フラット化後の配列: ${words}`);
