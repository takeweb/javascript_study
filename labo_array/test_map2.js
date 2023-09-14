const resultList = [
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
const ids = resultList.map((x) => {
  return x.id;
});
console.log(ids);

// オブジェクト配列から、valueのみを取り出し
const values = resultList.map((x) => x.value);
console.log(values);

// オブジェクト配列から、idが偶数の要素だけ抽出後加工して出力
const edited = resultList
  .filter((v) => {
    return v.id % 2 === 0;
  })
  .map((x) => {
    return `id:${x.id}-value:${x.value}`;
  });
console.log(edited);
