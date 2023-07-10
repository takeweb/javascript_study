import React, { useEffect, useState } from "react";
import DeckGL, { MapController } from "deck.gl";
import { renderLayers } from "./RenderLayers";

import { JSONLoader } from "@loaders.gl/json";
import { load } from "@loaders.gl/core";

import "./styles.css";

const App = () => {
  const [pointData, setPointData] = useState();

  // カメラの初期設定を行う
  const [viewState, setViewState] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    longitude: 139.7720129,
    latitude: 35.7040594,
    zoom: 13,
    maxZoom: 16,
    pitch: 80
  });

  useEffect(() => {
    const dataload = async () => {
      // ポイントデータを読み込む
      const res = await load("./data/point.geojson", JSONLoader);
      // 読み込んだデータを保存
      setPointData(res);
    };
    dataload();
  }, []);

  // レンダリング
  return (
    <div className="App">
      <DeckGL
        layers={renderLayers({ pointData })}
        controller={{ type: MapController }}
        initialViewState={viewState}
      />
      <div className="attribution">
        <a
          href="https://maps.gsi.go.jp/development/ichiran.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 国土地理院
        </a>
      </div>
    </div>
  );
};

export default App;
