// result
// 1 ・・・１つめのPromise
// 3 ・・・２つめのPromise
// 2 ・・・１つめのPromise
// 9 ・・・２つめのPromise
// 36 ・・・２つめのPromise
// undefined

Promise.resolve()
    .then(() => {
        console.log(1);
    })
    .then(() => {
        console.log(2);
    });

Promise.resolve(3)
    .then(value => {
        console.log(value);
        return (value, value * 3);
    })
    .then(value => {
        console.log(value);
        return value * 4;
    })
    .then((value) => {
        console.log(value);
    })
    .then(value => {
        console.log(value);
    })