import { Deck, COORDINATE_SYSTEM, OrthographicView } from "@deck.gl/core/typed";
import { GeoJsonLayer, ScatterplotLayer } from "@deck.gl/layers/typed";

// 初期カメラ設定
const INITIAL_VIEW_STATE = {
  target: [10, 9000, 8000],
  zoom: -5,
  minZoom: -10,
  maxZoom: 10,
};

// 平行投影設定
const orthographicView = new OrthographicView({
  flipY: false,
});

function renderLayers() {
  // 図面データを出力
  const drawing = new GeoJsonLayer({
    id: "drawing",
    coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
    target: [0, 0, 0],
    data: "./data/W5F.geojson",
    // lineWidthScale: -20,
    // stroked: true,
    // filled: false,
    // getFillColor: [0, 160, 0, 180],
    getLineColor: [0, 0, 255, 255],
    lineWidthMinPixels: 1,
    // pickable: true,
  });

  // グリッドデータを出力
  // const areas = new GeoJsonLayer({
  //   id: "areas",
  //   coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
  //   target: [0, 0, 0],
  //   data: "./data/areas.json",
  //   stroked: true,
  //   filled: true,
  //   getFillColor: [0, 160, 0, 180],
  //   getLineColor: [0, 0, 255, 255],
  //   lineWidthMinPixels: 2,
  //   pickable: true,
  //   onClick: (item) => {
  //     console.log(item.object.properties.area_no);
  //   },
  // });

  // 配列の順でレイヤーの重なり順が変わる(下→中→上)
  // return [drawing, grids];
  return [drawing];
}

const app = document.querySelector("#app");

// Deck.glインスタンス生成
const deckgl = new Deck({
  parent: app,
  views: orthographicView,
  coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
  coordinateOrigin: [0, 0, 0],
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  layers: renderLayers(),
});
