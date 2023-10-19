/**
 * 乱数を発生させる
 * 0〜maxまで
 */
function generateRandomNumber(max, min = 0) {
  const ran = Math.round(Math.random() * max) + min;
  return ran;
}

console.log(`乱数(0〜255): ${generateRandomNumber(255)}`);
console.log(`乱数(1〜10): ${generateRandomNumber(10, 1)}`);

export {};
