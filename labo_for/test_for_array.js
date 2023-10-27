/**
 * for/配列編
 * see labo_array
 */
const array = [1, 2, 3, 4, 5];

// 旧来からのfor文
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// for...of文
// 値を直接取り出せる
for (const val of array) {
  console.log(val);
}

// Array.prototype.forEachメソッド
// 値、インデックス、配列そのものを直接取り出せる
array.forEach((v, i, arr) => {
  console.log(`値: ${v}、インデックス: ${i}、配列アクセス: ${arr[i]}`);
});

// for...in文
// 配列に対しては、あまり使わない方が良い
// 値そのものではなく、キーに当たるインデックスが取得されるので、
// インデックスを使って改めて値を取り出す必要がある。
for (const i in array) {
  console.log(array[i]);
}
