$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(){
	// イベント発生時に行われる処理
	$("#tab-contents .tab").hide();
	$("#tab-menu .active").removeClass("active");
	$(this).addClass("active");
	$($(this).attr("href")).show();
	return false;
});

// 特定の属性を持つ要素のみ取得したい時の記述方法
// $('要素[属性]')

// 属性値が特定の値に等しい要素だけを取得したい時の記述方法
// $('要素[属性　= "値"]')

// 属性値が特定の値に等しくない要素だけを取得したい時の記述方法
// $('要素[属性 != "値"]')
