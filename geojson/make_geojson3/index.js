import { writeFileSync } from "fs";

// グリッド用Geojsonファイル作成実行
makeGeojsonForGrid(142, 88, 20, "grids.json");

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

  for (let y = yLen; y > 0; y--) {
    for (let x = 0; x < xLen; x++) {
      let sub_obj = {
        type: "Feature",
        properties: {
          grid_no:
            (x + 1).toString().padStart(3, "0") +
            "-" +
            (yLen - y + 1).toString().padStart(3, "0"),
          color: "",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [x * oneGrid, y * oneGrid],
            [(x + 1) * oneGrid, y * oneGrid],
            [(x + 1) * oneGrid, (y - 1) * oneGrid],
            [x * oneGrid, (y - 1) * oneGrid],
            [x * oneGrid, y * oneGrid],
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
