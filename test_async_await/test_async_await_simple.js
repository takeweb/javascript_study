async function doAsync() {
    return new Promise((resolve) => setTimeout(() => {
        // console.log('Hello!');
        return resolve('Hello');
    }, 3000));
}

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // promise が解決するまで待ちます (*)

    let result2 = await doAsync();

    console.log(result); // "done!"
    console.log(result2);
}

f();