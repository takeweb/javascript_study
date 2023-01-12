// 比較演算子
// 等価演算子 暗黙的な型変換が行われた後に比較される
console.log("--等価演算子 値同士の比較---------------------------------------------------------------");
console.log(1    == 1);     // true
console.log(1    == '1');   // true
console.log("1"  == '1');   // true
console.log("01" == 1);     // true
console.log(0    == false); // true
console.log(0    == null);  // false
console.log(null == undefined); // true
console.log(false== null);  // false

// 厳密等価演算子 値同士の比較
console.log("--厳密等価演算子 値同士の比較------------------------------------------------------------");
console.log(1   === 1);   // true
console.log(1   === '1'); // false
console.log("1" === '1'); // true

// 厳密等価演算子 オブジェクト同士の比較
console.log("--厳密等価演算子 オブジェクト同士の比較---------------------------------------------------");
const objA = {};
const objB = {};
const objC = objA;
console.log(objA === objB); // false
console.log(objA === objC); // true
console.log(objA === objA); // true

// 不等価演算子 暗黙的な型変換が行われた後に比較される
console.log("--不等価演算子 値同士の比較-------------------------------------------------------------");
console.log(1   != 1);    // false
console.log(1   != '1');  // false
console.log("1" != '1');  // false

// 厳密不等価演算子 値同士の比較
console.log("--厳密不等価演算子 値同士の比較----------------------------------------------------------");
console.log(1   !== 1);   // false
console.log(1   !== '1'); // true
console.log("1" !== '1'); // false

// ビット演算子
console.log("--数値(9)の表現-----------------------------------------------------------------------");
const nine = 0b00000000000000000000000000001001;
const nine_b = (nine).toString(2);
const nine_o = (nine).toString(8);
const nine_h = (nine).toString(16);
console.log(nine);    // 9
console.log(nine_b);  // 1001
console.log(nine_o);  // 11
console.log(nine_h);  // 9

console.log("--数値(-9)の表現----------------------------------------------------------------------");
// ビックエンディアンの2の補数形式で表現
const m_nine = 0b11111111111111111111111111110111;
const m_nine_b = (m_nine >>> 0).toString(2);
const m_nine_o = (m_nine >>> 0).toString(8);
const m_nine_h = (m_nine >>> 0).toString(16);
console.log(m_nine);    // 4294967287
console.log(m_nine_b);  // 11111111111111111111111111110111
console.log(m_nine_o);  // 37777777767
console.log(m_nine_h);  // fffffff7

console.log("--数値(15)の表現----------------------------------------------------------------------");
const fifteen = 0b00000000000000000000000000001111;
const fifteen_b = (fifteen).toString(2);
const fifteen_o = (fifteen).toString(8);
const fifteen_h = (fifteen).toString(16);
console.log(fifteen);   // 15
console.log(fifteen_b); // 1111
console.log(fifteen_o); // 17
console.log(fifteen_h); // f

console.log("--ビット論理積(&)----------------------------------------------------------------------");
console.log(fifteen & nine);    // 9
console.log(0b1111  & 0b1001);  // 9(ob1001)

console.log("--ビット論理和(|)----------------------------------------------------------------------");
console.log(fifteen | nine);    // 15
console.log(0b1111  | 0b1001);  // 15(0b1111)

console.log("--ビット排他的論理和(^)-----------------------------------------------------------------");
console.log(fifteen ^ nine);    // 6
console.log(0b1111  ^ 0b1001);  // 6(0b0110)

console.log("--ビット排他的論理和(^)-----------------------------------------------------------------");
console.log(fifteen ^ nine);    // 6
console.log(0b1111  ^ 0b1001);  // 6(0b0110)
