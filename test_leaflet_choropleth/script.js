// 地図インスタンスの初期化
const map = L.map('map', {
    center: [35.681388688361075, 139.76719989948563], // 東京駅
    zoom: 12,
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
const layersControl = L.control
    .layers(baseLayers, [], { collapsed: false })
    .addTo(map);

fetch('./A16-15_00_DID.geojson') // 人口集中地区データ
    .then((res) => res.json())
    .then((json) => {
        // GeoJSONレイヤーを作成
        const polygon = L.geoJSON(json, {
            style: (feature) => ({
                color: 'red',
                stroke: false,
                // 人口を面積で割った値でポリゴンの濃さを変える
                fillOpacity:
                    feature.properties['人口'] / feature.properties['面積'] / 20000,
            }),
        })

        // ポップアップで人口を表示
        .bindPopup((layer) => '人口:' + layer.feature.properties['人口'].toLocaleString() + '人',)
        .addTo(map);

    // レイヤー一覧に追加
    layersControl.addOverlay(polygon, '人工集中地区');
});