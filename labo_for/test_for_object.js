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
