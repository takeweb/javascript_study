function arrayWalker(data, callback) {
    for (let [key, value] of data.entries()) {
        callback(key, value);
    }
}
let result = 0;

let list = [1, 2, 4, 8, 16];
arrayWalker(list, (key, value) => console.log(`${key}: ${value}`));
arrayWalker(list, (key, value) =>  {
    result += value;
});

console.log(result);
