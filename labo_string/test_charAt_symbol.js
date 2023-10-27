/**
 * String.prototype.charCodeAt(記号編)
 * 説明: 指定された位置にある UTF-16 コード単位を表す 0 から 65535 までの整数を返します。
 * 種類: インスタンスメソッド
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 */
const symbols1 = "!\"#$%&'()*+,-./";
const symbols2 = ":;<=>?@";
const symbols3 = "[\\]^_`";
const symbols4 = "{|}~";

// 「!」〜「/」の文字コード: 0021〜002F
console.log(`${symbols1.charAt(0)}の文字コード: ${symbols1.charCodeAt(0).toString(16).padStart(4, "0")}`); // 0021
console.log(`${symbols1.charAt(1)}の文字コード: ${symbols1.charCodeAt(1).toString(16).padStart(4, "0")}`); // 0022
console.log(`${symbols1.charAt(2)}の文字コード: ${symbols1.charCodeAt(2).toString(16).padStart(4, "0")}`); // 0023
console.log(`${symbols1.charAt(3)}の文字コード: ${symbols1.charCodeAt(3).toString(16).padStart(4, "0")}`); // 0024
console.log(`${symbols1.charAt(4)}の文字コード: ${symbols1.charCodeAt(4).toString(16).padStart(4, "0")}`); // 0025
console.log(`${symbols1.charAt(5)}の文字コード: ${symbols1.charCodeAt(5).toString(16).padStart(4, "0")}`); // 0026
console.log(`${symbols1.charAt(6)}の文字コード: ${symbols1.charCodeAt(6).toString(16).padStart(4, "0")}`); // 0027
console.log(`${symbols1.charAt(7)}の文字コード: ${symbols1.charCodeAt(7).toString(16).padStart(4, "0")}`); // 0028
console.log(`${symbols1.charAt(8)}の文字コード: ${symbols1.charCodeAt(8).toString(16).padStart(4, "0")}`); // 0029
console.log(`${symbols1.charAt(9)}の文字コード: ${symbols1.charCodeAt(9).toString(16).padStart(4, "0").toUpperCase()}`); // 002A
console.log(`${symbols1.charAt(10)}の文字コード: ${symbols1.charCodeAt(10).toString(16).padStart(4, "0").toUpperCase()}`); // 002B
console.log(`${symbols1.charAt(11)}の文字コード: ${symbols1.charCodeAt(11).toString(16).padStart(4, "0").toUpperCase()}`); // 002C
console.log(`${symbols1.charAt(12)}の文字コード: ${symbols1.charCodeAt(12).toString(16).padStart(4, "0").toUpperCase()}`); // 002D
console.log(`${symbols1.charAt(13)}の文字コード: ${symbols1.charCodeAt(13).toString(16).padStart(4, "0").toUpperCase()}`); // 002E
console.log(`${symbols1.charAt(14)}の文字コード: ${symbols1.charCodeAt(14).toString(16).padStart(4, "0").toUpperCase()}`); // 002F

// 「0」〜「9」の文字コード: 0030〜0039

// 「:」〜「@」の文字コード: 003A〜0040
console.log(`${symbols2.charAt(0)}の文字コード: ${symbols2.charCodeAt(0).toString(16).padStart(4, "0").toUpperCase()}`); // 003A
console.log(`${symbols2.charAt(1)}の文字コード: ${symbols2.charCodeAt(1).toString(16).padStart(4, "0").toUpperCase()}`); // 003B
console.log(`${symbols2.charAt(2)}の文字コード: ${symbols2.charCodeAt(2).toString(16).padStart(4, "0").toUpperCase()}`); // 003C
console.log(`${symbols2.charAt(3)}の文字コード: ${symbols2.charCodeAt(3).toString(16).padStart(4, "0").toUpperCase()}`); // 003D
console.log(`${symbols2.charAt(4)}の文字コード: ${symbols2.charCodeAt(4).toString(16).padStart(4, "0").toUpperCase()}`); // 003E
console.log(`${symbols2.charAt(5)}の文字コード: ${symbols2.charCodeAt(5).toString(16).padStart(4, "0").toUpperCase()}`); // 003F
console.log(`${symbols2.charAt(6)}の文字コード: ${symbols2.charCodeAt(6).toString(16).padStart(4, "0")}`); // 0040

// 「A」〜「Z」の文字コード: 0041〜005A

// 「[」〜「`」の文字コード: 005B〜0060
console.log(`${symbols3.charAt(0)}の文字コード: ${symbols3.charCodeAt(0).toString(16).padStart(4, "0").toUpperCase()}`); // 005B
console.log(`${symbols3.charAt(1)}の文字コード: ${symbols3.charCodeAt(1).toString(16).padStart(4, "0").toUpperCase()}`); // 005C
console.log(`${symbols3.charAt(2)}の文字コード: ${symbols3.charCodeAt(2).toString(16).padStart(4, "0").toUpperCase()}`); // 005D
console.log(`${symbols3.charAt(3)}の文字コード: ${symbols3.charCodeAt(3).toString(16).padStart(4, "0").toUpperCase()}`); // 005E
console.log(`${symbols3.charAt(4)}の文字コード: ${symbols3.charCodeAt(4).toString(16).padStart(4, "0").toUpperCase()}`); // 005F
console.log(`${symbols3.charAt(5)}の文字コード: ${symbols3.charCodeAt(5).toString(16).padStart(4, "0").toUpperCase()}`); // 0060

// 「a」〜「z」の文字コード: 0061〜007A

// 「{」〜「~」の文字コード: 007B〜007E
console.log(`${symbols4.charAt(0)}の文字コード: ${symbols4.charCodeAt(0).toString(16).padStart(4, "0").toUpperCase()}`); // 007B
console.log(`${symbols4.charAt(1)}の文字コード: ${symbols4.charCodeAt(1).toString(16).padStart(4, "0").toUpperCase()}`); // 007C
console.log(`${symbols4.charAt(2)}の文字コード: ${symbols4.charCodeAt(2).toString(16).padStart(4, "0").toUpperCase()}`); // 007D
console.log(`${symbols4.charAt(3)}の文字コード: ${symbols4.charCodeAt(3).toString(16).padStart(4, "0").toUpperCase()}`); // 007E

export {};
