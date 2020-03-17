$(function(){
	$('.box1').mouseover(function(){
		$('.box1').css({'background-color': '#0000ff'});
	});

	$('.box1').mouseout(function(){
		$('.box1').css({'background-color': '#ff0000'});
	});
});

//イベントの記述
// $('.セレクタ名').イベント名(function(){
// 	 イベント発生時に行われる処理
// });