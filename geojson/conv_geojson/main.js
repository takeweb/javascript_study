import { readFileSync, writeFileSync } from "fs";

// コマンドライン引数から縮尺サイズを取得
const size = process.argv[2];
conv_geojson("W5F", size);

/**
 * GeoJsonファイル読み込み、解析
 * サイズ換算して、結果を新しいファイルに出力
 * @param {string} fileName GeoJsonファイル
 */
function conv_geojson(fileName, size) {
  let jsonObj = {
    type: "",
    name: "",
    features: [],
  };
  let featureObj = {};

  try {
    const geoJsonData = JSON.parse(readFileSync(`./${fileName}.json`, "utf-8"));
    for (const key in geoJsonData) {
      if (key === "type") {
        jsonObj.type = geoJsonData[key];
      } else if (key === "name") {
        jsonObj.name = geoJsonData[key];
      } else {
        for (const feature of geoJsonData[key]) {
          featureObj = {
            type: feature.type,
            properties: {
              Layer: feature.properties.Layer,
              PaperSpace: feature.properties.PaperSpace,
              SubClasses: feature.properties.SubClasses,
              Linetype: feature.properties.Linetype,
              EntityHandle: feature.properties.EntityHandle,
              Text: feature.properties.Text,
            },
            geometry: {
              type: feature.geometry.type,
              coordinates: feature.geometry.coordinates.map((subArray) => {
                return subArray.map((value) => {
                  return value / size;
                });
              }),
            },
          };
          jsonObj.features.push({ ...featureObj });
        }
      }
    }

    const jsonStr = JSON.stringify(jsonObj, null, 2);
    writeFileSync(`./${fileName}_new.json`, jsonStr, "utf-8");
  } catch (err) {
    console.log(err);
  }
}
