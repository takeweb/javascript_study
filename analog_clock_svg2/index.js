(function updateClock() {
  let now = new Date();
  let sec = now.getSeconds();
  let min = now.getMinutes() + sec / 60;
  let hour = (now.getHours() % 12) + min / 60;
  let houangle = hour * 30;
  let minangle = min * 6;
  let secangle = sec * 6;

  let hourhand = document.querySelector("#clock .hourhand");
  let minhand = document.querySelector("#clock .minutehand");
  let sechand = document.querySelector("#clock .sechand");

  minhand.setAttribute("transform", `rotate(${minangle}, 50, 50)`);
  hourhand.setAttribute("transform", `rotate(${houangle}, 50, 50)`);
  sechand.setAttribute("transform", `rotate(${secangle}, 50, 50)`);

  setTimeout(updateClock, 1000);
}());