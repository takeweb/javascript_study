/**
 * Map
 */

const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");

// for..inだと何も出力されない
for (const value in map) {
  console.log(`value: ${value}`);
}

// for..ofだとkeyもvalueも両方出力されてしまう
for (const value of map) {
  console.log(`value: ${value}`);
}

const map2 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

//
map2.forEach((v) => {
  console.log(v);
});
