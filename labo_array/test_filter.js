/**
 * Array.prototype.filterメソッド
 * 要素、インデックス、配列そのものを直接取り出せる
 * 条件に合致した要素だけを抽出した新たな配列を作成できる非破壊メソッド
 */
const array = [1, 2, 3, 4, 5];
console.log(`元の配列: ${JSON.stringify(array)}`);

// 基数のみを抽出
// コンソール出力結果: [1,3,5]
const newArray = array.filter((v, _i, _arr) => {
  return v % 2 === 1;
});
console.log(`基数のみを抽出: ${JSON.stringify(newArray)}`);
