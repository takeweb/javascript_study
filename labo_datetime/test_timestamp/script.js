// 2023年11月4日 20時07分15秒368ms
let d1 = new Date(2023, 11, 4, 20, 7, 15, 368);

// Unixタイムスタンプ(1970年1月1日00:00:00.000からの経過ミリ秒)を取得
let d2 = new Date(d1.getTime());
let d3 = d1.getTime();
let d4 = Date.UTC(2023, 11, 4, 20, 7, 15, 368);

// 現在時刻からUnixタイムスタンプを取得
let d5 = Date.now();

console.log(d1);
console.log(d2);

document.querySelector("#result1").textContent = d1;
document.querySelector("#result2").textContent = d2;
document.querySelector("#result3").textContent = d3;
document.querySelector("#result4").textContent = d4;
document.querySelector("#result5").textContent = d5;
