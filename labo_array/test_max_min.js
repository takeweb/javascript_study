/**
 * 配列から最大値、最小値を求めたい場合、Array.prototype.reduceメソッドが使える
 * 参考: https://qiita.com/ndj/items/82e9c5a4518fe16e539f
 *      https://qiita.com/hachisukansw/items/81d739ef39af343df619
 */
const array = [5, 2, 3, 1, 10];
console.log(`元の配列: ${JSON.stringify(array)}`);

// 最大値
const max = array.reduce((a, b) => {
  return Math.max(a, b);
});

// 最小値
const min = array.reduce((a, b) => {
  return Math.min(a, b);
});

console.log(`最大値: ${max}`); // => 10
console.log(`最小値: ${min}`); // => 1

// というか、これで良くない？
console.log(`最大値(Math.max): ${Math.max(...array)}`); // => 10
console.log(`最小値(Math.min): ${Math.min(...array)}`); // => 1

export default {};
