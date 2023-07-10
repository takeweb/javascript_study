import './style.css'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

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

const map = L.map('map', {
    center: [35.681, 139.767],
    zoom: 11,
    zoomControl: true,
    layers: [m_mono],
    crs: L.CRS.EPSG3857,// CRSを設定
});

L.control.scale({
    imperial: false,
    maxWidth: 300
}).addTo(map);


// クリックイベント
map.on('click', function(e) {
  //クリック位置経緯度取得
  const lat = e.latlng.lat;
  const lng = e.latlng.lng;
  // 経緯度表示
  alert("lat: " + lat + ", lng: " + lng);
});

// 背景レイヤーコントロール
const baseLayerControls = {
  'MIERUNE MONO': m_mono,
  'OpenStreetMap': osmLayer,
};

L.control.layers(baseLayerControls).addTo(map);
