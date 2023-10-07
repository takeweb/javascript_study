import { writeFileSync } from "fs";

// コマンドライン引数から各パラメータを取得
const arg_x = process.argv[2];
const arg_y = process.argv[3];
const arg_x_div = process.argv[4];
const arg_y_div = process.argv[5];

// エリア用Geojsonファイル作成実行
// makeGeojsonForArea(2840, 1760, 8, 4, "areas.json");
makeGeojsonForArea(arg_x, arg_y, arg_x_div, arg_y_div, "areas_new.json");

/**
 * エリア用Geojsonファイル作成
 * @param {number} xLen X軸の長さ
 * @param {number} yLen Y軸の長さ
 * @param {number} xDiv X軸の分割数
 * @param {number} yDiv Y軸の分割数
 * @param {string} fileName ファイル名
 */
function makeGeojsonForArea(xLen, yLen, xDiv, yDiv, fileName) {
  let mainObj = {
    type: "FeatureCollection",
    features: [],
  };

  const xGrid = Math.round(xLen / xDiv);
  const yGrid = Math.round(yLen / yDiv);
  console.log(`xGrid: ${xGrid}、yGrid: ${yGrid}`);

  for (let y = yLen; y > 0; y -= yGrid) {
    for (let x = 0; x < xLen; x += xGrid) {
      let sub_obj = {
        type: "Feature",
        properties: {
          area_no:
            (x + 1).toString().padStart(3, "0") +
            "-" +
            (yLen - y + 1).toString().padStart(3, "0"),
          color: "",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [x * xGrid, y * yGrid],
              [(x + 1) * xGrid, y * yGrid],
              [(x + 1) * xGrid, (y - 1) * yGrid],
              [x * xGrid, (y - 1) * yGrid],
              [x * xGrid, y * yGrid],
            ],
          ],
        },
      };
      mainObj.features.push({ ...sub_obj });
    }
  }

  const jsonStr = JSON.stringify(mainObj, null, 2);
  // console.log(jsonStr);

  try {
    writeFileSync(`./${fileName}`, jsonStr, "utf-8");
  } catch (err) {
    console.log(err);
  }
}
