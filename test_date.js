function formatDate(date) {
  const yyyy = String(date.getFullYear());
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}/${mm}/${dd}`;
}

function formatDateTime(date) {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${year}/${month}/${day} ${hh}:${mm}:${ss}`;
}

function formatDateJp(date) {
  const date1 = date.toLocaleDateString();
  const week = date.getDay();
  const dayList = [ '日', '月', '火', '水', '木', '金', '土'];
  return `${date1} (${dayList[week]})`;
}

function formatDateTimeJp(date) {
  const date1 = date.toLocaleDateString();
  const time = date.toLocaleTimeString();
  const week = date.getDay();
  const dayList = [ '日', '月', '火', '水', '木', '金', '土'];
  return `${date1} (${dayList[week]}) ${time}`;
}

function formatDateJpNew(date) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  }
  const datetime = date.toLocaleDateString('ja-JP-u-ca-japanese', options);
  return datetime;
}

function formatDateTimeJpNew(date) {
  const options1 = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  }
  const options2 = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  const date1 = date.toLocaleDateString('ja-JP-u-ca-japanese', options1);
  const time = date.toLocaleTimeString('ja-JP', options2);
  return `${date1} ${time}`;
}

function formatDateTimeJpNew2(date) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  const datetime = date.toLocaleString('ja-JP-u-ca-japanese', options);
  return datetime;
}

const date = new Date();
console.log(formatDate(date));
console.log(formatDateTime(date));

console.log(formatDateJp(date));
console.log(formatDateTimeJp(date));

console.log(formatDateJpNew(date));
console.log(formatDateTimeJpNew(date));
console.log(formatDateTimeJpNew2(date));
