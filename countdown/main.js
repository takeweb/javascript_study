// 関数の雛形
function startCountDown(totalTimeSec) {
  const totalTime = totalTimeSec * 1000;
  const oldTime = Date.now();
  let label = `残り${totalTimeSec}秒`;
  document.querySelector('#log').innerHTML = label;

  const timeId = setInterval(() => {
    const currentTime = Date.now();

    // 差を求める
    const diff = currentTime - oldTime;

    // 残りミリ秒を計算する
    const remainMSec = totalTime - diff;

    // ミリ秒を秒数に変換する
    const remainSec = Math.ceil(remainMSec / 1000);

    label = `残り${remainSec}秒`;

    if ( remainMSec <= 0) {
      clearInterval(timeId);
      label = '終了';
    }

    // 画面に表示
    document.querySelector('#log').innerHTML = label;

  }, 1000);
}
