setInterval(() => {
  showAlalogClock();
}, 50);


function showAlalogClock() {
  // 現在時刻を取得
  const now = new Date();

  // 時刻の数値をそれぞれ取得
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // 針の角度に反映する
  // 長針(長針は時間だけでなく、分も角度に考慮する)
  const degH = h * (360 / 12) + m * (360 / 12/ 60);

  // 短針
  const degM = m * (360 / 60);

  // 秒針
  const degS = s * (360 / 60);

  const elementH = document.querySelector('.line-hour');
  const elementM = document.querySelector('.line-min');
  const elementS = document.querySelector('.line-sec');

  elementH.style.transform = `rotate(${degH}deg)`;
  elementM.style.transform = `rotate(${degM}deg)`;
  elementS.style.transform = `rotate(${degS}deg)`;

  const degital = now.toLocaleString();
  const elementD = document.querySelector('.degital');
  elementD.innerHTML = degital;
}
