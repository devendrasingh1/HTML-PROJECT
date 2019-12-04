(function($) {
	"use strict";
	 //remove validation on change
	$('#region_select').on('change', function(){
		var region_val =  $("#region_select").val();
		if(region_val !== '') {
			$(".validation").remove();
		}
	});
	$('#birth_date').on('change', function(){
		var birth_val =  $("#birth_date").val();
		if(birth_val !== '') {
			$(".validation").remove();
		}
	});
	$('#max_age').on('change', function(){
		var ag_val2 =  $("#birth_date").val();
		if(ag_val2 !== '') {
			$(".validation").remove();
		}
	});
	$(".looking_box_wrap input").on('keyup', function(){
		var this_val =  $(this).val();
		if(this_val !== '') {
			$(this).parent().next(".validation").remove();
		}
	});
   //add Validations on click
	$('.next_btn_one').click(function(){
        var ag_val =  $("#min_age").val();
        var ag_val2 =  $("#max_age").val();
		var birth_val =  $("#birth_date").val();
        var email =  $("#reg_email").val();
		var password =  $("#reg_pass").val();
        if(ag_val == ''){
            $("#min_age").parent().next(".validation").remove();
            $("#min_age").parent().after("<div class='validation'>Please Select Minimum age</div>");
			//alert("Please Select Minimum age");
			//exit():
        }
        else{
			$("#min_age").parent().next(".validation").remove(); 
        }
        if(ag_val2 == ''){
            $("#max_age").parent().next(".validation").remove();
			$("#max_age").parent().after("<div class='validation'>Please Select Maximum age</div>");
            //alert("Please Select Maximum age");
            exit(); 
        }
        else{
			$("#max_age").parent().next(".validation").remove(); 
        }
        //birthdate
		if(birth_val == ''){
		 	$("#birth_date").parent().next(".validation").remove();
			$("#birth_date").parent().after("<div class='validation'>Select Your Birth Year</div>");
            //alert("Please Select Maximum age");
            exit(); 
        }
        else{
			$("#birth_date").parent().next(".validation").remove();
        }
        //Email
        if(email == ''){
		 	$("#reg_email").parent().next(".validation").remove();
			$("#reg_email").parent().after("<div class='validation'>Enter Your Email</div>");
            //alert("Please Select Maximum age");
            exit(); 
        }
        else{
			$("#reg_email").parent().next(".validation").remove(); 
        }
        //Password
        if(password == ''){
		 	$("#reg_pass").parent().next(".validation").remove();
			$("#reg_pass").parent().after("<div class='validation'>Enter Your Password</div>");
            //alert("Please Select Maximum age");
            exit(); 
        }
        else{
			$("#reg_pass").parent().next(".validation").remove(); 
        }
    }); 
	$('.region_btn').click(function(){
		var region_val =  $("#region_select").val();
		if(region_val == ''){
            $("#region_select").parent().next(".validation").remove();
		 	$("#region_select").parent().after("<div class='validation'>Please Select Region</div>");
			//alert("Please Select Region");
            exit(); 
		}
		else{
			$("#region_select").parent().next(".validation").remove(); 
		}
	});	
	$('.birth_btn').click(function(){
		var birth_val =  $("#birth_date").val();
		if(birth_val == ''){
		 	$("#birth_date").parent().next(".validation").remove();
			$("#birth_date").parent().after("<div class='validation'>Enter Your DOB</div>");
            //alert("Please Select Maximum age");
            exit(); 
        }
        else{
			$("#birth_date").parent().next(".validation").remove(); 
        }
	});
	$('.form_submit_btn').click(function(){
		var name =  $("#reg_name").val();
		var email =  $("#reg_email").val();
		var password =  $("#reg_pass").val();
		//Name
		if(name == ''){
		 	$("#reg_name").parent().next(".validation").remove();
			$("#reg_name").parent().after("<div class='validation'>Enter Your Name</div>");
            //alert("Please Select Maximum age");
            exit(); 
        }
        else{
			$("#reg_name").parent().next(".validation").remove(); 
        }
        //Email
        if(email == ''){
		 	$("#reg_email").parent().next(".validation").remove();
			$("#reg_email").parent().after("<div class='validation'>Enter Your Email</div>");
            //alert("Please Select Maximum age");
            exit(); 
        }
        else{
			$("#reg_email").parent().next(".validation").remove(); 
        }
        //Password
        if(password == ''){
		 	$("#reg_pass").parent().next(".validation").remove();
			$("#reg_pass").parent().after("<div class='validation'>Enter Your Password</div>");
            //alert("Please Select Maximum age");
            exit(); 
        }
        else{
			$("#reg_pass").parent().next(".validation").remove(); 
        }
	});
	//first box
	//back button close
	$('.backbtn').click(function(){
		$(this).parents('.slide_box').hide(1000);
		$(this).parents('.slide_box').prev('.slide_box').show(1000);
	});
	//Next button close
	$('.next_btn').click(function(){
		$(this).parents('.slide_box').hide(1000);
		$(this).parents('.slide_box').next('.slide_box').show(1000);
	});
	//add class in skew
	$(".next_btn").click(function () {
	    $(".skew_design").addClass("active");
	    setTimeout(function(){
	    $(".skew_design").removeClass("active"); 
	 }, 500);
	});
	$(".backbtn").click(function () {
	    $(".skew_design").addClass("active");
	    setTimeout(function(){
	    $(".skew_design").removeClass("active"); 
	 }, 500);
	});
	//popup open on click js 
	$(".popup_btn").on('click', function(e){
		var popup_show = $(this).attr('data-show');
		$(".popup_wrapper").removeClass("popup_active");
		$("#"+popup_show).addClass("popup_active");
		e.preventDefault();
	});
	//popup close js
	$(".p_close_btn").on('click', function(){
		$(this).parents (".popup_wrapper").removeClass("popup_active");
	});
	$(".forget_text").on('click', function(){
		$(this).parents (".popup_wrapper").removeClass("popup_active");
	});
	//tab js script
	//show data on click
	$('.tab_menu ul li').on('click',function(){
		$('.tab_menu ul li').removeClass("active");
		$(this).addClass("active");
		var content= $(this).attr('data-show');
		$(".tab_content").removeClass("active");
		$("#"+content).addClass("active");
	});
	//photo show pre upload
	 function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			
			reader.onload = function (e) {
				$('.view_input_img').attr('src', e.target.result);
			}
			
			reader.readAsDataURL(input.files[0]);
		}
	}
	//view image in div
	$(".image_file").change(function(){
		readURL(this);
	});
	//mood change on click
    $("input[name$='mood']").click(function() {
        var test = $(this).val();
        var test1 = $(this).parent(".mood_radio").find("img").attr("src");
        $("#mood_value").find(".mood-title").text(test);
        $("#mood_value").find("img").attr('src', test1);
    });
    //additional option
    $("#additional-options").click(function() {
        $(".additional-options").slideToggle();
    });
    //upload gallery slider
 	  if ($(".gal_upload_slider").length > 0) {
	    $('.gal_upload_slider').owlCarousel({
		    loop:true,
		    margin:10,
		    dots:false,
		    nav:true,
		    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		    items:4,
		    responsive:{
		         0:{
		            items:1
		        },
		        360:{
		            items:2
		        },
		        480:{
		            items:2
		        },
		        500:{
		            items:3
		        },
		        992:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
		});
	}
	//upload gallery slider
 	  if ($(".gal_upload_slider_2").length > 0) {
	    $('.gal_upload_slider_2').owlCarousel({
		    loop:true,
		    margin:10,
		    dots:false,
		    nav:true,
		    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		    items:3,
		    responsive:{
		        0:{
		            items:1
		        },
		        360:{
		            items:2
		        },
		        480:{
		            items:2
		        },
		        500:{
		            items:3
		        },
		        992:{
		            items:3
		        },
		        1000:{
		            items:3
		        }
		    }
		});
	}
	//profile pic course carousel
	if ($(".profile_pic_craousel").length > 0) {
		$(".profile_pic_craousel").owlCarousel({
			items:8,
			loop:true,
			margin:10,
			autoplay:true,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				 0:{
					items:2
				},
				768:{
					items:4
				},
				992:{
					items:6
				},
				1199:{
					items:8,
				},
			}
		});
	}
	//video slider
  	if ($(".video_slider").length > 0) {
	    $('.video_slider').owlCarousel({
		    loop:true,
		    margin:10,
		    dots:false,
		    nav:true,
		    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		    items:1,
		});
	}
    //profile gallery slider js
	  var sync1 = $("#sync1");
	  var sync2 = $("#sync2");
	  var slidesPerPage = 7; //globaly define number of elements per page
	  var syncedSecondary = true;

	  sync1.owlCarousel({
	    items : 1,
	    slideSpeed : 2000,
	    nav: true,
	    autoplay: true,
	    dots: false,
	    loop: true,
	    responsiveRefreshRate : 200,
	    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	  }).on('changed.owl.carousel', syncPosition);

	  sync2
	    .on('initialized.owl.carousel', function () {
	      sync2.find(".owl-item").eq(0).addClass("current");
	    })
	    .owlCarousel({
	    items : slidesPerPage,
	    dots: false,
	    nav: true,
	    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	    smartSpeed: 200,
	    slideSpeed : 500,
	    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
	    responsiveRefreshRate : 100,
	    responsive:{
		        0:{
		            items:2
		        },
		        360:{
		            items:3
		        },
		        480:{
		            items:4
		        },
		        500:{
		            items:5
		        },
		        600:{
		            items:6
		        },
		        768:{
		            items:7
		        },
		        992:{
		            items:6
		        },
		        1100:{
		            items:6
		        },
		        1200:{
		            items:slidesPerPage
		        }
		    }
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
	   //Datepicker
	    if ($(".datepicker").length > 0) {
	     $(".datepicker").datepicker({
	        dateFormat: "dd-mm-yy",
	        changeYear: true,
	      });
	   }
	   //Datepicker
	    if ($(".age_datepicker").length > 0) {
	     $(".age_datepicker").datepicker({
	        dateFormat: "dd-mm-yy",
	        changeYear: true,
			minDate: '-100y',
			maxDate: '-18y',
			yearRange: "-100:+0"
	      });
	   }
	   //slider height
	   var win_h = $(document).outerHeight();
	   //var win_w = $(window).width();
	   	$(".full_height_slider").css("height",win_h);
	   //add image on click
	   /*$(".l_user_img img").on("click", function () {
	   	var imgpath = $(this).attr('src');
	   	$(".banner_left_11 img").attr('src',imgpath);
	   });*/

	   //landing form submit
	   $(document).ready(function(){
		$('#form_submit_id').on('submit', function(e){
                //Stop the form from submitting itself to the server.
               // e.preventDefault();
                var email = $('#reg_email').val();
                $.ajax({
                    type: "POST",
                    url: 'submission.php',
                    data: {email: email},
                    success: function(data){
                        //alert(data);
                    }
                });
            });
        }); 
})(jQuery);