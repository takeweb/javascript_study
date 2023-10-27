/**
 * 文字列前後の空白を除去
 * 種類: インスタンスメソッド
 * 分類: 非破壊
 * String.prototype.trim: 文字列前後の空白を除去
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 */
let str = "\n　\tWings プロジェクトは、執筆コミュニティです。     ";

console.log(`元の文字列: ${str}`); // \n　\tWings プロジェクトは、執筆コミュニティです。
console.log(`trim: ${str.trim()}`); // Wings プロジェクトは、執筆コミュニティです。
console.log(`元の文字列: ${str}`); //  \n　\tWings プロジェクトは、執筆コミュニティです。

export {};
