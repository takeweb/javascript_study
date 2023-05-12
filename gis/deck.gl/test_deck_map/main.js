import { Deck } from '@deck.gl/core/typed';
// import { BitmapLayer, ScatterplotLayer } from '@deck.gl/layers/typed';

const deckgl = new Deck({
    mapStyle: 'https://api.maptiler.com/maps/streets/style.json',
    initialViewState: {
      longitude: 137, // 経度
      latitude: 37,   // 緯度
      zoom: 5,        // ズーム
      minZoom: 2,     // 最小ズーム
      maxZoom: 8,     // 最大ズーム
      pitch: 30,      // 傾き
      bearing: 10,    // 回転
    },
    controller: true,
    layers: []
  });