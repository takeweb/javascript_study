import * as d3 from "d3";

const svg = d3.select('#circles')
              .append('svg')
              .attr('width', 1000)
              .attr('height', 1000)

d3.json("data.json")
  .then((json) => {
    svg.selectAll('circles')
       .data(json.circles)
       .enter()
       .append('circle')
       .attr('r', circle => circle.r)
       .attr('cx', circle => circle.x)
       .attr('cy', circle => circle.y)
       .attr('class', circle => circle.type)
  })
