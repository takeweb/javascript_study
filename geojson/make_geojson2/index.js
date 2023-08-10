import { writeFileSync } from "fs";

make_geojson(80, 50, 20);

function make_geojson(x_len, y_len, one_grid) {
  let main_obj = {
    type: "FeatureCollection",
    features: [],
  };

  for (let y = 0; y < y_len; y++) {
    for (let x = 0; x < x_len; x++) {
      let sub_obj = {
        type: "Feature",
        properties: {
          grid_no:
            (x + 1).toString().padStart(3, "0") +
            "-" +
            (y + 1).toString().padStart(3, "0"),
          color: "",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [x * one_grid, y * one_grid],
              [(x + 1) * one_grid, y * one_grid],
              [(x + 1) * one_grid, (y + 1) * one_grid],
              [x * one_grid, (y + 1) * one_grid],
              [x * one_grid, y * one_grid],
            ],
          ],
        },
      };
      main_obj.features.push({ ...sub_obj });
    }
  }
  console.log(JSON.stringify(main_obj, null, 2));
  const s = JSON.stringify(main_obj, null, 2);
  try {
    writeFileSync("./grids.json", s, "utf-8");
  } catch (err) {
    console.log(err);
  }
}
