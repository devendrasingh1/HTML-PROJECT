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
  $(".login_show_btn").on('click',function(){
    $('#signup_popup').modal('hide');
  });
	//append dymanic field on click in input
	 var j = 1;
    $('.add_field').on('click', function(){
		j++;
		var append_data = ('<div class="new_row" id="trow'+j+'"><input type="text" name="addtional_b[]" placeholder="Add Business location"><span class="field_btn remove_field" id="'+j+'"><i class="fa fa-times"></i></span></div>');
		$('.addition_business').append(append_data);
    });
	//remove field
	$(document).on('click', '.remove_field', function(){
		var button_id = $(this).attr("id");
		$('#trow'+button_id+'').remove();
    });

   //Sidebar menu responsive
    $(".dashboard_nav > ul > li > ul").parents("li").addClass("dropdown_menu");
    $(".dropdown_menu").on('click', function(){
    $(this).children("ul").slideToggle(500);
    });
     $(".dropdown_menu > a ").on('click', function(e){
      e.preventDefault();
  });
    $(".dropdown_menu").append("<span class='caret_down'><i class='fa fa-angle-down'></i></span>");
    //message menu dropdown
    $(document).on('click', '.msg_menus_icon', function(){
		$(".msg_dropdown").slideToggle(300);
    });
    //sidebar full height
    var win_h = $(window).outerHeight();
    var win_w = $(window).width();
    if (win_w > 991) {
    	$(".dashboard_sidebar").css({'height':win_h});
    }
    else{

    }
    //Datepicker
    if ($(".datepicker").length > 0) {
     $(".datepicker").datepicker({
        dateFormat: "dd-mm-yy",
        changeYear: true
      });
   } 
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
    //bootsrape selectpicker
    if ($(".selectpicker").length > 0) {
      $('.selectpicker').selectpicker();
    }
    //accordion css start
    $(".panel_heading").on("click", function(){
      $(this).next(".panel_content").slideToggle(300);
      $(".panel_heading").not(this).next(".panel_content").slideUp(300);
    });
    $(".panel_content.active").show();
    

    //append data in skills section
    var k = 1;
    $('.add_skill_btn').on('click', function(){
      k++;
      var append_data = ('<div class="group_wrapper n_group_wrapper " id="grp_row'+k+'"><div class="form_group"><div class="row"><div class="col-md-6 label_wrap"><div class="form_label">sklills and attributes</div></div><div class="col-md-6"><div class="form_input select_box"><select class="selectpicker" name="skills[]"><option>Master in Fine Arts</option><option>Master in Fine Arts</option><option>Master in Fine Arts</option><option>Master in Fine Arts</option><option>Master in Fine Arts</option></select></div></div></div></div><div class="form_group"><div class="row"><div class="col-md-6 label_wrap"><div class="form_label">licence and endorsement</div></div><div class="col-md-6"><div class="form_input select_box"><select class="selectpicker" name="licence[]"><option>Full NZ Drivers licence</option><option>Restricted NZ Drivers licence</option><option>No Drivers licence</option><option>International Drivers licence</option><option>Bar Manager licence</option><option>LCQ</option><option>Forklift endorsement</option></select></div></div></div></div><div class="form_group"><div class="row"><div class="col-md-6 label_wrap"><div class="form_label">Description</div></div><div class="col-md-6"><div class="form_input"><textarea name="description[]"></textarea><span class="input_text_msg">(You can write maximum of 50 characters)</span></div></div></div></div><span class="remove_field skill_remove" id="'+k+'"><i class="fa fa-times"></i></span></div>');
      $('.append_skill_data').append(append_data);
      if ($(".selectpicker").length > 0) {
        $('.selectpicker').selectpicker();
      }
    });
    //remove data in work profile
    $(document).on('click', '.skill_remove', function(){
      var button_id = $(this).attr("id");
      $('#grp_row'+button_id+'').remove();
    });

    //append data in Employe history section
    var l = 1;
    $('.add_employ_btn').on('click', function(){
      l++;
      var append_data = ('<div class="group_wrapper n_group_wrapper " id="egrp_row'+l+'"><div class="form_group"><div class="row"><div class="col-md-6 label_wrap"><div class="form_label">Job title</div></div><div class="col-md-6"><div class="form_input select_box"><select class="selectpicker"><option>Select</option><option>Developer</option><option>Designer</option><option>Ui Designer</option></select></div></div></div></div><div class="form_group"><div class="row"><div class="col-md-6 label_wrap"><div class="form_label">Select Date</div></div><div class="col-md-6 date_inputs"><div class="form_input"><div class="form_label">From Date</div><input type="text" class="datepicker" name="fromdate"></div><div class="form_input"><div class="form_label">To Date</div><input type="text" class="datepicker" name="todate"></div></div></div></div><div class="form_group"><div class="row"><div class="col-md-6 label_wrap"><div class="form_label">Description</div></div><div class="col-md-6"><div class="form_input"><textarea name="description"></textarea><span class="input_text_msg">(You can write maximum of 50 characters)</span></div></div></div></div><div class="form_group"><div class="row"><div class="col-md-6 label_wrap"><div class="form_label">Tell us about yourself</div></div><div class="col-md-6"><div class="form_input"><textarea name="about_description"></textarea><span class="input_text_msg">(You can write maximum of 100 characters)</span></div></div></div></div><span class="remove_field emp_remove" id="'+l+'"><i class="fa fa-times"></i></span></div>');
      $('.append_employ_data').append(append_data);
    //Selectpicker
      if ($(".selectpicker").length > 0) {
        $('.selectpicker').selectpicker();
      }
    //Datepicker
    if ($(".datepicker").length > 0) {
     $(".datepicker").datepicker({
      dateFormat: "dd-mm-yy",
      changeYear: true
      });
    }
      });
    //remove data in work profile
    $(document).on('click', '.emp_remove', function(){
      var button_id = $(this).attr("id");
      $('#egrp_row'+button_id+'').remove();
    });
    //autocomplete country on search
     $(function() {
            var availableTutorials  =  [
               "Afghanistan",
               "Albania ",
               "Algeria",
               "Andorra",
               "Angola",
               "Antigua and Barbuda",
               "Argentina",
               "Armenia",
               "Australia",
               "Austria",
               "Azerbaijan",
               "The Bahamas",
               "Bahrain",
               "Bangladesh",
               "Barbados",
               "Belarus",
               "New Zealand",
            ];
            if ($(".country_autocomplete").length > 0) {
                $( ".country_autocomplete" ).autocomplete({
                   source: availableTutorials
                });
            }
         });
})(jQuery);