/**
 * Array.prototype.reduceメソッド
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
const array = [1, 2, 3, 4, 5];
console.log(`処理前の配列: ${JSON.stringify(array)}`);

// 使い方例1: 関数外出し
const result1 = sum(array);
console.log(`使い方例1の計算結果: ${result1}`);
function sum(numbers) {
  return numbers.reduce((total, num) => {
    return total + num;
  }, 0);
}

// 使い方例2: そのままアロー関数内で計算 ←普通これ
const result2 = array.reduce((total, num) => {
  return total + num;
});
console.log(`使い方例2の計算結果: ${result2}`);

// 使い方例3: 関数外出し(計算のみ)
function sum2(total, num) {
  return total + num;
}
const result3 = array.reduce((total, num) => sum2(total, num), 0);
console.log(`使い方例3の計算結果: ${result3}`);

export default {};
