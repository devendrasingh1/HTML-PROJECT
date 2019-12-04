$(function() {
    //form validation
    $(document).on("click", ".match_btn", function() {
        var dob =  $("#birth_date").val();
        var name =  $("#your_name").val();
        var email =  $("#your-email").val();
        var password =  $("#password").val();
        //dob
        if(dob == ''){
            $("#birth_date").parent().next(".validation").remove();
            $("#birth_date").parent().after("<div class='validation'>Please Select DOB</div>");
           exit(); 
        }
        else{
            $("#birth_date").parent().next(".validation").remove();
        }
         //Name
        if(name == ''){
            $("#your_name").parent().next(".validation").remove();
            $("#your_name").parent().after("<div class='validation'>Enter Your Name</div>");
            exit(); 
        }
        else{
            $("#your_name").parent().next(".validation").remove();
        }
        //Email
        if(email == ''){
            $("#your-email").parent().next(".validation").remove();
            $("#your-email").parent().after("<div class='validation'>Enter Your Email</div>");
            exit(); 
        }
        else{
            $("#your-email").parent().next(".validation").remove();
        }
        //Password
        if(password == ''){
            $("#password").parent().next(".validation").remove();
            $("#password").parent().after("<div class='validation'>Enter Your Password</div>");
            exit(); 
        }
        else{
            $("#password").parent().next(".validation").remove();
        }
    });
    //form validation
    $(document).on("click", ".next_btn", function() {
        var ag_val =  $("#min_age").val();
        var ag_val2 =  $("#max_age").val();
        var region =  $("#region_home").val();
        if(ag_val == ''){
            $("#min_age").parent().next(".validation").remove();
            $("#min_age").parent().after("<div class='validation'>Please Select Minimum age</div>");
			//alert("Please Select Minimum age");
            $(this).parent().show().next().hide();
            exit(); 
        }
        else{
			$("#min_age").parent().next(".validation").remove();
        }
        if(ag_val2 == ''){
            $("#max_age").parent().next(".validation").remove();
            $("#max_age").parent().after("<div class='validation'>Please Select Maximum age</div>");
			//alert("Please Select Maximum age");
            $(this).parent().show().next().hide();
            exit(); 
        }
        else{
			$("#max_age").parent().next(".validation").remove(); 
        }
         if(region == ''){
            $("#region_home").parent().next(".validation").remove();
            $("#region_home").parent().after("<div class='validation'>Please Select Region</div>");
			//alert("Please Select Region");
            $(this).parent().show().next().hide();
            exit(); 
        }
        else{
			$("#region_home").parent().next(".validation").remove(); 
        }
    }); 

    $(document).on("click", ".next", function(e) {
        e.preventDefault();
        $(this).parent().hide().next().fadeIn();
    });

    $(document).on("click", ".run_loading", function(e) {
        e.preventDefault();
        $(this).parent().hide().next().fadeIn();
        $(".step4 .loading").show();
        run_loading_run_1("1000");
        run_loading_run_2("2250");
        run_loading_run_3("3000");
        run_loading_run_4("4000");
    });

})
//Datepicker
    jQuery(document).ready( function($) {    
        if ($(".age_datepicker").length > 0) {
         $(".age_datepicker").datepicker({
            dateFormat: "dd-mm-yy",
            changeYear: true,
            minDate: '-100y',
            maxDate: '-18y',
            yearRange: "-100:+0"
          });
       }
    });
jQuery(document).ready( function($) {        
$( '.verify' ).click( function() {

    //getNextStep( $( this ) );

    verifyAnimation();

  });
  
});

$(document).ready(function(){
$('#ff-form').on('submit', function(e){
            //Stop the form from submitting itself to the server.
           // e.preventDefault();
            var email = $('#your-email').val();
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
          
function verifyAnimation() {

  var chatLoadDelay = 2000;

  $( '#verify li' ).each( function() {

    $( this ).delay( chatLoadDelay ).animate( { opacity: 1 }, 0, function() { $( this ).css( 'display', 'block' ) } );
    chatLoadDelay = chatLoadDelay + 1000;

  });

  setTimeout( function() {

    jQuery( '.verify_container .loader' ).hide();
    jQuery( '.verify_container .btn-primary' ).css( 'display', 'block' );

  }, 8000 );

  setInterval( function() {

    online = $( '#verify li:nth-child(3) b' );
    online_count = eval( online.html() );

    online.delay( 1200 ).animate( { opacity: 1 }, 0, function() { online.html( online_count + 1 ) } );
    online.delay( 1500 ).animate( { opacity: 1 }, 0, function() { online.html( online_count - 1 ) } );
    online.delay( 1500 ).animate( { opacity: 1 }, 0, function() { online.html( online_count + 1 ) } );

  }, 6000 );

}

function getRandomNumber(minRange, maxRange) {
    return Math.floor(Math.random() * (maxRange + 1) + minRange);
}



window.onload = function() {
    const rand = getRandomNumber(0, 200);
    const randid = getRandomNumber(1000, 5000);
    const randidv = getRandomNumber(3000, 5000);
   // document.getElementById("yourNumber").innerHTML = rand;
    $('#active').html(rand);
    $('#ssid').html(randid);
    $('#verified').html(randidv);
};