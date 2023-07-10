import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';
import * as d3 from "d3";

const image_width = 600;
const image_height = 900;

let image = {
    url:    'img/map.svg',
    width:  image_width,
    height: image_height,
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
map.on('click', function(e) {
    //クリック位置経緯度取得
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    //経緯度表示
    alert("lat: " + lat + ", lng: " + lng);
} );

// Zoomコントロール
L.control.scale({
    imperial: false,
    maxWidth: 300
}).addTo(map);

// SVG描画レイヤー
let svgLayer = d3.select(map.getPanes().overlayPane)
                 .append('svg')
                 .attr('class', 'zones')
                 .attr('width', image_width)
                 .attr('height', image_height);

// loarding geojson
drawpolygon();

function drawpolygon() {
    let transform = d3.geo.transform({point: projectPoint});
    let path = d3.geo.path().projection(transform);
    let featureElement = d3.json("./data/zones.json")
                            .then((json) => {
                                svgLayer.append("g")
                                    .selectAll("grid")
                                    .data(json.features)
                                    .enter()
                                    .append("polygon")
                                    .attr("points", item => item.geometry.coordinates)
                                    .attr("fill", item => item.properties.color)
                                    .attr("class", "room")
                                    .on('click', (event, item) => {
                                        alert("ここは、" + item.properties.room_name + "です。");
                                    })
                            });
    map.on("viewreset", update);
    update();

    function update() {
      featureElement.attr("d", path);
    }

    function projectPoint(x, y) {
      var point = map.latLngToLayerPoint(new L.LatLng(y, x));
      this.stream.point(point.x, point.y);
    }
  }
