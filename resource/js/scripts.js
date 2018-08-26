"use strict"

// html読み込み完了時
$(function(){
	$('.menu-trigger').click(function() {
		$(this).toggleClass('active');
	});
});
