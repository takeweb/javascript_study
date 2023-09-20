/**
 * Map
 */

const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");

for (const value in map) {
  console.log(`value: ${value}`);
}
