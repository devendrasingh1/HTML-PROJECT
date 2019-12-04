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
	//show sidebar in mobile
	$('.das_nav_toggle').on('click', function(){
		$(".dashboard_sidebar").slideToggle(300);
	});
	//find tutor js
	$('.tutor_label input').each(function() {
		this.checked = true;                     
	});
	$(".search_radio .course_label").on("click", function(){
		$(this).hide();
		$(".tutor_label").show();
		// Iterate each checkbox
		$('.tutor_label input').each(function() {
			this.checked = true;                     
		});
		
	});
	$(".search_radio .tutor_label").on("click", function(){
		$(this).hide();
		$(".course_label").show();
		// Iterate each checkbox
		$('.course_label input').each(function() {
			this.checked = true;              
		});
	});
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
	//show search bar popup
	$(".header_search_icon").on('click',function(){
		$('.search_popup').addClass('popup_open');
	});
	$(".close_popup").on('click',function(){
		$('.search_popup').removeClass('popup_open');
	});
	//custom close login modal on click
	$(".register_now").on('click',function(){
		$('#login_modal').modal('hide');
	});
	//show filter Dropdown
	$(".dropdown_btn").on('click',function(){
		$(this).next(".dropdown_menu").slideToggle(300);
		$(".dropdown_btn").not(this).next().slideUp("slow");
	});

	//show full filter Dropdown
	$(".filter_btn").on('click',function(){
		$(".full_filter_dropdown").slideToggle(300);
		$(".filter_panel").hide();
	});
	$(".cancel_full_filter").on('click',function(){
		$(".full_filter_dropdown").slideUp(300);
		$(".filter_panel").show();
	});

	//sorting dropdown js
	$(".sorting_dropdown li span").on('click',function(){
		var values = $(this).text();
		$(".sorting_btn span").text(values);
	});
	//home slider
	if ($(".home_slider").length > 0) {
		$(".home_slider").owlCarousel({
			mode:"fade",
			singleItem:true,
			items:1,
			loop:true,
			margin:0,
			autoplay:false,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:true,
			nav:false,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut'
		});
	}
	//trading course carousel
	if ($(".t_course_slider").length > 0) {
		$(".t_course_slider").owlCarousel({
			mode:"fade",
			items:2,
			loop:true,
			margin:25,
			autoplay:true,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				 0:{
		            items:1
		        },
		        1024:{
		            items:2
		        }
		    }
		});
	}
	//Testimonial course carousel
	if ($(".testimonial_slider").length > 0) {
		$(".testimonial_slider").owlCarousel({
			items:3,
			loop:true,
			margin:0,
			autoplay:false,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				 0:{
		            items:1
		        },
		        1024:{
		            items:3
		        }
		    }
		});
		$(window).load(function(){
			$('.testimonial_slider').find('.owl-nav').removeClass('disabled');
		});
	}
	//Feature course carousel
	if ($(".four_item_carousel").length > 0) {
		$(".four_item_carousel").owlCarousel({
			items:4,
			loop:true,
			margin:20,
			autoplay:false,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				 0:{
		            items:1
		        },
		        768:{
		            items:2
		        },
		        992:{
		            items:3
		        },
		        1199:{
		            items:4
		        },
		    }
		});
	}
	//footer gallery
	if ($(".footer_gallery").length > 0) {
		$('.footer_gallery').magnificPopup({
			delegate: '.g_popup',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'zoom_gallery mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '';
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