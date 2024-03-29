const array = ["a", "b", "c", "d"];

console.log(`処理前の配列: ${JSON.stringify(array)}`);

// 配列の先頭に、新しい要素を追加
const result1 = array.unshift("AAA");
console.log(`result1: ${result1}`);

// 配列の末尾に、新しい要素を追加
const result2 = array.push("ZZZ");
console.log(`result2: ${result2}`);

// 配列の先頭要素を削除
const result3 = array.shift();
console.log(`result3: ${result3}`);

// 配列の末尾に、新しい要素を追加
const result4 = array.pop();
console.log(`result4: ${result4}`);

console.log(`処理後の配列: ${JSON.stringify(array)}`);
