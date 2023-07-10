let result = document.querySelector("#result");

// [送信]ボタンクリック時に、入力値を送信
document.querySelector("#btn").addEventListener('click', function() {
    // クエリ情報の組み立て
    let params = new URLSearchParams();
    params.set('name', document.querySelector("#name").value);

    // クエリ情報を付与して、リクエストを送信
    fetch(`http://localhost:8080/fetch_query.php${params.toString()}`)
        .then(res => res.text())
        .then(text => result.textContent = text);
}, false);
