const datetime = new Date();

document.querySelector('#result1').textContent = datetime.toLocaleString();
document.querySelector('#result2').textContent = datetime.toLocaleDateString();
document.querySelector('#result3').textContent = datetime.toLocaleTimeString();
document.querySelector('#result4').textContent = datetime.toISOString();
document.querySelector('#result5').textContent = datetime.toDateString();
document.querySelector('#result6').textContent = datetime.toJSON();
