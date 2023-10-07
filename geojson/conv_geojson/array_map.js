const coordinates = [
  [27457.000000002921297, 19706.999999448871677],
  [30720.000000000778527, 19706.999999448871677],
];

const result = coordinates.map((subArray) => {
  return subArray.map((value) => {
    return value / 1000;
  });
});

console.log(result);
