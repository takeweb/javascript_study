function arrayWalker(data, callback) {
    for (let [key, value] of data.entries()) {
        callback(key, value);
        sumElement(value);
    }
}

function showElement(key, value) {
    console.log(`${key}: ${value}`);
}

let result = 0;
function sumElement(value) {
    result += value;
}

let list = [1, 2, 4, 8, 16];
arrayWalker(list, showElement);
console.log(result);