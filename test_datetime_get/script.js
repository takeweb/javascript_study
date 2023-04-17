// const datetime = new Date(2023, 2, 22, 8, 6, 33, 378);
const datetime = new Date();

document.querySelector("#result1").textContent = datetime;
document.querySelector("#result2").textContent = datetime.getFullYear() + document.querySelector("#result2").textContent;
document.querySelector("#result3").textContent = datetime.getMonth() + 1 + document.querySelector("#result3").textContent;
document.querySelector("#result4").textContent = datetime.getDate() + document.querySelector("#result4").textContent;
document.querySelector("#result5").textContent = datetime.getDay() + document.querySelector("#result5").textContent;
document.querySelector("#result6").textContent = datetime.getHours() + document.querySelector("#result6").textContent;
document.querySelector("#result7").textContent = datetime.getMinutes() + document.querySelector("#result7").textContent;
document.querySelector("#result8").textContent = datetime.getSeconds() + document.querySelector("#result8").textContent;
document.querySelector("#result9").textContent = datetime.getMilliseconds() + document.querySelector("#result9").textContent;
document.querySelector("#result10").textContent = datetime.getTime() + document.querySelector("#result10").textContent;
document.querySelector("#result11").textContent = datetime.getTimezoneOffset() + document.querySelector("#result11").textContent;

