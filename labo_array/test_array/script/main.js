// Array.at() 添え字より便利？
const array = ["a", "b", "c"];

console.log(array.at(0));
console.log(array.at(1));
console.log(array.at(2));

// 最後の要素である「c」が出力
console.log(array.at(-1));

// undefinedとなる
console.log(array[-1]);

// Array.find() object配列から名前で検索
const colors = [
  {
    "name": "red",
    "color": "#ff0000",
  },
  {
    "name": "green",
    "color": "#008000",
  },
  {
    "name": "blue",
    "color": "#0000ff",
  },
  {
    "name": "yellow",
    "color": "#ffff00",
  },
];

const blue = colors.find((obj) => {
  return obj.name === "blue";
});

console.log(blue);

// Array.flat() 配列のフラット化
const array1 = [["a"], "b", "c"];
console.log(array1);
console.log(array1.flat());   // １階層のみフラット化
console.log(array1.flat(1));  // １階層のみフラット化
console.log(array1.flat(2));  // ２階層までフラット化
console.log(array1.flat(Infinity)); // 全部フラット化
