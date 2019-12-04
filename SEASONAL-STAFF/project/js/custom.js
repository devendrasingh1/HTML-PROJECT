(function($) {
	"use strict";
	$(".search_pagination ul li").on('click',function(){
		$(".search_pagination ul li").removeClass("active");
		$(this).addClass("active");
	});
	//custom close login modal on click
	$(".forget_pass .sign_up_btn").on('click',function(){
		$('#login_popup').modal('hide');
	});
})(jQuery);