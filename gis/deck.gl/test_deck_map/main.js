import { Deck, COORDINATE_SYSTEM, OrthographicView } from '@deck.gl/core/typed';
import { BitmapLayer, ScatterplotLayer, GeoJsonLayer } from '@deck.gl/layers/typed';
import { readPixelsToArray } from '@luma.gl/core';

const INITIAL_VIEW_STATE = {
  target: [1160, 600, 0],
  zoom: 0,
  minZoom: -2,
  maxZoom: 40
};

const orthographicView = new OrthographicView({
  flipY: true,
})

const circles = new ScatterplotLayer({
  id: "circle1",
  coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
  target: [0, 0, 0],
  data: [
    {
      position: [500, 0],
      color: [255, 0, 0],
      radius: 10
    },
    {
      position: [0, 500],
      color: [255, 255, 0],
      radius: 20
    },
    {
      position: [0, 0],
      color: [255, 128, 128],
      radius: 20
    },
    {
      position: [1800, 0],
      color: [255, 128, 128],
      radius: 20
    },
    {
      position: [1800, 1400],
      color: [115, 255, 255],
      radius: 30
    },
    {
      position: [0, 1400],
      color: [115, 255, 255],
      radius: 30
    },
  ],
  getFillColor: d => d.color,
  getRadius: d => d.radius
});

const bitmap_layer1 = new BitmapLayer({
  id: 'bitmap-layer1',
  coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
  target: [0, 0, 0],
  bounds: [[0, 1400], [0, 0], [1800, 0], [1800, 1400]],
  image: 'img/map.png',
  pickable: true,
  onClick: ({ bitmap, layer }) => {
    if (bitmap) {
      const pixelColor = readPixelsToArray(layer.props.image, {
        sourceX: bitmap.pixel[0],
        sourceY: bitmap.pixel[1],
        sourceWidth: 1,
        sourceHeight: 1
      })
      console.log('Color at picked pixel:', pixelColor);
      console.log('x: ', bitmap.pixel[0]);
      console.log('y: ', bitmap.pixel[1]);
    }
  }
});

// ポリゴンデータを出力
const polygon = new GeoJsonLayer({
  id: "polygon",
  coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
  target: [0, 0, 0],
  data: "./data/rooms.json",
  stroked: true,
  filled: true,
  getFillColor: [0, 160, 0, 180],
  getLineColor: [0, 0, 255, 255],
  lineWidthMinPixels: 2,
});

const deckgl = new Deck({
  views: orthographicView,
  coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
  coordinateOrigin: [0, 0, 0],
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  layers: [
    bitmap_layer1,
    circles,
    polygon
  ]
});