fetch('book.json')
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error('指定リソースが無効です。');
    })
    .then(data => {
        // console.log(data.title);
        // console.log(data.price);
        // console.log(data.publisher);
        document.querySelector("#title").textContent = data.title;
        document.querySelector("#price").textContent = data.price;
        document.querySelector("#publisher").textContent = data.publisher;
    })
    .catch(e => window.alert(`問題発生：${e.message}`));
