/**
 * 乱数を発生させる
 * 種類: 静的メソッド
 * Math.random():  0から1まで乱数を発生する
 *
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function generateRandomNumber(max, min = 0) {
  const ran = Math.round(Math.random() * max) + min;
  return ran;
}

console.log(`乱数(0〜255): ${generateRandomNumber(255)}`);
console.log(`乱数(1〜10): ${generateRandomNumber(10, 1)}`);

export {};
