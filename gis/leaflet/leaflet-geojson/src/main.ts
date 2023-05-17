import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';
import axios from 'axios';

let image = {
    // url: 'img/rect_green.svg',
    url: 'img/map.svg',
    width: 4160,
    height: 2112,
};

let minZoom = -1
let maxZoom = 5;
let maxNativeZoom = 4

// 地図のオプション
let mapOptions = {
    crs: L.CRS.Simple, // シンプルな　XY座標
    minZoom: minZoom,
    maxZoom: maxZoom,
};

// 地図初期化
const map = L.map('map', mapOptions);

let imageBounds = L.latLngBounds([
    map.unproject([0, image.height], maxNativeZoom),
    map.unproject([image.width, 0], maxNativeZoom)
]);

// イメージオーバーレイ追加
map.fitBounds(imageBounds);
map.setMaxBounds(imageBounds.pad(0.5));
L.imageOverlay(image.url, imageBounds).addTo(map);

// マーカー追加
L.marker([0, 0]).bindPopup("原点(0, 0)").addTo(map);
L.marker([0, 32]).bindPopup('0, 10').addTo(map);
L.marker([-16, 16]).bindPopup('-16, 16').addTo(map);
L.marker([-16, 32]).bindPopup('-10, 10').addTo(map);
L.marker([-32, 0]).bindPopup('-32, 0').addTo(map);
L.marker([-32, 32]).bindPopup('-32, 32').addTo(map);
L.marker([-32, 64]).bindPopup('-32, 64').addTo(map);
L.marker([-64, 0]).bindPopup('-64, 0').addTo(map);
L.marker([-64, 64]).bindPopup('-64, 64').addTo(map);
L.marker([-64, 128]).bindPopup('-64, 128').addTo(map);
L.marker([-64, 256]).bindPopup('-64, 256').addTo(map);
L.marker([-150, 100]).bindPopup('-150, 100').addTo(map);
L.marker([-128, 256]).bindPopup('MAX(-128, 256)').addTo(map);

var popup = L.popup();
L.marker([-50, 50]).addTo(map).on('click', function (e) {
    popup
        .setLatLng(e.latlng)
        .setContent("<p>今ココ！！" + e.latlng.toString())
        .openOn(map);
});

// クリックイベント
map.on('click', function (e) {
    //クリック位置経緯度取得
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    //経緯度表示
    alert("lat: " + lat + ", lng: " + lng);
});

L.control.scale({
    imperial: false,
    maxWidth: 300
}).addTo(map);

const path = './data/grid.json';
// const path = './data/rooms.json';
const style = {
    color: '#ff00db',
    weight: 1
};

// JSONファイルからグリッド描画関数呼び出し
await drawGrid(path, style);

// JSONファイルからグリッド描画
async function drawGrid(path: string, style: object) {
    await axios
        .get(path)
        .then((response) => {
            let layer = L.geoJson(response.data, {
                style: style
            });
            layer.addTo(map);
        })
        .catch((error) => console.log(error))
}
