function make_geojson(x_len, y_len, one_grid) {
  let main_obj = {
    type: "FeatureCollection",
    features: [],
  }



  for (let x = 0; x <= x_len; x++) {
    for (let y = 0; y <= y_len; y++) {
      let sub_obj = {
        type: "Feature",
        properties: {
          grid_no: (x+1).toString().padStart(3, '0') + "-" + (y+1).toString().padStart(3, '0'),
          color: "",
        },
        geometry: {
          type: "Polygon",
          coordinates: []
        }
      }
      sub_obj.geometry.coordinates.push([x * one_grid, y * one_grid]);
      sub_obj.geometry.coordinates.push([(x+1) * one_grid, y * one_grid]);
      sub_obj.geometry.coordinates.push([(x+1) * one_grid, (y+1) * one_grid]);
      sub_obj.geometry.coordinates.push([x * one_grid, (y+1) * one_grid]);
      sub_obj.geometry.coordinates.push([x * one_grid, y * one_grid]);
      // console.log(JSON.stringify(sub_obj));
      main_obj.features.push({...sub_obj});
    }
  }

  console.log(JSON.stringify(main_obj));
}

make_geojson(3, 3, 20);
