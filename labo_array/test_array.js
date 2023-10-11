const array = [1, 2, 3, 4, 5];

// Array.prototypeの高階関数

// Array.prototype.forEachメソッド-----------------------------------------------
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

// Array.prototype.mapメソッド---------------------------------------------------
// 要素、インデックス、配列そのものを直接取り出せる
// 内容を加工して、新たな配列を作成できる非破壊メソッド
const newArray = array.map((v, _i, _arr) => {
  return v * 10;
});

console.log(JSON.stringify(newArray));
// コンソール出力結果
// [10,20,30,40,50]

// Array.prototype.filterメソッド-------------------------------------------------
// 要素、インデックス、配列そのものを直接取り出せる
// 条件に合致した要素だけを抽出した新たな配列を作成できる非破壊メソッド
const newArray2 = array.filter((v, _i, _arr) => {
  return v % 2 === 1;
});

console.log(JSON.stringify(newArray2));
// コンソール出力結果
// [1,3,5]

// Array.prototype.reduceメソッド------------------------------------------------
// 累積値、要素、インデックス、配列そのものを直接取り出せる
// 第二引数として累積値の初期値を設定可能
// 結果を配列以外で返せる非破壊メソッド
const result = array.reduce((a, v, _i, _arr) => {
  return a + v;
}, 0);

// コンソール出力結果
// 15
console.log(result);

// Array.prototype.reduceRightメソッド--------------------------------------------
// 累積値、要素、インデックス、配列そのものを直接取り出せる
// ruduceは要素の左(最初)から処理するが、reduceRightは要素の右(最後の要素)から処理をする。
// 第二引数として累積値の初期値を設定可能
// 結果を配列以外で返せる非破壊メソッド
// 2^(3^4)を計算する。冪乗は右結合性を持つ。
const a = [2, 3, 4];
const result_a = a.reduceRight((acc, val) => Math.pow(val, acc));

console.log(result_a);

//------------------------------------------------------------------------------
const colors = [
  { name: "red", rgb: "#FF0000" },
  { name: "green", rgb: "#3BAF75" },
  { name: "blue", rgb: "#006FA" },
  { name: "yellow", rgb: "#ffef20" },
];

// Array.prototype.findIndexメソッド---------------------------------------------
// 要素、インデックス、配列そのものを直接取り出せる
// 条件に合致した最初の要素のインデックスを取得できる非破壊メソッド
const index = colors.findIndex((color, _i, _arr) => {
  return color.name === "blue";
});

// コンソール出力結果
// { name: 'green', rgb: '#3BAF75' }
console.log(colors[index]);

// Array.prototype.findメソッド--------------------------------------------------
// 要素、インデックス、配列そのものを直接取り出せる
// 条件に合致した最初の要素だけを抽出した新たな配列を作成できる非破壊メソッド
const result2 = colors.find((color, _i, _arr) => {
  return color.name === "green";
});

// コンソール出力結果
// { name: 'green', rgb: '#3BAF75' }
console.log(result2);

// メソッドチェーン----------------------------------------------------------------
const ECMAScriptVersion = [
  { name: "ECMAScript 1", year: 1997 },
  { name: "ECMAScript 2", year: 1998 },
  { name: "ECMAScript 3", year: 1999 },
  { name: "ECMAScript 5", year: 2009 },
  { name: "ECMAScript 5.1", year: 2011 },
  { name: "ECMAScript 2015", year: 2015 },
  { name: "ECMAScript 2016", year: 2016 },
  { name: "ECMAScript 2017", year: 2017 },
];

// メソッドチェーンで必要な加工処理を並べる--------------------------------------------
const versionNames = ECMAScriptVersion.filter((item) => item.year >= 2000).map(
  (item) => item.name
);
console.log(versionNames);

// これだと、求めている結果にはならない
const versionNames2 = ECMAScriptVersion.map((item) => {
  if (item.year >= 2000) {
    return item.name;
  }
});
console.log(versionNames2);

// Array.prototype.sortメソッド--------------------------------------------------
// 戻り値がソート済み配列なのに、元の配列にも影響がある破壊的メソッド
// デフォルトでは、アルファベットの昇順なので、変えたい場合は、引数に無名関数を与える必要がある。
const num_array = [8, 5, 10, 3, 7, 1];
console.log(`元の配列: ${JSON.stringify(num_array)}`);

const result3 = num_array.sort();
console.log(`ソート後の戻り値: ${JSON.stringify(result3)}`);
console.log(`元の配列: ${JSON.stringify(num_array)}`);

// 数値の昇順でソートしたい場合------------------------------------------------------
const num_array2 = [8, 5, 10, 3, 7, 1];
console.log(`元の配列: ${JSON.stringify(num_array2)}`);

const result4 = num_array2.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(`ソート後の戻り値: ${JSON.stringify(result4)}`);
console.log(`元の配列: ${JSON.stringify(num_array2)}`);

// 数値の降順でソートしたい場合------------------------------------------------------
const num_array3 = [8, 5, 10, 3, 7, 1];
console.log(`元の配列: ${JSON.stringify(num_array3)}`);

const result5 = num_array3.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(`ソート後の戻り値: ${JSON.stringify(result5)}`);
console.log(`元の配列: ${JSON.stringify(num_array3)}`);

// 数値の昇順でソートしたい場合 その２(簡易版)-----------------------------------------
const num_array4 = [8, 5, 10, 3, 7, 1];
console.log(`元の配列: ${JSON.stringify(num_array4)}`);

const result6 = num_array4.sort((a, b) => a - b);

console.log(`ソート後の戻り値: ${JSON.stringify(result6)}`);
console.log(`元の配列: ${JSON.stringify(num_array4)}`);

// 数値の降順でソートしたい場合 その２(簡易版)-----------------------------------------
const num_array5 = [8, 5, 10, 3, 7, 1];
console.log(`元の配列: ${JSON.stringify(num_array5)}`);

const result7 = num_array5.sort((a, b) => b - a);

console.log(`ソート後の戻り値: ${JSON.stringify(result7)}`);
console.log(`元の配列: ${JSON.stringify(num_array5)}`);

// Array.prototype.reverseメソッド------------------------------------------------
// 配列の要素の順番後逆にする時に使用。降順ソートではない。
// sort同様に、戻り値が逆ソート済み配列なのに、元の配列にも影響がある破壊的メソッド
// 引数はない。
const num_array6 = [8, 5, 10, 3, 7, 1];
console.log(`元の配列: ${JSON.stringify(num_array6)}`);

const result8 = num_array6.reverse();
console.log(`ソート後の戻り値: ${JSON.stringify(result8)}`);
console.log(`元の配列: ${JSON.stringify(num_array6)}`);
