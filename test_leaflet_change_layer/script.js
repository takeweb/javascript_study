// 地図インスタンスの初期化
const map = L.map('map', {
    center: [35.36267808, 138.7307908], // 富士山
    zoom: 14,
});

// 背景レイヤーインスタンスを初期化
const baseLayers = {
    OpenStreetMap: L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
    ),
    国土地理院: L.tileLayer(
        'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
        {
            maxZoom: 18,
            attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html">国土地理院タイル</a>',
        },
    ),
    国土地理院_空中写真: L.tileLayer(
        'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
        {
            maxZoom: 17,
            attribution: '<a href="http://maps.gsi.go.jp/development/ichiran.html">国土地理院タイル</a>',
        },
    ),
};

// 地図インスタンスへ背景レイヤーを追加
map.addLayer(baseLayers['OpenStreetMap']);

// レイヤ切り替えコントロール
const LayersControl = L.control
    .layers(baseLayers, [], { collapsed: false })
    .addTo(map);
