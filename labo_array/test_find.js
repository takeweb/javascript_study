/**
 * Array.prototype.findメソッド
 * 要素、インデックス、配列そのものを直接取り出せる
 * 条件に合致した最初の要素だけを抽出した新たな配列を作成できる非破壊メソッド
 */
const colors = [
  { name: "red", rgb: "#FF0000" },
  { name: "green", rgb: "#3BAF75" },
  { name: "blue", rgb: "#006FA" },
  { name: "yellow", rgb: "#ffef20" },
];

// コンソール出力結果
// { name: 'green', rgb: '#3BAF75' }
const result = colors.find((color, _i, _arr) => {
  return color.name === "green";
});
console.log(`取得した要素: ${JSON.stringify(result, null, 2)}`);

export default {};
