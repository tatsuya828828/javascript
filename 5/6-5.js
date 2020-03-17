$(function(){
	$('.box1').hide().slideDown(2000,function(){
	$('.box1').css({
		'background-color': 'blue',
		'height': '100px',
		'width': '200px'
		}).slideUp(2000);
	});
});