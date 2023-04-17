function sum(numbers) {
  return numbers.reduce((total, num) => {
    return total + num;
  }, 0);
}

function sum2(total, num) {
  return total + num;
}

const result1 = sum([1, 2, 3, 4, 5]);
const result2 = [1, 2, 3, 4, 5].reduce((total, num) => {
                                return total + num;
                              }, 0);
const result3 = [1, 2, 3, 4, 5].reduce((total, num) => sum2(total, num), 0);

console.log(result1);
console.log(result2);
console.log(result3);