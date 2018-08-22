"use strict"

var canvas = document.getElementById('wave');
//コンテキストを取得
var context = canvas.getContext('2d');

//色をRGBで決定
context.fillStyle = "rgb(255,0,0)";

//第一引数と第二引数は描画の位置を示します。
//第三引数は幅、第四引数は高さを設定します。
context.fillRect(0, 0, 100, 100);