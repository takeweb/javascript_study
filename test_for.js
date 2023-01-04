const array = [1, 2, 3];
for (const val of array) {
  console.log(val);
}

for (const idx in array) {
  console.log(array[idx]);
}

array.forEach(v => {
  console.log(v);
});

const str = "吉野家";
for (const s of str) {
  console.log(s);
}