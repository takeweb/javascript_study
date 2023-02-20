function formatDateTimeJp(date) {
    const options = {
        // dateStyle: 'medium',    // 日付のスタイル：short / medium / long / full
        // timeStyle: 'medium',    // 時刻のスタイル：short / medium / long / full
        era: 'long',            // 紀元(元号)：narrow / short / long
        year: 'numeric',        // 年：2-digit / numeric
        month: '2-digit',       // 月：2-digit / numeric / narrow / short / long
        day: '2-digit',         // 日：2-digit / numeric
        weekday: 'short',       // 曜日：narrow / short / long
        hour: '2-digit',        // 時：2-digit / numeric
        hour12: 'false',        // 時(12時間制/24時間制)：true / false
        minute: '2-digit',      // 分：2-digit / numeric
        second: '2-digit',      // 秒：2-digit / numeric
        fractionSecondDigits: '2',// 秒の小数点以下の桁数：0 / 1 / 2 / 3
        timeZoneName: 'short'   // タイムゾーン：short / long
    }

    return Intl.DateTimeFormat('ja-JP-u-ca-japanese', options).format(date);
}

const date = new Date();
console.log(formatDateTimeJp(date));

document.querySelector("#result1").textContent = formatDateTimeJp(date);
