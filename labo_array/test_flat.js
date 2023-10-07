const array = [1, [2, [3, [4]]]];

// コンソール出力結果
// [ 1, [ 2, [ 3, [Array] ] ] ]
console.log(array);

// Array.prototype.flatメソッド--------------------------------------------------
// 元の配列をフラット化して新たな配列を返す非破壊メソッド
// 引数の数字でフラット化する深さを指定できる
const result = array.flat();

// コンソール出力結果
// [ 1, 2, [ 3, [ 4 ] ] ]
console.log(result);

const result1 = array.flat(1);
// コンソール出力結果 引数なしと同じ
// [ 1, 2, [ 3, [ 4 ] ] ]
console.log(result1);

const result2 = array.flat(2);
// コンソール出力結果
// [ 1, 2, 3, [ 4 ] ]
console.log(result2);

const result3 = array.flat(3);
// コンソール出力結果
// [ 1, 2, 3, 4 ]
console.log(result3);

const result4 = array.flat(4);
// コンソール出力結果
// [ 1, 2, 3, 4 ]
console.log(result4);
