const array = [1, 2, 3];

const doubleArray = array.map(function (value) {
    return value * 2;
});

console.log(doubleArray);

const doubleArray2 = array.map(value => {
    return value * 2;
});

console.log(doubleArray2);

const doubleArray3 = array.map(value => value * 2);
console.log(doubleArray3);