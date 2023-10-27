/**
 * 引数の規定値構文
 * 台数の面積を求める例
 */
function getTrapezoidArea(upper = 1, lower = 1, height = 1) {
  return ((upper + lower) * height) / 2;
}

console.log(getTrapezoidArea(10, 5, 3));
console.log(getTrapezoidArea(10, 5));
console.log(getTrapezoidArea(10));
console.log(getTrapezoidArea());
