import { writeFileSync } from "fs";

// コマンドライン引数から各パラメータを取得
const x = process.argv[2];
const y = process.argv[3];
const g = process.argv[4];

// グリッド用Geojsonファイル作成実行
makeGeojsonForGrid(x, y, g, "grids_new.json");

/**
 * グリッド用Geojsonファイル作成(左下原点バージョン)
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

  const jsonStr = JSON.stringify(main_obj, null, 2);
  // console.log(jsonStr);

  try {
    writeFileSync("./" + fileName, jsonStr, "utf-8");
  } catch (err) {
    console.log(err);
  }
}
