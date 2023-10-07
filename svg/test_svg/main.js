
let block = document.querySelector("#square");
block.setAttribute("fill", "#EEA8B2");
block.setAttribute("stroke", "#AB97B0");
block.setAttribute("stroke-width", 5);
block.setAttribute("width", 10);

let lineWidth = parseInt(block.getAttribute("stroke-width"));
lineWidth = lineWidth + 15;
block.setAttribute("stroke-width", lineWidth);

// block.addEventListener("click", function() {
//   block.setAttribute("width", "70");
//   block.setAttribute("height", "70");
//   block.setAttribute("x", "110");
//   block.setAttribute("y", "50");
// }, false);

block.addEventListener("click", function() {
  let block = document.querySelector("#square");
  block.setAttribute("fill", "#EEA8B2");
  block.setAttribute("stroke", "#AB97B0");
  block.setAttribute("stroke-width", "5");
  let width = parseInt(block.getAttribute("width"));
  block.setAttribute("width", width + 10);
  block.setAttribute("stroke", "#AB97B0");
  block.setAttribute("stroke-width", "5");
}, false);

let field = document.getElementById("svgField");
let round = document.createElementNS("http://www.w3.org/2000/svg", "circle");
round.setAttributeNS(null, "cx", 220);
round.setAttributeNS(null, "cy", 80);
round.setAttributeNS(null, "r", 50);
round.setAttributeNS(null, "fill", "#EFC1C1");
round.setAttributeNS(null, "stroke-width", "5");
round.setAttributeNS(null, "stroke", "#C9949C");
field.appendChild(round);
// svg1.insertBefore(round,square);

const value = document.querySelector("#value")
const input = document.querySelector("#input")
value.textContent = input.value
input.addEventListener("input", (event) => {
  value.textContent = event.target.value
  let block = document.querySelector("#square");
  block.setAttribute("fill", "#EEA8B2");
  block.setAttribute("stroke", "#AB97B0");
  block.setAttribute("stroke-width", "5");
  let width = parseInt(event.target.value);
  block.setAttribute("width", width + 10);
  block.setAttribute("stroke", "#AB97B0");
  block.setAttribute("stroke-width", "5");
})