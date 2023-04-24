const makeSvg = document.querySelector("#makeSvg");
// const body = document.body;
const svgTag = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgTag.setAttribute('id', 'mySvg');
svgTag.setAttribute('viewBox', '0 0 200 200');
svgTag.setAttribute('width', '200');
svgTag.setAttribute('height', '200');

const myCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
myCircle.setAttribute("id", "myCircle");
myCircle.setAttribute("cx", "100");
myCircle.setAttribute("cy", "100");
myCircle.setAttribute("r", "100");
myCircle.setAttribute("fill", "#FFFF8D");
// const mySvg = document.querySelector("#mySvg");
// mySvg.appendChild(myCircle);

svgTag.appendChild(myCircle);
makeSvg.appendChild(svgTag);
// body.appendChild(svgTag);

myCircle.addEventListener("click", (event) => {
  alert("クリックされました。");
})

function changeStyle() {
  const myCircle = document.querySelector("#myCircle");
  myCircle.setAttribute("r", "100");
  myCircle.setAttribute("fill", "#FFFF8D");
  myCircle.setAttribute("fill-opacity", "0.5");
}
