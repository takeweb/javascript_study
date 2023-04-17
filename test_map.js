const map = new Map();
console.log(map.size);

map.set("key1", "value1");
map.set("key2", "value2");

map.forEach(v => {
  console.log(v);
});

const map2 = new Map([["key1", "value1"], ["key2", "value2"]]);
map2.forEach(v => {
  console.log(v);
})

// キーと値を取得(forEach編)
const result = [];
map2.forEach((value, key) => {
  result.push(`${key}: ${value}`);
})
console.log(result);

// キーだけ取得
const keys = [];
for (const key of map.keys()) {
  keys.push(key);
}
console.log(keys);

// キーと値を取得(entries編)
const entries = [];
for (const [key, value] of map.entries()) {
  entries.push(`${key}: ${value}`);
}
console.log(entries);

// キーと値を取得(of編)
const entries2 = [];
for (const [key, value] of map) {
  entries2.push(`${key}: ${value}`);
}
console.log(entries2);
