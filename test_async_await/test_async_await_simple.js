async function doAsync() {
    return new Promise((resolve) => setTimeout(() => {
        return resolve('Hello');
    }, 3000));
}

async function main() {
    console.log("START!!");
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // promise が解決するまで待ちます (*)

    let result2 = await doAsync();

    console.log(result); // "done!"

    console.log("中間地点！");

    console.log(result2);

    console.log("E N D!!");
}

main();