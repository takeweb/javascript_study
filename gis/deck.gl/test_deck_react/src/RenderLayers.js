import { TileLayer, BitmapLayer, GeoJsonLayer } from "deck.gl";

export function renderLayers(props) {
  const { pointData } = props;

  // pointデータの読み込みが終わるまで処理をスルー
  if (!pointData) return;

  // 属性値のラベルから必要なキャラクターセットを取得する
  const tmp = pointData.features
    .map((d) => Array.from(d.properties.label)) // ラベル文字列を収集
    .flat();

  // 重複を削除
  const charaSet = Array.from(new Set(tmp));

  // ポイントデータをサークル+テキストとして出力
  const point = new GeoJsonLayer({
    id: "point",
    data: pointData,
    stroked: true,
    filled: true,
    pointType: "circle+text", // circle, text, iconを設定可能、+接続詞で複数のタイプも同時選択できる
    // circleの設定
    getPointRadius: 30, // circleの半径
    getFillColor: [255, 0, 0, 180],
    getLineColor: [0, 255, 0, 255],
    lineWidthMinPixels: 2,
    // テキストラベル設定
    getText: (d) => d.properties.label, // 属性値のlabelの値をテキストラベルとして表示する
    getTextPixelOffset: [0, -20], // テキストラベルの相対的な位置
    getTextColor: [180, 0, 0],
    textFontWeight: "bold",
    textSizeScale: 0.6,
    textCharacterSet: charaSet // 生成したキャラクターセットをdeck.glに渡す
  });

  // ポイントデータをiconとして出力
  const icon = new GeoJsonLayer({
    id: "icon",
    data: "./data/icon.geojson",
    stroked: true,
    filled: true,
    pointType: "icon",
    // iconの設定
    getIcon: () => {
      return {
        url: "./img/marker.png",
        x: 0, // 画像読み込みのX軸オフセット
        y: 0, // 画像読み込みのY軸オフセット
        anchorY: 512, // Y軸の表示位置（通常画像の縦幅に合わせる）
        width: 512, // アイコン画像の横幅
        height: 512, // アイコン画像の縦幅
        mask: true // tureにするとアイコン画像の色の上塗りなどが可能になる
      };
    },
    iconSizeScale: 60,
    getIconColor: [255, 124, 0] // オレンジ色
  });

  // ラインデータを出力
  const line = new GeoJsonLayer({
    id: "line",
    data: "./data/line.geojson",
    stroked: true,
    filled: true,
    getLineColor: [0, 0, 255, 255],
    lineWidthMinPixels: 4
  });

  // ポリゴンデータを出力
  const polygon = new GeoJsonLayer({
    id: "polygon",
    data: "./data/polygon.geojson",
    stroked: true,
    filled: true,
    getFillColor: [0, 160, 0, 180],
    getLineColor: [0, 0, 255, 255],
    lineWidthMinPixels: 2
  });

  // ポリゴンデータを出力
  const polygon3D = new GeoJsonLayer({
    id: "polygon3D",
    data: "./data/3d-polygon.geojson",
    stroked: true,
    filled: true,
    extruded: true, //  3d表示を有効にする
    wireframe: true, // アウトラインを表示する
    getFillColor: [0, 160, 255, 180],
    getLineColor: [255, 0, 0, 255],
    getElevation: (d, { index }) => {
      const i = index + 1; // indexを1からスタートさせる
      return 500 * i; // 500m * indexを高さに指定
    }
  });

  // OSMタイルを読み込みベースマップとして表示
  const tileLayer = new TileLayer({
    data: "https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png",

    minZoom: 0,
    maxZoom: 19,
    tileSize: 256,

    renderSubLayers: (props) => {
      const {
        bbox: { west, south, east, north }
      } = props.tile;

      return new BitmapLayer(props, {
        data: null,
        image: props.data,
        bounds: [west, south, east, north]
      });
    }
  });

  // 配列の順でレイヤーの重なり順が変わります。
  return [tileLayer, line, point, icon, polygon, polygon3D];
}
