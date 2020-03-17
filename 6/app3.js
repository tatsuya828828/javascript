// .click()というイベントはクリックされた時点でイベントが終わってしまう
// そのためこの記述はクリック後にもイベントが行われるようにonをつけている
$(function(){
	$('.box1').on('click',function(){
		$('.box1').addClass('box1-ext');
	});

	$('.box1').mouseout(function(){
		$('.box1').removeClass('box1-ext');
	});
});