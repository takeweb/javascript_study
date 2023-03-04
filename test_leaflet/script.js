// 地図インスタンスの初期化
const map = L.map('map', {
    center: [36.5, 137.1],
    zoom: 5,
});

// 背景レイヤーインスタンスを初期化
const backgroundLayer = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
);

// 地図インスタンスへ背景レイヤーを追加
map.addLayer(backgroundLayer);

// ピン定義
const marker = L.marker([33, 129.5]);
marker.bindPopup('平面直角座標1系原点');
map.addLayer(marker);

L.marker([33, 131.0]).bindPopup('平面直角座標2系原点').addTo(map);
L.marker([36, 132.1666666]).bindPopup('平面直角座標3系原点').addTo(map);
L.marker([33, 133.5]).bindPopup('平面直角座標4系原点').addTo(map);
L.marker([36, 134.3333333]).bindPopup('平面直角座標5系原点').addTo(map);
L.marker([36, 136.0]).bindPopup('平面直角座標6系原点').addTo(map);
L.marker([36, 137.1666666]).bindPopup('平面直角座標7系原点').addTo(map);
L.marker([36, 138.5]).bindPopup('平面直角座標8系原点').addTo(map);
L.marker([36, 139.8333333]).bindPopup('平面直角座標9系原点').addTo(map);
L.marker([40, 140.8333333]).bindPopup('平面直角座標10系原点').addTo(map);
L.marker([44, 140.25]).bindPopup('平面直角座標11系原点').addTo(map);
L.marker([44, 142.25]).bindPopup('平面直角座標12系原点').addTo(map);
L.marker([44, 144.25]).bindPopup('平面直角座標13系原点').addTo(map);
L.marker([26, 142.0]).bindPopup('平面直角座標14系原点').addTo(map);
L.marker([26, 127.5]).bindPopup('平面直角座標15系原点').addTo(map);
L.marker([26, 124.0]).bindPopup('平面直角座標16系原点').addTo(map);
L.marker([26, 131.0]).bindPopup('平面直角座標17系原点').addTo(map);
L.marker([20, 136.0]).bindPopup('平面直角座標18系原点').addTo(map);
L.marker([26, 154.0]).bindPopup('平面直角座標19系原点').addTo(map);
