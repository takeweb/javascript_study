/**
 * 配列から最大値、最小値を求めたい
 * 参考: https://qiita.com/ndj/items/82e9c5a4518fe16e539f
 *      https://qiita.com/hachisukansw/items/81d739ef39af343df619
 */

const ary = [5, 2, 3, 1, 10];

// 最大値
const max = ary.reduce((a, b) => {
  return Math.max(a, b);
});

// 最小値
const min = ary.reduce((a, b) => {
  return Math.min(a, b);
});

console.log(`最大値: ${max}`); // => 10
console.log(`最小値: ${min}`); // => 1
