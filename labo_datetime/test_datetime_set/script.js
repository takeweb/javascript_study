const datetime = new Date();

datetime.setFullYear(2022);
datetime.setMonth(2);   // 0〜11で指定
datetime.setDate(15);
datetime.setHours(11);
datetime.setMinutes(37);
datetime.setSeconds(33);
datetime.setMilliseconds(513);

document.querySelector('#result').textContent = datetime.toLocaleString();