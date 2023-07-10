// test_p5.js

//最初に1回だけ実行
function setup(){
    // キャンバスを作成
    createCanvas(600,425);

     // 背景色
    background(0);

    // // オブジェクトの色
    // fill(0,255,0);

    // // キャンバスの中心に直径100pxの丸を描画
    // ellipse(width/2,height/2,100);
}

// 1フレーム(1/60秒)ごとに実行
function draw(){
    // オブジェクトの色
    fill(0,255,0);

    // キャンバスの中心に直径100pxの丸を描画
    ellipse(random(width),random(height),100);
}