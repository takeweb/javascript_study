import * as d3 from "d3";

const grid_width = 1000;
const grid_height = 300;
const zoom_min = 0.25;
const zoom_max = 10;
let scale = 1;

const buttons_width = 200;
const buttons_height = 200;

// zoom設定
const zoom = d3.zoom()
				.scaleExtent([zoom_min, zoom_max])
				.on('zoom', (event) => {
          d3.selectAll('svg g polygon')
            .attr('transform', event.transform)
        });

// SVG描画エリア
const svg = d3.select('#grid')
              .append('svg')
              .attr("class", "rooms")
              .attr('width', grid_width)
              .attr('height', grid_height)
              .call(zoom);

// loarding geojson
d3.json("./data/grid.json")
    .then((json) => {
      svg.append("g")
         .selectAll("grid")
         .data(json.features)
         .enter()
         .append("polygon")
         .attr("points", item => item.geometry.coordinates)
         .attr("fill", item => item.properties.color)
         .attr("class", "room")
         .on('click', function(event, item) {
           alert("ここは、" + item.properties.room_name + "です。");
         })
});

// ボタンエリア
const svg2 = d3.select('#buttons')
              .append('svg')
              .attr('width', buttons_width)
              .attr('height', buttons_height);

// ズーム・アップボタン
let zoomUpButton = svg2.append('g').classed('button', true)
                    .attr('transform', 'translate(50, 15)');
zoomUpButton.append('circle')
          .attr('cx', 20)
          .attr('cy', 20)
          .attr('r', 30);
zoomUpButton.append('text').text('⬆️')
          .attr('x', 20)
          .attr('y', 25);
zoomUpButton.on('click', () => {
  scale += 0.1;
  if (scale > zoom_max) {
    scale = zoom_max;
  }
  zoom.scaleTo(d3.selectAll('polygon'), scale);
});

// ズーム・ダウンボタン
let zoomDownButton = svg2.append('g').classed('button', true)
                      .attr('transform', 'translate(50, 80)');
zoomDownButton.append('circle')
           .attr('cx', 20)
           .attr('cy', 20)
           .attr('r', 30);
zoomDownButton.append('text').text('⬇️')
           .attr('x', 20)
           .attr('y', 25);
zoomDownButton.on('click', () => {
  scale -= 0.1;
  if (scale < zoom_min) {
    scale = zoom_min;
  }
  zoom.scaleTo(d3.selectAll('polygon'), scale);
});

// ズーム・リセットボタン
let zoomResetButton = svg2.append('g').classed('button', true)
                    .attr('transform', 'translate(50, 145)');
zoomResetButton.append('circle')
          .attr('cx', 20)
          .attr('cy', 20)
          .attr('r', 30);
zoomResetButton.append('text').text('RESET')
          .attr('x', 20)
          .attr('y', 25);
zoomResetButton.on('click', () => {
  scale = 1;
  zoom.scaleTo(d3.selectAll('polygon'), scale);
});
