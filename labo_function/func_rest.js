/**
 * 可変長引数の例
 * @param  {...any} nums 計算対象配列
 * @returns 加算結果
 */
function sum(...nums) {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}

/**
 * 可変長引数の例(reduce編)
 * @param  {...any} nums 計算対象配列
 * @returns 加算結果
 */
function sum2(...nums) {
  const result = nums.reduce((total, current) => {
    return (total += current);
  });
  return result;
}

console.log(sum(10, 25, 2));
console.log(sum2(10, 25, 2));

console.log(sum(7, 13, 25, 6, 100));
console.log(sum2(7, 13, 25, 6, 100));

// スプレッド構文による配列要素の展開
console.log(sum(...[10, 25, 2]));
console.log(sum2(...[10, 25, 2]));
