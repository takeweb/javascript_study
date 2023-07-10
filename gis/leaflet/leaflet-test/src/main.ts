import L, { latLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';

L.Icon.Default.imagePath = 'img/icon/';

// MIERUNE MONO
const m_mono = L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
});

// OpenStreetMap
const osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 0,
    maxZoom: 25,
    maxNativeZoom: 19
});

// 地図のオプション
let mapOptions = {
    center: latLng(35.681, 139.767), //　センター座標
    zoom: 11,                   // デフォルトズームレベル
    zoomControl: true,          // ズームコントロール有無
    layers: [m_mono], // レイヤー追加
    crs: L.CRS.EPSG3857,// CRSを設定
};

// 地図初期化
const map = L.map('map', mapOptions);

// クリックイベント
map.on('click', function(e) {
    //クリック位置経緯度取得
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    // 経緯度表示
    alert("lat: " + lat + ", lng: " + lng);
} );

L.control.scale({
    imperial: false,
    maxWidth: 300
}).addTo(map);

// 背景レイヤーコントロール
const baseLayerControls = {
    'MIERUNE MONO': m_mono,
    'OpenStreetMap': osmLayer,
};

L.control.layers(baseLayerControls).addTo(map);


// // クリップボードへコピー（コピーの処理）
// function copyToClipboard (tagValue) {
//     if (navigator.clipboard) {
//       return navigator.clipboard.writeText(tagValue).then(function () {
//         messageActive()
//       })
//     } else {
//       tagText.select()
//       navigator.clipboard.writeText('')
//       document.execCommand('copy')
//       messageActive()
//     }
//   }