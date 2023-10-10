const map = new Map();
console.log(`初期化しただけでは、サイズはゼロ: ${map.size}`);
map.set("key1", "value1");
map.set("key2", "value2");

// キーだけ取得(keys編)
const keys = [];
for (const key of map.keys()) {
  keys.push(key);
}
console.log(`キーだけ取得(keys編): ${keys}`);

// 値だけ取得(values編)
const values = [];
for (const value of map.values()) {
  values.push(value);
}
console.log(`値だけ取得(values編): ${values}`);

// キーと値を取得(forEach編)
const result = [];
map.forEach((value, key) => {
  result.push(`${key}: ${value}`);
});
console.log(`キーと値を取得(forEach編): ${result}`);

// キーと値を取得(entries編)
const entries = [];
for (const [key, value] of map.entries()) {
  entries.push(`${key}: ${value}`);
}
console.log(`キーと値を取得(entries編): ${entries}`);

// キーと値を取得(of編)
const entries2 = [];
for (const [key, value] of map) {
  entries2.push(`${key}: ${value}`);
}
console.log(`キーと値を取得(of編): ${entries2}`);
