/**
 * String.prototype.charCodeAt(アルファベット編)
 * 説明: 指定された位置にある UTF-16 コード単位を表す 0 から 65535 までの整数を返します。
 * 種類: インスタンスメソッド
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 */
const words_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const words_lower = "abcdefghijklmnopqrstuvwxyz";

console.log(`「A」の文字コード: ${words_upper.charCodeAt(0).toString(16)}`); // 65
console.log(`「B」の文字コード: ${words_upper.charCodeAt(1).toString(16)}`); // 66
console.log(`「C」の文字コード: ${words_upper.charCodeAt(2).toString(16)}`); // 67
console.log(`「D」の文字コード: ${words_upper.charCodeAt(3).toString(16)}`); // 68
console.log(`「E」の文字コード: ${words_upper.charCodeAt(4).toString(16)}`); // 69
console.log(`「F」の文字コード: ${words_upper.charCodeAt(5).toString(16)}`); // 70
console.log(`「G」の文字コード: ${words_upper.charCodeAt(6).toString(16)}`); // 71
console.log(`「H」の文字コード: ${words_upper.charCodeAt(7).toString(16)}`); // 72
console.log(`「I」の文字コード: ${words_upper.charCodeAt(8).toString(16)}`); // 73
console.log(`「J」の文字コード: ${words_upper.charCodeAt(9).toString(16)}`); // 74
console.log(`「K」の文字コード: ${words_upper.charCodeAt(10).toString(16)}`); // 75
console.log(`「L」の文字コード: ${words_upper.charCodeAt(11).toString(16)}`); // 76
console.log(`「M」の文字コード: ${words_upper.charCodeAt(12).toString(16)}`); // 77
console.log(`「N」の文字コード: ${words_upper.charCodeAt(13).toString(16)}`); // 78
console.log(`「O」の文字コード: ${words_upper.charCodeAt(14).toString(16)}`); // 79
console.log(`「P」の文字コード: ${words_upper.charCodeAt(15).toString(16)}`); // 80
console.log(`「Q」の文字コード: ${words_upper.charCodeAt(16).toString(16)}`); // 81
console.log(`「R」の文字コード: ${words_upper.charCodeAt(17).toString(16)}`); // 82
console.log(`「S」の文字コード: ${words_upper.charCodeAt(18).toString(16)}`); // 83
console.log(`「T」の文字コード: ${words_upper.charCodeAt(19).toString(16)}`); // 84
console.log(`「U」の文字コード: ${words_upper.charCodeAt(20).toString(16)}`); // 85
console.log(`「V」の文字コード: ${words_upper.charCodeAt(21).toString(16)}`); // 86
console.log(`「W」の文字コード: ${words_upper.charCodeAt(22).toString(16)}`); // 87
console.log(`「X」の文字コード: ${words_upper.charCodeAt(23).toString(16)}`); // 88
console.log(`「Y」の文字コード: ${words_upper.charCodeAt(24).toString(16)}`); // 89
console.log(`「Z」の文字コード: ${words_upper.charCodeAt(25).toString(16)}`); // 90

console.log(`「a」の文字コード: ${words_lower.charCodeAt(0).toString(16)}`); // 97
console.log(`「b」の文字コード: ${words_lower.charCodeAt(1).toString(16)}`); // 98
console.log(`「c」の文字コード: ${words_lower.charCodeAt(2).toString(16)}`); // 99
console.log(`「d」の文字コード: ${words_lower.charCodeAt(3).toString(16)}`); // 100
console.log(`「e」の文字コード: ${words_lower.charCodeAt(4).toString(16)}`); // 101
console.log(`「f」の文字コード: ${words_lower.charCodeAt(5).toString(16)}`); // 102
console.log(`「g」の文字コード: ${words_lower.charCodeAt(6).toString(16)}`); // 103
console.log(`「h」の文字コード: ${words_lower.charCodeAt(7).toString(16)}`); // 104
console.log(`「i」の文字コード: ${words_lower.charCodeAt(8).toString(16)}`); // 105
console.log(`「j」の文字コード: ${words_lower.charCodeAt(9).toString(16)}`); // 106
console.log(`「k」の文字コード: ${words_lower.charCodeAt(10).toString(16)}`); // 107
console.log(`「l」の文字コード: ${words_lower.charCodeAt(11).toString(16)}`); // 108
console.log(`「m」の文字コード: ${words_lower.charCodeAt(12).toString(16)}`); // 109
console.log(`「n」の文字コード: ${words_lower.charCodeAt(13).toString(16)}`); // 110
console.log(`「o」の文字コード: ${words_lower.charCodeAt(14).toString(16)}`); // 111
console.log(`「p」の文字コード: ${words_lower.charCodeAt(15).toString(16)}`); // 112
console.log(`「q」の文字コード: ${words_lower.charCodeAt(16).toString(16)}`); // 113
console.log(`「r」の文字コード: ${words_lower.charCodeAt(17).toString(16)}`); // 114
console.log(`「s」の文字コード: ${words_lower.charCodeAt(18).toString(16)}`); // 115
console.log(`「t」の文字コード: ${words_lower.charCodeAt(19).toString(16)}`); // 116
console.log(`「u」の文字コード: ${words_lower.charCodeAt(20).toString(16)}`); // 117
console.log(`「v」の文字コード: ${words_lower.charCodeAt(21).toString(16)}`); // 118
console.log(`「w」の文字コード: ${words_lower.charCodeAt(22).toString(16)}`); // 119
console.log(`「x」の文字コード: ${words_lower.charCodeAt(23).toString(16)}`); // 120
console.log(`「y」の文字コード: ${words_lower.charCodeAt(24).toString(16)}`); // 121
console.log(`「z」の文字コード: ${words_lower.charCodeAt(25).toString(16)}`); // 122

export {};
