/**
 * 任意の桁数で小数点を丸める
 * 種類: インスタンスメソッド
 * Number.prototype.toFixed:     小数点以下が指定された桁数になるように丸める
 * Number.prototype.toPrecision: 数値全体が指定された桁数になるように丸める
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
 */
const num = 123.456;
console.log(`元の値: ${num}`); // 123.456
console.log(`小数点以下2桁: ${num.toFixed(2)}`); // 123.46
console.log(`小数点以下5桁: ${num.toFixed(5)}`); // 123.45600
console.log(`全体で5桁: ${num.toPrecision(5)}`); // 123.46
console.log(`全体で8桁: ${num.toPrecision(8)}`); // 123.45600

export {};
