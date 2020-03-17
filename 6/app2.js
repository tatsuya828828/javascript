//	マウスオーバー、マウスアウトの時の色の変化
//$(function(){
//	$('.box1').mouseover(function(){
//		$('.box1').css({'background-color': '#0000ff'});
//	});
//
//	$('.box1').mouseout(function(){
//		$('.box1').css({'background-color': '#ff0000'});
//	});
//});

//イベントの記述
// $('.セレクタ名').イベント名(function(){
// 	 イベント発生時に行われる処理
// });

$(function(){
	$('.box1').mouseover(function(){
		$('.box1').addClass('box1-ext');
	});

	$('.box1').mouseout(function(){
		$('.box1').removeClass('box1-ext');
	});
});

//addClass()では対象のHTML要素にclass属性を追加する
//removeClass()では要素に設定されているclass属性が解除される