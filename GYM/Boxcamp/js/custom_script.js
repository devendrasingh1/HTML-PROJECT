(function($) {
	"use strict";
	//Accordion js
	$(".panel_heading a").on("click", function(e){
		e.preventDefault();
	});
	$(".active_data").show();
    $('.panel_heading').click(function (e){
		$(".panel_heading").removeClass("active_head");
		if($(this).next('.panel_content').css('display') != 'block'){
			$('.active_data').removeClass('active_data').slideUp(500);
			$(this).next('.panel_content').addClass('active_data').slideDown(500);
			$(this).addClass("active_head");
		} else {
			$('.active_data').removeClass('active_data').slideUp(500);
		}
	});
	//tabs Menu
	$('.tab_menu .tab_link').on('click', function(){
		$(".tab_content").removeClass("active");
		var tab_data = $(this).attr("data-tab");
		$('.tab_menu .tab_link').removeClass("active");
		$(this).addClass("active");
		$("#"+tab_data).addClass("active");
	});
	//Responsive Menu in mobile js
	$('.nav_toggle').on('click', function(){
		$(".navigation").toggleClass("menu_open");
		$(".navigation").slideToggle(300);
	});
	$('.nav_toggle_m').on('click', function(){
		$(".navigation").toggleClass("menu_open");
		$(".navigation").slideToggle(300);
	});
	//Responsive Mobile Menu
	if ($(window).width () < 991){
		$(".navigation > ul > li> ul").parents("li").addClass("dropdown_toggle");
		$(".navigation > ul > li> ul > li > ul").parents("li").addClass("dropdown_toggle");
		$(".dropdown_toggle").append("<span class='caret_down'><i class='fa fa-angle-down'></i></span>");
		$(".navigation ul li").children(".caret_down").on("click",function(){
			$(this).toggleClass("caret_up");
			$(this).prev("ul").slideToggle();
			
			$(".caret_down").children("i").attr("class","fa fa-angle-down");
			$(".caret_down.caret_up").children("i").attr("class","fa fa-angle-up");
		});
	}
	else {
		
	}
	//Datepicker
	if($(".calendar_dv").length > 0){
		$( ".calendar_dv" ).datepicker({
		  dateFormat: "dd-mm-yy",
		  firstDay: 1,
		});
	}
	//bootsrape selectpicker
    if ($(".selectpicker").length > 0) {
      $('.selectpicker').selectpicker();
    }
	$(".dropdown_btn").on('click',function(){
		$(this).next(".dropdown_menu").slideToggle(300);
		$(".dropdown_btn").not(this).next().slideUp("slow");
	});
	//home slider
	if ($(".home_slider").length > 0) {
		$(".home_slider").owlCarousel({
			mode:"fade",
			singleItem:true,
			items:1,
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
			animateIn: 'fadeIn',
			animateOut: 'fadeOut'
		});
	}
	//testimonial carousel
	if ($(".testimonial_carousel").length > 0) {
		$(".testimonial_carousel").owlCarousel({
			mode:"fade",
			items:1,
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:true,
			nav:false
		});
	}
	//blog carousel
	if ($(".blog_carousel").length > 0) {
		$(".blog_carousel").owlCarousel({
			mode:"fade",
			items:3,
			loop:true,
			margin:10,
			autoplay:true,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
			responsive:{
				  // breakpoint from 0 up
				0 : {
				   items:1
				},
				// breakpoint from 768 up
				768 : {
					items:2
				},
				// breakpoint from 768 up
				992 : {
					items:3
				}
			}
		});
	}
	
	//progressbar js
	$(window).on('load', function() {
		$(".progress_panel").each(function() {
			var slide = $(this).children(".prog_slide");
			var slide_val = slide.attr("slide-value");
		  //slide amimate
		 slide.animate({
		    'width': slide_val+'%',
		    easing: 'ease'
		  }, 2000);
		});
	});
	//Jqeury counter
	$('.number_counter').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'linear',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
})(jQuery);