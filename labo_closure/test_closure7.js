let uniqueInt = () => {
  let counter = 0;
  return function () {
    return counter++;
  };
};

const result = uniqueInt();
console.log(result());
console.log(result());
console.log(result());
