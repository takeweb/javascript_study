/*
    カリー化
    関数を返す関数により、
    複数の引数を持つ関数を１つの引数の関数に変換するテクニック
    米国人数学者 Haskel Curryに由来する
*/

function sum(arr, f) {
    if (typeof f != 'function') {
        f = x => x;
    }
    return arr.reduce((a, x) => a+=f(x), 0);
}

function newSummer(f) {
    return arr => sum(arr, f);   // fを使って合計を取る関数を返す
}

// const sumOfSquares = newSummer(x => x*x);
const sumOfSquares = newSummer(x => Math.pow(x, 2));
const sumOfCubes = newSummer(x => Math.pow(x, 3));

console.log(sumOfSquares([1, 2, 3]));   // 1 + 4 + 9 = 14
console.log(sumOfCubes([1, 2, 3]));     // 1 + 8 + 27 = 36