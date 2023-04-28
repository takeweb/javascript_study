resolveFn()
    .then(value => {
        console.log(value);
    });

resolveFn2()
    .then(value => {
        console.log(value);
    })

rejectFn()
    .catch(error => {
        console.log(error.message);
    });

exceptionFn()
    .catch(error => {
        console.log(error.message);
    })

// 値を返すasync関数
async function resolveFn() {
    return '成功!!';
}

// 値を返すasync関数
async function resolveFn2() {
    return Promise.resolve('成功(2)!!');
}

// 異常を返すasync関数
async function rejectFn() {
    return Promise.reject(new Error('エラー発生'));
}

// 例外を返すasync関数
async function exceptionFn() {
    throw new Error('例外発生');
}
