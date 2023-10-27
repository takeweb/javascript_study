/**
 * Array.prototype.flatメソッド
 * 元の配列をフラット化して新たな配列を返す非破壊メソッド
 * 引数の数字でフラット化する深さを指定できる
 */
const array = [1, [2, [3, [4]]]];

// コンソール出力結果: [ 1, [ 2, [ 3, [Array] ] ] ]
console.log(`元の配列: ${array}`);

// フラット化
const result = array.flat();
// コンソール出力結果: [ 1, 2, [ 3, [ 4 ] ] ]
console.log(`フラット化後の配列: ${result}`);

// フラット化(引数なしと同じ１階層だけ)
const result1 = array.flat(1);
// コンソール出力結果: [ 1, 2, [ 3, [ 4 ] ] ]
console.log(`フラット化後の配列(1階層のみ): ${result1}`);

// フラット化(2階層指定)
const result2 = array.flat(2);
// コンソール出力結果: [ 1, 2, 3, [ 4 ] ]
console.log(`フラット化後の配列(2階層指定): ${result2}`);

// フラット化(3階層指定)
const result3 = array.flat(3);
// コンソール出力結果: [ 1, 2, 3, 4 ]
console.log(`フラット化後の配列(3階層指定): ${result3}`);

// フラット化(4階層指定)
const result4 = array.flat(4);
// コンソール出力結果: [ 1, 2, 3, 4 ]
console.log(`フラット化後の配列(4階層指定): ${result4}`);

export default {};
