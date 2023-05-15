import {Deck, COORDINATE_SYSTEM} from '@deck.gl/core/typed';
import {BitmapLayer, ScatterplotLayer, GeoJsonLayer} from '@deck.gl/layers/typed';

const INITIAL_VIEW_STATE = {
  latitude: 37.8,
  longitude: -122.45,
  zoom: 13
};

// const INITIAL_VIEW_STATE = {
//   latitude: 0,
//   longitude: 0,
//   zoom: 13
// };

// const INITIAL_VIEW_STATE = {
//   target: [0, 0, 0],
  // rotationX: 0,
  // rotationOrbit: 0,
  // minZoom: 0,
  // maxZoom: 10,
  // zoom: 13
// };

const circles = new ScatterplotLayer({
  id: "circle1",
  data: [
    {
      position: [-122.43, 37.8],
      color: [255, 0, 0],
      radius: 100
    },
    {
      position: [-122.44, 37.8],
      color: [255, 255, 0],
      radius: 50
    },
    {
      position: [-122.46, 37.8],
      color: [255, 128, 0],
      radius: 80
    },
    {
      position: [-122.355, 37.829],
      color: [255, 128, 0],
      radius: 80
    },
    {
      position: [-122.5190, 37.7045],
      color: [255, 128, 0],
      radius: 80
    },
    {
      position: [-122.503, 37.7011],
      color: [255, 0, 177],
      radius: 80
    }
  ],
  getFillColor: d => d.color,
  getRadius: d => d.radius
});

const bitmap_layer1 = new BitmapLayer({
  id: 'bitmap-layer1',
  bounds: [-122.5190, 37.7045, -122.355, 37.829],
  image: 'img/map.png',
  onClick: ({bitmap, layer}) => {
    if (bitmap) {
      const pixelColor = readPixelsToArray(layer.props.image, {
        sourceX: bitmap.pixel[0],
        sourceY: bitmap.pixel[1],
        sourceWidth: 1,
        sourceHeight: 1
      })
      console.log('Color at picked pixel:', pixelColor)
    }
  }
});

// // ポリゴンデータを出力
// const polygon = new GeoJsonLayer({
//   id: "polygon",
//   data: "./data/polygon.geojson",
//   stroked: true,
//   filled: true,
//   getFillColor: [0, 160, 0, 180],
//   getLineColor: [0, 0, 255, 255],
//   lineWidthMinPixels: 2,
// });

const deckgl = new Deck({
  coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
  coordinateOrigin: [0, 0, 0],
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  layers: [
    bitmap_layer1,
    circles,
    // polygon
  ]
});