import { Deck, COORDINATE_SYSTEM, OrthographicView } from '@deck.gl/core/typed';
import { renderLayers } from "./RenderLayers";

// 初期カメラ設定
const INITIAL_VIEW_STATE = {
  target: [1160, 600, 0],
  zoom: 0,
  minZoom: -2,
  maxZoom: 40
};

// 平行投影設定
const orthographicView = new OrthographicView({
  flipY: true,
});

// Deck.glインスタンス生成
const deckgl = new Deck({
  views: orthographicView,
  coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
  coordinateOrigin: [0, 0, 0],
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  layers: renderLayers()
});
