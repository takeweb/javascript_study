const objArray = { a: 1, b: 2, c: 3 };

for (let obj in objArray) {
    console.log(obj);
}


const array = [3, 8, 4, 2, 1];

for (let val in array) {
    console.log(val);
}

for (let val in array) {
    console.log(array[val]);
}


for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


for (let val of array) {
    console.log(val);
}

array.forEach(val => {
    console.log(val);
});