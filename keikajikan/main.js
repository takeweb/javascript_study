let intervalId;
let paused = false;

function getKeikaTime() {
  // スクリプトの開始時刻を記録
  const oldTime = Date.now();

  intervalId = setInterval(() => {
    if (paused) {
      return;
    }

    const currentTime = Date.now();

    // 経過したミリ秒を取得
    const diff = currentTime - oldTime;

    // 秒に変換
    const sec = Math.floor(diff / 1000);

    // HTMLに文字列を挿入
    document.querySelector('#log').innerHTML = `${sec}秒が経過`;
  }, 1000);
}

function stop() {
  clearInterval(intervalId);
}

function pause() {
  paused = true;
}

function resume(){
  paused = false;
}
