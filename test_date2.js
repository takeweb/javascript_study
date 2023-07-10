function formatDateTimeJp(date) {
  const options = {
    era: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }

  const datetime = Intl.DateTimeFormat('ja-JP-u-ca-japanese', options).format(date);
  return datetime;
}

const date = new Date();
console.log(formatDateTimeJp(date));
