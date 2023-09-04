function sum(arr, f) {
    if (typeof f != 'function') {
        f = x => x;
    }
    return arr.reduce((a, x) => a+=f(x), 0);
}

function newSummer(f) {
    return arr => sum(arr, f);
}

const sumOfSquares = newSummer(x => Math.pow(x, 2));
const sumOfCubes = newSummer(x => Math.pow(x, 3));

console.log(sumOfSquares([1, 2, 3]));
console.log(sumOfCubes([1, 2, 3]));
