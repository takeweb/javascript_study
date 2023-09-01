const array = [1, 2, 3, 4, 5];

// Array.prototypeの高階関数

// Array.prototype.forEachメソッド
// 要素、インデックス、配列そのものを直接取り出せる
// コンソール出力結果
// 要素: 1、インデックス: 0、配列アクセス: 1
// 要素: 2、インデックス: 1、配列アクセス: 2
// 要素: 3、インデックス: 2、配列アクセス: 3
// 要素: 4、インデックス: 3、配列アクセス: 4
// 要素: 5、インデックス: 4、配列アクセス: 5
array.forEach((v, i, arr) => {
  console.log(`要素: ${v}、インデックス: ${i}、配列アクセス: ${arr[i]}`);
});

// Array.prototype.mapメソッド
// 要素、インデックス、配列そのものを直接取り出せる
// 内容を加工して、新たな配列を作成できる非破壊メソッド
const newArray = array.map((v, _i, _arr) => {
  return v * 10;
});

console.log(JSON.stringify(newArray));
// コンソール出力結果
// [10,20,30,40,50]

// Array.prototype.mapメソッド
// 要素、インデックス、配列そのものを直接取り出せる
// 条件に合致した要素だけを抽出した新たな配列を作成できる非破壊メソッド
const newArray2 = array.filter((v, _i, _arr) => {
  return v % 2 === 1;
});

console.log(JSON.stringify(newArray2));
// コンソール出力結果
// [1,3,5]

// Array.prototype.reduceメソッド
// 累積値、要素、インデックス、配列そのものを直接取り出せる
// 第二引数として累積値の初期値を設定可能
// 条件に合致した要素だけを抽出した新たな配列を作成できる非破壊メソッド
const result = array.reduce((a, v, _i, _arr) => {
  return a + v;
}, 0);

// コンソール出力結果
// 15
console.log(result);

const colors = [
  { name: "red", rgb: "#FF0000" },
  { name: "green", rgb: "#3BAF75" },
  { name: "blue", rgb: "#006FA" },
  { name: "yellow", rgb: "#ffef20" },
];

// Array.prototype.findメソッド
// 要素、インデックス、配列そのものを直接取り出せる
// 条件に合致した最初の要素だけを抽出した新たな配列を作成できる非破壊メソッド
const index = colors.findIndex((color, _i, _arr) => {
  return color.name === "blue";
});

// コンソール出力結果
// { name: 'green', rgb: '#3BAF75' }
console.log(colors[index]);

// Array.prototype.findメソッド
// 要素、インデックス、配列そのものを直接取り出せる
// 条件に合致した最初の要素だけを抽出した新たな配列を作成できる非破壊メソッド
const result2 = colors.find((color, _i, _arr) => {
  return color.name === "green";
});

// コンソール出力結果
// { name: 'green', rgb: '#3BAF75' }
console.log(result2);
