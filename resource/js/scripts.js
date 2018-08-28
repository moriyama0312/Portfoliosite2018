"use strict"

// html読み込み完了時
$(function(){
	// ハンバーガーメニューのアニメーション	
	$('.menu-trigger').click(function() {
		$(this).toggleClass('active');
	});

	// メニュー表示
	$('.menu-trigger').click(function() {
		$('#overwrp-menu').toggleClass('opened');
	});
});
