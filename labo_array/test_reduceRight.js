/**
 * Array.prototype.reduceRightメソッド
 * 分類: 非破壊
 * 引数1: コールバック関数(callbackfn)
 *        previousValue: string 累積値
 *        currentValue: string  現在の要素
 *        currentIndex: number  現在のインデックス
 *        array: string[]       配列全体
 * 引数2: 初期値(省略時は0)
 * 戻り値: 計算結果の数値
 * 配列の先頭に、新しい要素を追加
 */

// 2^(3^4)を計算する。冪乗は右結合性を持つ。
const a = [2, 3, 4];
const result = a.reduceRight((acc, val) => Math.pow(val, acc));

console.log(result);

export default {};
