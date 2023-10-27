/**
 * Array.prototype.copyWithinメソッド
 * 分類: 破壊
 * 引数: 移動先インデックス
 *      コピー開始位置
 *      コピー終了位置
 * 戻り値: 位置変更後の配列
 * 配列内の要素を指定位置に移動する
 * 戻り値の加工後だが、元の配列も加工される
 */

// 1から2番目の要素を2番目以降にコピー
let data = ["ド", "レ", "ミ", "ファ", "ソ"];
console.log(`処理前のdata: ${JSON.stringify(data)}`);
const result = data.copyWithin(2, 1, 3);
console.log(`処理後のdata: ${JSON.stringify(data)}`);
console.log(`result      : ${JSON.stringify(result)}`);
console.log("------------------------------------------------");

// 2番目から末尾の要素を1番目以降にコピー
let data2 = ["ド", "レ", "ミ", "ファ", "ソ"];
console.log(`処理前のdata2: ${JSON.stringify(data2)}`);
const result2 = data2.copyWithin(1, 2);
console.log(`処理後のdata2: ${JSON.stringify(data2)}`);
console.log(`result2      : ${JSON.stringify(result2)}`);
console.log("------------------------------------------------");

// 先頭から末尾の要素を2番目以降にコピー
let data3 = ["ド", "レ", "ミ", "ファ", "ソ"];
console.log(`処理前のdata3: ${JSON.stringify(data3)}`);
const result3 = data3.copyWithin(1, 2);
console.log(`処理後のdata3: ${JSON.stringify(data3)}`);
console.log(`result3      : ${JSON.stringify(result3)}`);

export default {};
