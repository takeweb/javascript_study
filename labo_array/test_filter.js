const array = [1, 2, 3, 4, 5];

// Array.prototype.filterメソッド-------------------------------------------------
// 要素、インデックス、配列そのものを直接取り出せる
// 条件に合致した要素だけを抽出した新たな配列を作成できる非破壊メソッド
// 基数のみを抽出
// コンソール出力結果
// [1,3,5]
const newArray = array.filter((v, _i, _arr) => {
  return v % 2 === 1;
});

console.log(JSON.stringify(newArray));
