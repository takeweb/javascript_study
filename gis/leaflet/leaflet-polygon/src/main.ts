import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';

let image = {
    url:    'img/rect_green.svg',
    width:  4096,
    height: 2048,
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

//クリックイベント
map.on('click', function(e) {
    //クリック位置経緯度取得
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    //経緯度表示
    alert("lat: " + lat + ", lng: " + lng);
} );

L.control.scale({
    imperial: false,
    maxWidth: 300
}).addTo(map);

drawGrid(map);

function drawGrid(map) {
    L.polyline(
        [
            [0, 0], [0, 10], [-10, 10], [-10, 0], [0, 0],
            [0, 10], [0, 20], [-10, 20], [-10, 10], [0, 10],
            [0, 20], [0, 30], [-10, 30], [-10, 20], [0, 20],
            [0, 30], [0, 40], [-10, 40], [-10, 30], [0, 30],
            [0, 40], [0, 50], [-10, 50], [-10, 40], [0, 40],
            [0, 50], [0, 60], [-10, 60], [-10, 50], [0, 50],
        ],
        {
            color: '#ff00db',
            weight: 3
        }
    ).addTo(map);

    L.polyline(
        [
            [-10, 0], [-10, 10], [-20, 10], [-20, 0], [-10, 0],
            [-10, 10], [-10, 20], [-20, 20], [-20, 10], [-10, 10],
            [-10, 20], [-10, 30], [-20, 30], [-20, 20], [-10, 20],
            [-10, 30], [-10, 40], [-20, 40], [-20, 30], [-10, 30],
            [-10, 40], [-10, 50], [-20, 50], [-20, 40], [-10, 40],
            [-10, 50], [-10, 60], [-20, 60], [-20, 50], [-10, 50],
        ],
        {
            color: 'yellow',
            weight: 3
        }
    ).addTo(map);
}