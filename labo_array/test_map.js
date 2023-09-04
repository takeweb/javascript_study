const array = [1, 2, 3, 4, 5];

// Array.prototype.mapメソッド---------------------------------------------------
// 要素、インデックス、配列そのものを直接取り出せる
// 内容を加工して、新たな配列を作成できる非破壊メソッド
// コンソール出力結果
// [10,20,30,40,50]
const newArray = array.map((v, _i, _arr) => {
  return v * 10;
});

console.log(JSON.stringify(newArray));
