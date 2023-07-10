import { COORDINATE_SYSTEM, Deck } from '@deck.gl/core/typed';
import { BitmapLayer, ScatterplotLayer } from '@deck.gl/layers/typed';

const INITIAL_VIEW_STATE = {
  latitude: 37.8,
  longitude: -122.45,
  zoom: 12
};

// const INITIAL_VIEW_STATE = {
//   latitude: 0,
//   longitude: 0,
//   zoom: 15
// };

const circle1 = new ScatterplotLayer({
  id: 'circle1',
  data: [
    {
      position: [-123.5190, 37.7045],
      color: [255, 0, 0],
      radius: 100
    }
  ],
  getFillColor: d => d.color,
  getRadius: d => d.radius
});

const circle2 = new ScatterplotLayer({
  id: 'circle2',
  data: [
    {
      position: [-122.45, 37.8],
      color: [255, 255, 0],
      radius: 50
    }
  ],
  getFillColor: d => d.color,
  getRadius: d => d.radius
});

const bitmap_layer = new BitmapLayer({
  id: 'bitmap-layer',
  bounds: [-122.5190, 37.7045, -122.355, 37.829],
  image: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-districts.png'
});

const bitmap_layer2 = new BitmapLayer({
  id: 'bitmap-layer2',
  bounds: [-122.5190, 37.7045, -122.355, 37.829],
  image: './img/map.png'
});

const deckgl = new Deck({
  coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
  coordinateOrigin: [0, 0, 0],
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  layers: [
    circle1,
    circle2,
    bitmap_layer,
    bitmap_layer2
  ]
});

