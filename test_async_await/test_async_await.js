main();

async function doAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve('Hello');
        }, 3000)
    });
}

async function main() {
    console.log('初期処理!!');
    const result = await doAsync();

    console.log(result);

    // 終わるのを待つはず
    console.log('中間処理!!');

    // 終わるのを待つはず
    console.log('main終了!!');
}
