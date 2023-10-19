/**
 * 小数点以下の数値を丸める
 * Math.round: 四捨五入
 * Math.ceil:  常に右方向に切り上げ
 * Math.floor: 常に左方向に切り捨て
 * Math.trunc: ０方向へ切り捨て
 */
console.log(`4.56: ${Math.ceil(4.56)}`); // 5
console.log(`4.56: ${Math.ceil(-4.56)}`); // -4
console.log(`4.56: ${Math.floor(4.56)}`); // 5
console.log(`4.56: ${Math.floor(-4.56)}`); // -4
console.log(`4.56: ${Math.round(4.56)}`); // 5
console.log(`4.56: ${Math.round(-4.56)}`); // -4
console.log(`4.56: ${Math.trunc(4.56)}`); // 5
console.log(`4.56: ${Math.trunc(-4.56)}`); // -4

export {};
