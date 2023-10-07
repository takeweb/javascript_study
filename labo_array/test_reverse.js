// Array.prototype.reverseメソッド------------------------------------------------
// 配列の要素の順番後逆にする時に使用。降順ソートではない。
// sort同様に、戻り値が逆ソート済み配列なのに、元の配列にも影響がある破壊的メソッド
// 引数はない。
const num_array = [8, 5, 10, 3, 7, 1];
console.log(`元の配列: ${JSON.stringify(num_array)}`);

const result = num_array.reverse();
console.log(`ソート後の戻り値: ${JSON.stringify(result)}`);
console.log(`元の配列: ${JSON.stringify(num_array)}`);
