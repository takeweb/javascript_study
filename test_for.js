// 配列編------------------------------------------------------------------------
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

// オブジェクト編-----------------------------------------------------------------
const obj = { a: 1, b: 2, c: 3 };

// for...in文
// 本来はオブジェクトに対して使うためのもの
for (key in obj) {
  console.log(obj[key]);
}

// for...of文
// 意外なことにオブジェクトに対しては、使えない。
// Uncaught TypeError: obj is not iterable
for (val of obj) {
  console.log(val);
}

// Array.prototype.forEachメソッド
// 当然ながら、下記エラーが出てオブジェクトに対しては使えない
// Uncaught TypeError: obj.forEach is not a function
obj.forEach((v) => {
  console.log(v);
});

// 文字列編-----------------------------------------------------------------
const str = "吉野家";

// Array.prototype.forEachメソッド
// 文字列にも使える
for (const s of str) {
  console.log(s);
}
