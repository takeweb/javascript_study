const array = ["a", "b", "c", "d"];
console.log(`処理前の配列: ${JSON.stringify(array)}`);

/**
 * Array.prototype.unshiftメソッド
 * 分類: 破壊
 * 引数: 追加したい要素
 * 戻り値: 追加後の配列の長さ
 * 配列の先頭に、新しい要素を追加
 */
const result1 = array.unshift("AAA");
console.log(`result1: ${result1}`);
console.log(`処理後の配列: ${JSON.stringify(array)}`);

/**
 * Array.prototype.pushメソッド
 * 分類: 破壊
 * 引数: 追加したい要素
 * 戻り値: 追加後の配列の長さ
 * 配列の末尾に、新しい要素を追加
 */
const result2 = array.push("ZZZ");
console.log(`result2: ${result2}`);

/**
 * Array.prototype.shiftメソッド
 * 分類: 破壊
 * 戻り値: 削除した要素
 * 配列の先頭から要素を削除
 */
const result3 = array.shift();
console.log(`result3: ${result3}`);

/**
 * Array.prototype.popメソッド
 * 分類: 破壊
 * 戻り値: 削除した要素
 * 配列の末尾から要素を削除
 */
const result4 = array.pop();
console.log(`result4: ${result4}`);

console.log(`処理後の配列: ${JSON.stringify(array)}`);

export default {};
