$(function(){
	// #back内の<a>>タグがクリックされた時の処理
	$('#back a').on('click',function(){
		//  $('セレクタ名').animate({
		$('body,html').animate({
			// 変化対象のプロパティ名:変化値,scrolltop:0は最上部に移動するの意味を持っている
			scrollTop:0
			//},アニメーションの動作時間);
		},800);
		return false;
		});
	});