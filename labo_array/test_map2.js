const objList = [
  {
    id: 1,
    value: "aaaa",
  },
  {
    id: 2,
    value: "bbbb",
  },
  {
    id: 3,
    value: "cccc",
  },
];

// オブジェクト配列から、idのみ取り出し
// コンソール出力結果
// [ 1, 2, 3 ]
const ids = objList.map((obj) => {
  return obj.id;
});
console.log(ids);

// オブジェクト配列から、valueのみを取り出し
// コンソール出力結果
// [ 'aaaa', 'bbbb', 'cccc' ]
const values = objList.map((obj) => obj.value);
console.log(values);

// オブジェクト配列から、idが偶数の要素だけ抽出後加工して出力
// コンソール出力結果
// [ 'id:2-value:bbbb' ]
const edited = objList
  .filter((obj) => {
    return obj.id % 2 === 0;
  })
  .map((obj) => {
    return `id:${obj.id}-value:${obj.value}`;
  });
console.log(edited);

export default {};
