/**
 * String.prototype.charCodeAt(アルファベット編)
 * 説明: 指定された位置にある UTF-16 コード単位を表す 0 から 65535 までの整数を返します。
 * 種類: インスタンスメソッド
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 */
const words_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const words_lower = "abcdefghijklmnopqrstuvwxyz";

console.log(`「A」の文字コード: ${words_upper.charCodeAt(0)}`); // 65
console.log(`「B」の文字コード: ${words_upper.charCodeAt(1)}`); // 66
console.log(`「C」の文字コード: ${words_upper.charCodeAt(2)}`); // 67
console.log(`「D」の文字コード: ${words_upper.charCodeAt(3)}`); // 68
console.log(`「E」の文字コード: ${words_upper.charCodeAt(4)}`); // 69
console.log(`「F」の文字コード: ${words_upper.charCodeAt(5)}`); // 70
console.log(`「G」の文字コード: ${words_upper.charCodeAt(6)}`); // 71
console.log(`「H」の文字コード: ${words_upper.charCodeAt(7)}`); // 72
console.log(`「I」の文字コード: ${words_upper.charCodeAt(8)}`); // 73
console.log(`「J」の文字コード: ${words_upper.charCodeAt(9)}`); // 74
console.log(`「K」の文字コード: ${words_upper.charCodeAt(10)}`); // 75
console.log(`「L」の文字コード: ${words_upper.charCodeAt(11)}`); // 76
console.log(`「M」の文字コード: ${words_upper.charCodeAt(12)}`); // 77
console.log(`「N」の文字コード: ${words_upper.charCodeAt(13)}`); // 78
console.log(`「O」の文字コード: ${words_upper.charCodeAt(14)}`); // 79
console.log(`「P」の文字コード: ${words_upper.charCodeAt(15)}`); // 80
console.log(`「Q」の文字コード: ${words_upper.charCodeAt(16)}`); // 81
console.log(`「R」の文字コード: ${words_upper.charCodeAt(17)}`); // 82
console.log(`「S」の文字コード: ${words_upper.charCodeAt(18)}`); // 83
console.log(`「T」の文字コード: ${words_upper.charCodeAt(19)}`); // 84
console.log(`「U」の文字コード: ${words_upper.charCodeAt(20)}`); // 85
console.log(`「V」の文字コード: ${words_upper.charCodeAt(21)}`); // 86
console.log(`「W」の文字コード: ${words_upper.charCodeAt(22)}`); // 87
console.log(`「X」の文字コード: ${words_upper.charCodeAt(23)}`); // 88
console.log(`「Y」の文字コード: ${words_upper.charCodeAt(24)}`); // 89
console.log(`「Z」の文字コード: ${words_upper.charCodeAt(25)}`); // 90

console.log(`「a」の文字コード: ${words_lower.charCodeAt(0)}`); // 97
console.log(`「b」の文字コード: ${words_lower.charCodeAt(1)}`); // 98
console.log(`「c」の文字コード: ${words_lower.charCodeAt(2)}`); // 99
console.log(`「d」の文字コード: ${words_lower.charCodeAt(3)}`); // 100
console.log(`「e」の文字コード: ${words_lower.charCodeAt(4)}`); // 101
console.log(`「f」の文字コード: ${words_lower.charCodeAt(5)}`); // 102
console.log(`「g」の文字コード: ${words_lower.charCodeAt(6)}`); // 103
console.log(`「h」の文字コード: ${words_lower.charCodeAt(7)}`); // 104
console.log(`「i」の文字コード: ${words_lower.charCodeAt(8)}`); // 105
console.log(`「j」の文字コード: ${words_lower.charCodeAt(9)}`); // 106
console.log(`「k」の文字コード: ${words_lower.charCodeAt(10)}`); // 107
console.log(`「l」の文字コード: ${words_lower.charCodeAt(11)}`); // 108
console.log(`「m」の文字コード: ${words_lower.charCodeAt(12)}`); // 109
console.log(`「n」の文字コード: ${words_lower.charCodeAt(13)}`); // 110
console.log(`「o」の文字コード: ${words_lower.charCodeAt(14)}`); // 111
console.log(`「p」の文字コード: ${words_lower.charCodeAt(15)}`); // 112
console.log(`「q」の文字コード: ${words_lower.charCodeAt(16)}`); // 113
console.log(`「r」の文字コード: ${words_lower.charCodeAt(17)}`); // 114
console.log(`「s」の文字コード: ${words_lower.charCodeAt(18)}`); // 115
console.log(`「t」の文字コード: ${words_lower.charCodeAt(19)}`); // 116
console.log(`「u」の文字コード: ${words_lower.charCodeAt(20)}`); // 117
console.log(`「v」の文字コード: ${words_lower.charCodeAt(21)}`); // 118
console.log(`「w」の文字コード: ${words_lower.charCodeAt(22)}`); // 119
console.log(`「x」の文字コード: ${words_lower.charCodeAt(23)}`); // 120
console.log(`「y」の文字コード: ${words_lower.charCodeAt(24)}`); // 121
console.log(`「z」の文字コード: ${words_lower.charCodeAt(25)}`); // 122

export {};
