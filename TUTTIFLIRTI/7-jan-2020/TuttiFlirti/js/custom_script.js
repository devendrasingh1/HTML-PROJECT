(function($) {
	"use strict";
	//home slider height
	var wind_h = $(window).outerHeight();
	var wind_h_n = wind_h - 150
	if ($(window).width () > 991){
		$(".home_slider_section").css('height',wind_h_n);
	}
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
	//chat tabs
	$('.msg_tabs li').on('click', function(){
		$(".tab_content").removeClass("active");
		var tab_data = $(this).attr("data-tab");
		$('.msg_tabs li').removeClass("active");
		$(this).addClass("active");
		$("#"+tab_data).addClass("active");
	});
	//login tabs
	$('.login_link').on('click', function(){
		$(".login_content").removeClass("active");
		var tab_data = $(this).attr("data-tab");
		$('.login_link').removeClass("active");
		$(this).addClass("active");
		$("#"+tab_data).addClass("active");
	});
	//dropdown menu js
	$('.menu_toggle').on('click', function(){
		$(".dropdown_navs").toggleClass("menu_open");
		$(".dropdown_navs").slideToggle(300);
	});
	//Responsive Mobile Menu
	if ($(window).width () < 991){
		$(".app_navigation > ul > li> ul").parents("li").addClass("dropdown_toggle");
		$(".app_navigation > ul > li> ul > li > ul").parents("li").addClass("dropdown_toggle");
		$(".dropdown_toggle").append("<span class='caret_down'><i class='fas fa-chevron-down'></i></span>");
		$(".app_navigation ul li").children(".caret_down").on("click",function(){
			$(this).toggleClass("caret_up");
			$(this).prev("ul").slideToggle();
		});
	}
	else {
		
	}
	//age Datepicker
	if($(".age_calendar").length > 0){
		$( ".age_calendar" ).datepicker({
			dateFormat: "dd-mm-yy",
			changeMonth: true,
			changeYear: true,
			yearRange: "-80:-18",
		});
	}
	//Datepicker
	if($(".datepicker").length > 0){
		$( ".datepicker" ).datepicker({
		  dateFormat: "dd-mm-yy"
		});
	}
	//bootsrape selectpicker
    if ($(".selectpicker").length > 0) {
      $('.selectpicker').selectpicker();
    }
    //dropdown menu
	$(".dropdown_btn").on('click',function(){
		$(this).next(".dropdown_menu").slideToggle(300);
		$(".dropdown_btn").not(this).next().slideUp("slow");
	});
	//profile syncronize slider
	$(document).ready(function() {
	  var sync1 = $("#sync1");
	  var sync2 = $("#sync2");
	  var slidesPerPage = 4; //globaly define number of elements per page
	  var syncedSecondary = true;
	  sync1.owlCarousel({
	    items : 1,
	    slideSpeed : 2000,
	    nav: true,
	    autoplay: false,
	    dots: true,
	    loop: true,
	    responsiveRefreshRate : 200,
	    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	  }).on('changed.owl.carousel', syncPosition);

	  sync2
	    .on('initialized.owl.carousel', function () {
	      sync2.find(".owl-item").eq(0).addClass("current");
	    })
	    .owlCarousel({
	    items : slidesPerPage,
	    margin:5,
	    dots: false,
	    nav: false,
	    autoplay: true,
	    smartSpeed: 200,
	    slideSpeed : 500,
	    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
	    responsiveRefreshRate : 100,
	    responsive:{
				 0:{
		            items:3
		        },
		        350:{
		            items:4
		        },
		        460:{
		            items:5
		        },
		        768:{
		            items:8
		        },
		        992:{
		            items:4
		        }
		    },
	  }).on('changed.owl.carousel', syncPosition2);

	  function syncPosition(el) {
	    //if you set loop to false, you have to restore this next line
	    //var current = el.item.index;
	    
	    //if you disable loop you have to comment this block
	    var count = el.item.count-1;
	    var current = Math.round(el.item.index - (el.item.count/2) - .5);
	    
	    if(current < 0) {
	      current = count;
	    }
	    if(current > count) {
	      current = 0;
	    }
	    
	    //end block

	    sync2
	      .find(".owl-item")
	      .removeClass("current")
	      .eq(current)
	      .addClass("current");
	    var onscreen = sync2.find('.owl-item.active').length - 1;
	    var start = sync2.find('.owl-item.active').first().index();
	    var end = sync2.find('.owl-item.active').last().index();
	    
	    if (current > end) {
	      sync2.data('owl.carousel').to(current, 100, true);
	    }
	    if (current < start) {
	      sync2.data('owl.carousel').to(current - onscreen, 100, true);
	    }
	  }
	  
	  function syncPosition2(el) {
	    if(syncedSecondary) {
	      var number = el.item.index;
	      sync1.data('owl.carousel').to(number, 100, true);
	    }
	  }
	  
	  sync2.on("click", ".owl-item", function(e){
	    e.preventDefault();
	    var number = $(this).index();
	    sync1.data('owl.carousel').to(number, 300, true);
	  });
	});
	//home slider
	if ($(".gallery_slider").length > 0) {
		$(".gallery_slider").owlCarousel({
			mode:"fade",
			items:1,
			loop:true,
			margin:10,
			autoplay:false,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1000,
			dots:false,
			nav:true,
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
   //sidebar show in mobile
	$('.sidebar_toggle').on('click', function(){
		$(".left_sidebar").toggleClass("side_open");
		$(".left_sidebar").slideToggle(300);
	});
	//profile collapse in mobile
	$('.show_prof_btn').on('click', function(){
		$(".profile_page_mobile").slideToggle(300);
		$(this).toggleClass("active");
	});
	//add class in profile page
	/*$('.profile_tabs li *').on('click', function(){
		$(".profile_tabs li *").removeClass("active");
		$(this).addClass("active");
	});*/
	//add dymanic field on click
	var l = 1;
	$('.add_more_btn').on('click', function(){
		l++;
		var html = '<div class="row more_field_row" id="row'+l+'">\
        <div class="col-xl-4 col-md-6">\
            <div class="form_group">\
                <div class="app_boxes app_input">\
                    <h4>Title</h4>\
                    <input type="text" name="user_id" placeholder="Enter Title">\
                </div>\
            </div>\
        </div>\
        <div class="col-xl-4 col-md-6">\
            <div class="form_group">\
                <div class="app_boxes">\
                    <h4>Icon</h4>\
                    <div class="input_group">\
                        <div class="upload_file_dv">\
                            <label class="upload_label">\
                                <input type="file" name="" class="upload_input">\
                                <span class="upload_text"><i class="fas fa-cloud-upload-alt"></i>Upload Icon</span>\
                                <span class="img_path"></span>\
                            </label>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="col-xl-4 col-md-6">\
            <div class="form_group">\
                <div class="app_boxes app_input">\
                    <h4>Price</h4>\
                    <input type="text" name="user_id" placeholder="Enter Price">\
                </div>\
            </div>\
        </div>\
        <button type="button" value="Remove" class="remove_btn" id="'+l+'">\
        <i class="fas fa-times"></i>\
        </button>\
		</div>';
		$('.add_more_form').append(html);
		 //file upload drag $ drop code
		  $('.upload_input').change(function() {
		    //var i = $(this).parents('.upload_label').clone();
		    var file = $(this)[0].files[0].name;
		    $(this).next(".upload_text").next('.img_path').html(file);
		  });
	});
	//remove field
	$(document).on('click', '.remove_btn', function(){
		//var button_id = $(this).attr("id");
		var remove_prnt = $(this).parents(".more_field_row");
		$(remove_prnt).remove();
	});
	//======== show emoji and proposal on click =========//
	$(document).on('click', '.emoji_icon_show', function(){
		$(".emoji_lists").slideToggle(300);
		$(".send_proposal_box").slideUp(300);
	});
	$(document).on('click', '.send_proposal_btn', function(){
		$(".send_proposal_box").slideToggle(300);
		$(".emoji_lists").slideUp(300);
	});
	$(document).on('click', '.close_pro', function(){
		$(".send_proposal_box").slideUp(300);
	});
	//tabs Menu add active class
	$('.proposal_tabs .tabs_menu li').on('click', function(){
		$('.proposal_tabs .tabs_menu li').removeClass("active");
		$(this).addClass("active");
	});
})(jQuery);
//copy to clip board on click
function copybutton() {
  /* Get the text field */
  var copyText = document.getElementById("ref_code");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  document.execCommand("copy");
}
//profile image change
function profilechange() {
 document.getElementById('profile_img').src = window.URL.createObjectURL(this.files[0])
}