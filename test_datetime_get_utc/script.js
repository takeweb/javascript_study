const datetime = new Date();

document.querySelector("#result1").textContent = datetime;
document.querySelector("#result2").textContent = datetime.getUTCFullYear() + document.querySelector("#result2").textContent;
document.querySelector("#result3").textContent = datetime.getUTCMonth() + 1 + document.querySelector("#result3").textContent;
document.querySelector("#result4").textContent = datetime.getUTCDate() + document.querySelector("#result4").textContent;
document.querySelector("#result5").textContent = datetime.getUTCDay() + document.querySelector("#result5").textContent;
document.querySelector("#result6").textContent = datetime.getUTCHours() + document.querySelector("#result6").textContent;
document.querySelector("#result7").textContent = datetime.getUTCMinutes() + document.querySelector("#result7").textContent;
document.querySelector("#result8").textContent = datetime.getUTCSeconds() + document.querySelector("#result8").textContent;
document.querySelector("#result9").textContent = datetime.getUTCMilliseconds() + document.querySelector("#result9").textContent;
document.querySelector("#result10").textContent = datetime.getUTCTime() + document.querySelector("#result10").textContent;
document.querySelector("#result11").textContent = datetime.getUTCTimezoneOffset() + document.querySelector("#result11").textContent;

