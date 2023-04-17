function asyncProcess(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 引数が未定義
            if (value) {
                resolve(`入力値：${value}`);
            } else {
                reject('入力値は空です。');
            }
        }, 500)
    });
}

// [送信]ボタンクリック時に、入力値を送信
let btn = document.querySelector("#btn");
btn.addEventListener('click', function() {
    let val = document.querySelector("#name").value;
    asyncProcess(val)
        .then(response => console.log(response))
        .catch(error => console.log(`エラー：${error}`))
        .finally(() => console.log('処理が終了しました！！'));
}, false);


// asyncProcess('')
//     .then(
//         response => console.log(response),
//         error => console.log(`エラー：${error}`)
//     )
//     .finally(() => console.log('処理が終了しました！！'));