class DraggableItem {
  static create(svg_id, elem_id) {
    const draggable = new DraggableItem(svg_id);
    elem_id.forEach((id) => {
      draggable.addElem(id);
    });
  }

  constructor(svg_id) {
    this.dragElem = null;
    this.offsetX = 0;
    this.offsetY = 0;

    this.svg = document.getElementById(svg_id);
    this.svg.addEventListener("mousemove", (e) => this.mouseMove(e), false);
    this.svg.addEventListener("touchmove", (e) => this.mouseMove(e), false);
    this.svg.addEventListener("mouseup", (e) => this.mouseUp(e), false);
    this.svg.addEventListener("touchend", (e) => this.mouseUp(e), false);
  }

  addElem(elem_id) {
    const elem = document.getElementById(elem_id);
    elem.addEventListener("mousedown", (e) => this.mouseDown(e), false);
    elem.addEventListener("touchstart", (e) => this.mouseDown(e), false);
    elem.addEventListener("mousemove", (e) => this.mouseMove(e), false);
    elem.addEventListener("touchmove", (e) => this.mouseMove(e), false);
    elem.addEventListener("mouseup", (e) => this.mouseUp(e), false);
    elem.addEventListener("touchend", (e) => this.mouseUp(e), false);
  }

  screenPointToSVGPoint(svg, elem, x, y) {
    const p = svg.createSVGPoint();
    p.x = x;
    p.y = y;
    const CTM = elem.getScreenCTM();
    return p.matrixTransform(CTM.inverse());
  }

  mousePointToSVGPoint(e) {
    return this.screenPointToSVGPoint(
      this.svg,
      this.dragElem,
      e.clientX,
      e.clientY
    );
  }

  mouseDown(e) {
    const event = e.type === "mousedown" ? e : e.changedTouches[0];
    this.dragElem = event.target;

    const p = this.mousePointToSVGPoint(event);
    this.offsetX = p.x - this.dragElem.getAttribute("cx");
    this.offsetY = p.y - this.dragElem.getAttribute("cy");

    event.preventDefault();
  }

  mouseUp(e) {
    this.dragElem = null;
  }

  mouseMove(e) {
    if (!this.dragElem) {
      return;
    }

    const event = e.type === "mousemove" ? e : e.changedTouches[0];
    const p = this.mousePointToSVGPoint(event);
    this.dragElem.setAttribute("cx", p.x - this.offsetX);
    this.dragElem.setAttribute("cy", p.y - this.offsetY);

    event.preventDefault();
  }
}

function createSvg(id, width, height) {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("id", id);
  svg.setAttribute("width", width.toString());
  svg.setAttribute("height", height.toString());
  svg.style.display = "block";
  svg.style.borderWidth = "thick";
  svg.style.margin = "auto";
  svg.style.borderColor = "#eee";
  svg.style.borderStyle = "solid";

  let app = document.querySelector("#app");
  app.appendChild(svg);
  return svg;
}

function createCircle(id, cx, cy, r, fill, svg) {
  const ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  ball.setAttribute("id", id);
  ball.setAttribute("cx", cx.toString());
  ball.setAttribute("cy", cy.toString());
  ball.setAttribute("r", r.toString());
  ball.setAttribute("fill", fill);

  svg.appendChild(ball);
  return ball;
}

function init() {
  DraggableItem.create("svg1", ["ball1", "ball2"]);
  DraggableItem.create("svg2", ["ball3", "ball4"]);

  const svg3 = createSvg("svg3", 300, 300);
  const ball5 = createCircle("ball5", 100, 100, 20, "black", svg3);
  DraggableItem.create("svg3", ["ball5"]);
}

init();
