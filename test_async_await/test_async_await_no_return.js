async function doAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('値を返しません。')
            return resolve();
        }, 3000)
    });
}

async function main() {
    console.log('初期処理!!');
    await doAsync();

    // 終わるのを待つはず
    console.log('中間処理!!');

    // 終わるのを待つはず
    console.log('main終了!!');
}

main();
