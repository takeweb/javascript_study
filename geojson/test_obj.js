const obj = {
  "key-1": "value-1",
  "key-2": "value-2",
  "key-3": "value-3",
};

const resul1 = Object.entries(obj);
console.log(`結果: ${resul1}`);

const result2 = Object.entries(obj).map(([key, value]) => ({ [key]: value }));
console.log(`結果: ${result2}`);
