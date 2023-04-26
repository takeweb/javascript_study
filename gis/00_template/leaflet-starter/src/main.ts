import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';

L.Icon.Default.imagePath = 'img/icon/';

const m_mono = L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
});

const map = L.map('map', {
    center: [35.681, 139.767],
    zoom: 11,
    zoomControl: true,
    layers: [m_mono]
});

L.control.scale({
    imperial: false,
    maxWidth: 300
}).addTo(map);

//クリックイベント
map.on('click', function(e) {
    //クリック位置経緯度取得
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    //経緯度表示
    alert("lat: " + lat + ", lng: " + lng);
} );