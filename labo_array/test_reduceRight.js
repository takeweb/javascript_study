// 2^(3^4)を計算する。冪乗は右結合性を持つ。
const a = [2, 3, 4];
const result = a.reduceRight((acc, val) => Math.pow(val, acc));

console.log(result);
