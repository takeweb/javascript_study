import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';

let image = {
    url:    'img/rect_green.svg',
    width:  1024,
    height: 1024,
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
L.marker([0, 0]).bindPopup("原点").addTo(map);
L.marker([0, 32]).bindPopup('0, 10').addTo(map);
L.marker([-16, 16]).bindPopup('-16, 16').addTo(map);
L.marker([-16, 32]).bindPopup('-10, 10').addTo(map);
L.marker([-32, 0]).bindPopup('-32, 0').addTo(map);
L.marker([-32, 32]).bindPopup('-32, 32').addTo(map);
L.marker([-32, 64]).bindPopup('-32, 64').addTo(map);
L.marker([-64, 0]).bindPopup('-64, 0').addTo(map);
L.marker([-64, 64]).bindPopup('-64, 64').addTo(map);
L.marker([-150, 100]).bindPopup('-150, 100').addTo(map);

var popup = L.popup();
L.marker([-50, 50]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("<p>今ココ！！" + e.latlng.toString())
      .openOn(map);
});


let CanvasLayer = L.GridLayer.extend({
    createTile: function(coords){
        var tile = L.DomUtil.create('canvas', 'leaflet-tile');
        var ctx = tile.getContext('2d');
        var size = this.getTileSize()
        tile.width = size.x
        tile.height = size.y

        // calculate projection coordinates of top left tile pixel
        var nwPoint = coords.scaleBy(size)

        // calculate geographic coordinates of top left tile pixel
        var nw = map.unproject(nwPoint, coords.z)

        if (ctx != null) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, size.x, size.y);
            ctx.fillStyle = 'black';
            ctx.fillText('x: ' + coords.x + ', y: ' + coords.y + ', zoom: ' + coords.z, 20, 20);
            ctx.fillText('lat: ' + nw.lat + ', lon: ' + nw.lng, 20, 40);
            ctx.strokeStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(size.x-1, 0);
            ctx.lineTo(size.x-1, size.y-1);
            ctx.lineTo(0, size.y-1);
            ctx.closePath();
            ctx.stroke();
        }
        return tile;
    }
});

new CanvasLayer().addTo(map);

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
