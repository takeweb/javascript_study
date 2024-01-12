const button = document.querySelector("#exec-button");
button.addEventListener("click", (_event) => {
  const width = document.querySelector("#width").value;
  const height = document.querySelector("#height").value;
  const grid = document.querySelector("#grid").value;

  // ダウンロード実行
  execDownload(width, height, grid, "grids.json");
});

/**
 * ダウンロード実行
 * @param {number} width グリッド全体の幅
 * @param {number} height グリッド全体の高さ
 * @param {number} grid １つのグリッドの大きさ
 * @param {string} fileName GeoJsonファイル
 */
function execDownload(width, height, grid, fileName) {
  // グリッド用Geojsonファイル作成実行
  const result = makeGeojsonForGrid(width, height, grid);

  // JSONファイルからBlobデータを作成して、ダウンロード実行
  makeBlobAndDownload(result, fileName);
}

/**
 * グリッド用Geojsonファイル作成
 * @param {number} xLen X軸の長さ
 * @param {number} yLen Y軸の長さ
 * @param {number} oneGrid 1つのグリッドの大きさ
 * @param {string} fileName ファイル名
 */
function makeGeojsonForGrid(xLen, yLen, oneGrid, fileName) {
  let main_obj = {
    type: "FeatureCollection",
    features: [],
  };

  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      const gridNo = `${(x + 1).toString().padStart(3, "0")}-${(y + 1)
        .toString()
        .padStart(3, "0")}`;
      let sub_obj = {
        type: "Feature",
        properties: {
          grid_no: gridNo,
          fill_color: [255, 255, 255, 0],
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [x * oneGrid, y * oneGrid],
              [(x + 1) * oneGrid, y * oneGrid],
              [(x + 1) * oneGrid, (y + 1) * oneGrid],
              [x * oneGrid, (y + 1) * oneGrid],
              [x * oneGrid, y * oneGrid],
            ],
          ],
        },
      };
      main_obj.features.push({ ...sub_obj });
    }
  }
  return main_obj;
}

/**
 * JSONファイルからBlobデータを作成して、ダウンロード実行
 * @param {*} jsonData
 */
function makeBlobAndDownload(jsonData, fileName) {
  const jsonStr = JSON.stringify(jsonData, null, 2);
  const blob = new Blob([jsonStr], {
    type: "application/json",
  });

  const download = document.createElement("a");
  download.download = fileName;
  download.href = window.URL.createObjectURL(blob);
  download.click();
}
