/**
 * ドラッグ可能アイテムクラス
 */
class DraggableItem {
  /**
   * SVG枠と子要素をまとめて生成
   * @param {object} svg SVG枠オブジェクト
   * @param {object[]} elems 子要素配列
   */
  static create(svg, elems) {
    const draggable = new DraggableItem(svg);
    elems.forEach((elem) => {
      draggable.addElem(elem);
    });
  }

  /**
   * SVG枠受付コンストラクタ
   * @param {object} svg SVG枠オブジェクト
   */
  constructor(svg) {
    this.dragElem = null;
    this.offsetX = 0;
    this.offsetY = 0;

    this.svg = svg;
    this.svg.addEventListener("mousemove", (e) => this.mouseMove(e), false);
    this.svg.addEventListener("touchmove", (e) => this.mouseMove(e), false);
    this.svg.addEventListener("mouseup", (_e) => this.mouseUp(), false);
    this.svg.addEventListener("touchend", (_e) => this.mouseUp(), false);
  }

  /**
   * 子要素追加
   * @param {object} arg_elem 子要素配列
   */
  addElem(arg_elem) {
    const elem = arg_elem;
    elem.addEventListener("mousedown", (e) => this.mouseDown(e), false);
    elem.addEventListener("touchstart", (e) => this.mouseDown(e), false);
    elem.addEventListener("mousemove", (e) => this.mouseMove(e), false);
    elem.addEventListener("touchmove", (e) => this.mouseMove(e), false);
    elem.addEventListener("mouseup", (_e) => this.mouseUp(), false);
    elem.addEventListener("touchend", (_e) => this.mouseUp(), false);
  }

  /**
   * イベントオブジェクトからSVG座標に変換
   * @param {object} e イベントオブジェクト
   * @returns SVG座標
   */
  mousePointToSVGPoint(e) {
    const p = this.svg.createSVGPoint();
    p.x = e.clientX;
    p.y = e.clientY;
    return p.matrixTransform(this.dragElem.getScreenCTM().inverse());
  }

  /**
   * マウスダウン時処理
   * @param {object} e イベントオブジェクト
   */
  mouseDown(e) {
    const event = e.type === "mousedown" ? e : e.changedTouches[0];
    this.dragElem = event.target;

    const p = this.mousePointToSVGPoint(event);
    if (this.dragElem.nodeName === "circle") {
      this.offsetX = p.x - this.dragElem.getAttribute("cx");
      this.offsetY = p.y - this.dragElem.getAttribute("cy");
    } else {
      this.offsetX = p.x - this.dragElem.getAttribute("x");
      this.offsetY = p.y - this.dragElem.getAttribute("y");
    }

    event.preventDefault();
  }

  /**
   * マウスムーブ時処理
   * @param {object} e イベントオブジェクト
   */
  mouseMove(e) {
    if (!this.dragElem) {
      return;
    }

    const event = e.type === "mousemove" ? e : e.changedTouches[0];
    const p = this.mousePointToSVGPoint(event);
    if (this.dragElem.nodeName === "circle") {
      this.dragElem.setAttribute("cx", p.x - this.offsetX);
      this.dragElem.setAttribute("cy", p.y - this.offsetY);
    } else {
      this.dragElem.setAttribute("x", p.x - this.offsetX);
      this.dragElem.setAttribute("y", p.y - this.offsetY);
    }

    event.preventDefault();
  }

  /**
   * マウスアップ時処理
   */
  mouseUp() {
    this.dragElem = null;
  }
}

/**
 * SVG枠作成
 * @param {string} id SVG枠のID
 * @param {number} width SVG枠の幅
 * @param {number} height SVG枠の高さ
 * @returns SVG枠オブジェクト
 */
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

/**
 * 円作成
 * @param {string} id 円のID
 * @param {number} cx 円のX位置
 * @param {number} cy 円のY位置
 * @param {number} r 円の半径
 * @param {string} fill 円の塗りつぶし色
 * @param {object} targetSvg 追加対象のSVG枠
 * @returns 円オブジェクト
 */
function createCircle(id, cx, cy, r, fill, targetSvg) {
  const ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  ball.setAttribute("id", id);
  ball.setAttribute("cx", cx.toString());
  ball.setAttribute("cy", cy.toString());
  ball.setAttribute("r", r.toString());
  ball.setAttribute("fill", fill);

  targetSvg.appendChild(ball);
  return ball;
}

/**
 * 四角形作成
 * @param {string} id 四角形のID
 * @param {number} width 四角形の幅
 * @param {number} height 四角形の高さ
 * @param {number} x 四角形のX位置
 * @param {number} y 四角形のY位置
 * @param {string} fill 四角形の塗りつぶし色
 * @param {object} targetSvg 追加対象のSVG枠
 * @returns 円オブジェクト
 */
function createRect(id, width, height, x, y, fill, targetSvg) {
  const square = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  square.setAttribute("id", id);
  square.setAttribute("width", width.toString());
  square.setAttribute("height", height.toString());
  square.setAttribute("x", x.toString());
  square.setAttribute("y", y.toString());
  square.setAttribute("fill", fill);

  targetSvg.appendChild(square);
  return square;
}

/**
 * 初期化
 */
function init() {
  const svg1 = createSvg("svg1", 800, 250);
  const ball1 = createCircle("ball1", 100, 100, 20, "blue", svg1);
  const ball2 = createCircle("ball2", 200, 200, 20, "green", svg1);
  DraggableItem.create(svg1, [ball1, ball2]);

  const svg2 = createSvg("svg2", 800, 250);
  const ball3 = createCircle("ball3", 100, 100, 20, "red", svg2);
  const ball4 = createCircle("ball4", 200, 200, 20, "yellow", svg2);
  DraggableItem.create(svg2, [ball3, ball4]);

  const svg3 = createSvg("svg3", 800, 250);
  const ball5 = createCircle("ball5", 200, 200, 20, "orange", svg3);
  const square1 = createRect("squqre1", 140, 140, 75, 10, "pink", svg3);
  DraggableItem.create(svg3, [ball5, square1]);
}

init();
