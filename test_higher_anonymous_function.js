function arrayWalker(data, callback) {
    for (let [key, value] of data.entries()) {
        callback(key, value);
    }
}

let list = [1, 2, 4, 8, 16];
arrayWalker(list, function (key, value) {
    console.log(`${key}: ${value}`);
});
