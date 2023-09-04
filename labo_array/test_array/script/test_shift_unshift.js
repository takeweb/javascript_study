const array = ["a", "b", "c"];
console.log(array);

// 先頭に追加
array.unshift("S");
console.log(array);

// 先頭の要素を削除
const shiftedItem = array.shift();
console.log(array);

// 削除した要素
console.log(shiftedItem);
