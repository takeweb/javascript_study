function fetchUserInfo(userId) {
    fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
        .then(response => {
            if (response.ok) {
                return response.json().then(userInfo => {
                    console.log(userInfo);
                });
            } else {
                console.error("レスポンスエラー", response);
            }
        }).catch(error => {
            console.error(error);
        });
}