// 地図インスタンスの初期化
const map = L.map('map', {
    center: [35.36267808, 138.7307908], // 富士山
    zoom: 14,
});

// 背景レイヤーインスタンスを初期化
const backgroundLayer = L.tileLayer(
    'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
    {
        maxZoom: 17,
        attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html">国土地理院タイル</a>',
    },
);

// 地図インスタンスへ背景レイヤーを追加
map.addLayer(backgroundLayer);

// 円形
L.circle([35.36327808, 138.7307908], {
    color: 'yellow',
    fillColor: '#ff0000',
    radius: 1000,
})
.bindPopup('I am Circle!')
.addTo(map);