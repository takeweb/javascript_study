// Array.prototype.sortメソッド--------------------------------------------------
// 戻り値がソート済み配列なのに、元の配列にも影響がある破壊的メソッド
// デフォルトでは、アルファベットの昇順なので、変えたい場合は、引数に無名関数を与える必要がある。
const num_array = [8, 5, 10, 3, 7, 1];
console.log(`元の配列: ${JSON.stringify(num_array)}`);

const result = num_array.sort();
console.log(`ソート後の戻り値: ${JSON.stringify(result)}`);
console.log(`元の配列: ${JSON.stringify(num_array)}`);

// 数値の昇順でソートしたい場合------------------------------------------------------
const num_array2 = [8, 5, 10, 3, 7, 1];
console.log(`元の配列: ${JSON.stringify(num_array2)}`);

const result2 = num_array2.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(`ソート後の戻り値: ${JSON.stringify(result2)}`);
console.log(`元の配列: ${JSON.stringify(num_array2)}`);

// 数値の降順でソートしたい場合------------------------------------------------------
const num_array3 = [8, 5, 10, 3, 7, 1];
console.log(`元の配列: ${JSON.stringify(num_array3)}`);

const result3 = num_array3.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(`ソート後の戻り値: ${JSON.stringify(result3)}`);
console.log(`元の配列: ${JSON.stringify(num_array3)}`);

// 数値の昇順でソートしたい場合 その２(簡易版)-----------------------------------------
const num_array4 = [8, 5, 10, 3, 7, 1];
console.log(`元の配列: ${JSON.stringify(num_array4)}`);

const result4 = num_array4.sort((a, b) => a - b);

console.log(`ソート後の戻り値: ${JSON.stringify(result4)}`);
console.log(`元の配列: ${JSON.stringify(num_array4)}`);

// 数値の降順でソートしたい場合 その２(簡易版)-----------------------------------------
const num_array5 = [8, 5, 10, 3, 7, 1];
console.log(`元の配列: ${JSON.stringify(num_array5)}`);

const result5 = num_array5.sort((a, b) => b - a);

console.log(`ソート後の戻り値: ${JSON.stringify(result5)}`);
console.log(`元の配列: ${JSON.stringify(num_array5)}`);

export default {};
