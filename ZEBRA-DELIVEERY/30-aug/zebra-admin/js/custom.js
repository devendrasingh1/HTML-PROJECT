// JavaScript Document

// Loader

 jQuery("body").prepend('<div class="loader">Loading...</div>');
    jQuery(document).ready(function() {
        jQuery(".loader").remove();
    });

// Back to Top

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

// Sticky

$(window).scroll(function() {
    if($(this).scrollTop()>5) {
        $( ".navbar" ).addClass("fixed-me");
    } else {
        $( ".navbar" ).removeClass("fixed-me");
    }
});


// date
$( "#datepicker") .datepicker();


