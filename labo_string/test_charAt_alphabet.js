/**
 * String.prototype.charCodeAt(アルファベット編)
 * 説明: 指定された位置にある UTF-16 コード単位を表す 0 から 65535 までの整数を返します。
 * 種類: インスタンスメソッド
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 */
const alphabet_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabet_lower = "abcdefghijklmnopqrstuvwxyz";

// 「A」〜「Z」の文字コード: 0041〜005A
console.log(`「A」の文字コード: ${alphabet_upper.charCodeAt(0).toString(16).padStart(4, "0").toUpperCase()}`); // 0041
console.log(`「B」の文字コード: ${alphabet_upper.charCodeAt(1).toString(16).padStart(4, "0").toUpperCase()}`); // 0042
console.log(`「C」の文字コード: ${alphabet_upper.charCodeAt(2).toString(16).padStart(4, "0").toUpperCase()}`); // 0043
console.log(`「D」の文字コード: ${alphabet_upper.charCodeAt(3).toString(16).padStart(4, "0").toUpperCase()}`); // 0044
console.log(`「E」の文字コード: ${alphabet_upper.charCodeAt(4).toString(16).padStart(4, "0").toUpperCase()}`); // 0045
console.log(`「F」の文字コード: ${alphabet_upper.charCodeAt(5).toString(16).padStart(4, "0").toUpperCase()}`); // 0046
console.log(`「G」の文字コード: ${alphabet_upper.charCodeAt(6).toString(16).padStart(4, "0").toUpperCase()}`); // 0047
console.log(`「H」の文字コード: ${alphabet_upper.charCodeAt(7).toString(16).padStart(4, "0").toUpperCase()}`); // 0048
console.log(`「I」の文字コード: ${alphabet_upper.charCodeAt(8).toString(16).padStart(4, "0").toUpperCase()}`); // 0049
console.log(`「J」の文字コード: ${alphabet_upper.charCodeAt(9).toString(16).padStart(4, "0").toUpperCase()}`); // 004A
console.log(`「K」の文字コード: ${alphabet_upper.charCodeAt(10).toString(16).padStart(4, "0").toUpperCase()}`); // 004B
console.log(`「L」の文字コード: ${alphabet_upper.charCodeAt(11).toString(16).padStart(4, "0").toUpperCase()}`); // 004C
console.log(`「M」の文字コード: ${alphabet_upper.charCodeAt(12).toString(16).padStart(4, "0").toUpperCase()}`); // 004D
console.log(`「N」の文字コード: ${alphabet_upper.charCodeAt(13).toString(16).padStart(4, "0").toUpperCase()}`); // 004E
console.log(`「O」の文字コード: ${alphabet_upper.charCodeAt(14).toString(16).padStart(4, "0").toUpperCase()}`); // 004F
console.log(`「P」の文字コード: ${alphabet_upper.charCodeAt(15).toString(16).padStart(4, "0").toUpperCase()}`); // 0050
console.log(`「Q」の文字コード: ${alphabet_upper.charCodeAt(16).toString(16).padStart(4, "0").toUpperCase()}`); // 0051
console.log(`「R」の文字コード: ${alphabet_upper.charCodeAt(17).toString(16).padStart(4, "0").toUpperCase()}`); // 0052
console.log(`「S」の文字コード: ${alphabet_upper.charCodeAt(18).toString(16).padStart(4, "0").toUpperCase()}`); // 0053
console.log(`「T」の文字コード: ${alphabet_upper.charCodeAt(19).toString(16).padStart(4, "0").toUpperCase()}`); // 0054
console.log(`「U」の文字コード: ${alphabet_upper.charCodeAt(20).toString(16).padStart(4, "0").toUpperCase()}`); // 0055
console.log(`「V」の文字コード: ${alphabet_upper.charCodeAt(21).toString(16).padStart(4, "0").toUpperCase()}`); // 0056
console.log(`「W」の文字コード: ${alphabet_upper.charCodeAt(22).toString(16).padStart(4, "0").toUpperCase()}`); // 0057
console.log(`「X」の文字コード: ${alphabet_upper.charCodeAt(23).toString(16).padStart(4, "0").toUpperCase()}`); // 0058
console.log(`「Y」の文字コード: ${alphabet_upper.charCodeAt(24).toString(16).padStart(4, "0").toUpperCase()}`); // 0059
console.log(`「Z」の文字コード: ${alphabet_upper.charCodeAt(25).toString(16).padStart(4, "0").toUpperCase()}`); // 005A

// 「[」〜「`」の文字コード: 005B〜0060

// 「a」〜「z」の文字コード: 0061〜007A
console.log(`「a」の文字コード: ${alphabet_lower.charCodeAt(0).toString(16).padStart(4, "0").toUpperCase()}`); // 0061
console.log(`「b」の文字コード: ${alphabet_lower.charCodeAt(1).toString(16).padStart(4, "0").toUpperCase()}`); // 0062
console.log(`「c」の文字コード: ${alphabet_lower.charCodeAt(2).toString(16).padStart(4, "0").toUpperCase()}`); // 0063
console.log(`「d」の文字コード: ${alphabet_lower.charCodeAt(3).toString(16).padStart(4, "0").toUpperCase()}`); // 0064
console.log(`「e」の文字コード: ${alphabet_lower.charCodeAt(4).toString(16).padStart(4, "0").toUpperCase()}`); // 0065
console.log(`「f」の文字コード: ${alphabet_lower.charCodeAt(5).toString(16).padStart(4, "0").toUpperCase()}`); // 0066
console.log(`「g」の文字コード: ${alphabet_lower.charCodeAt(6).toString(16).padStart(4, "0").toUpperCase()}`); // 0067
console.log(`「h」の文字コード: ${alphabet_lower.charCodeAt(7).toString(16).padStart(4, "0").toUpperCase()}`); // 0068
console.log(`「i」の文字コード: ${alphabet_lower.charCodeAt(8).toString(16).padStart(4, "0").toUpperCase()}`); // 0069
console.log(`「j」の文字コード: ${alphabet_lower.charCodeAt(9).toString(16).padStart(4, "0").toUpperCase()}`); // 006A
console.log(`「k」の文字コード: ${alphabet_lower.charCodeAt(10).toString(16).padStart(4, "0").toUpperCase()}`); // 006B
console.log(`「l」の文字コード: ${alphabet_lower.charCodeAt(11).toString(16).padStart(4, "0").toUpperCase()}`); // 006C
console.log(`「m」の文字コード: ${alphabet_lower.charCodeAt(12).toString(16).padStart(4, "0").toUpperCase()}`); // 006D
console.log(`「n」の文字コード: ${alphabet_lower.charCodeAt(13).toString(16).padStart(4, "0").toUpperCase()}`); // 006E
console.log(`「o」の文字コード: ${alphabet_lower.charCodeAt(14).toString(16).padStart(4, "0").toUpperCase()}`); // 006F
console.log(`「p」の文字コード: ${alphabet_lower.charCodeAt(15).toString(16).padStart(4, "0").toUpperCase()}`); // 0070
console.log(`「q」の文字コード: ${alphabet_lower.charCodeAt(16).toString(16).padStart(4, "0").toUpperCase()}`); // 0071
console.log(`「r」の文字コード: ${alphabet_lower.charCodeAt(17).toString(16).padStart(4, "0").toUpperCase()}`); // 0072
console.log(`「s」の文字コード: ${alphabet_lower.charCodeAt(18).toString(16).padStart(4, "0").toUpperCase()}`); // 0073
console.log(`「t」の文字コード: ${alphabet_lower.charCodeAt(19).toString(16).padStart(4, "0").toUpperCase()}`); // 0074
console.log(`「u」の文字コード: ${alphabet_lower.charCodeAt(20).toString(16).padStart(4, "0").toUpperCase()}`); // 0075
console.log(`「v」の文字コード: ${alphabet_lower.charCodeAt(21).toString(16).padStart(4, "0").toUpperCase()}`); // 0076
console.log(`「w」の文字コード: ${alphabet_lower.charCodeAt(22).toString(16).padStart(4, "0").toUpperCase()}`); // 0077
console.log(`「x」の文字コード: ${alphabet_lower.charCodeAt(23).toString(16).padStart(4, "0").toUpperCase()}`); // 0078
console.log(`「y」の文字コード: ${alphabet_lower.charCodeAt(24).toString(16).padStart(4, "0").toUpperCase()}`); // 0079
console.log(`「z」の文字コード: ${alphabet_lower.charCodeAt(25).toString(16).padStart(4, "0").toUpperCase()}`); // 007A

export {};
