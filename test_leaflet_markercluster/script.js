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

// GeoJSONレイヤーを作成
fetch('./P29-21.geojson')
    .then((res) => res.json())
    .then((json) => {
        // クラスタリングレイヤーを作成、地図に追加
        const markers = L.markerClusterGroup()
            .bindPopup((layer) => layer.feature.properties.P29_004)
            .addTo(map);
        L.geoJSON(json).addTo(markers);
    });
