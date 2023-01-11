// 現在時刻を表示する関数
function displayTime() {
  let clock = document.querySelector("#clock");
  let now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
displayTime();
setInterval(displayTime, 1000);
