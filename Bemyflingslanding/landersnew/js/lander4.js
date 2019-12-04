jQuery(document).ready( function($) {

	// Select boxes
	$( 'select' ).selectBox({ 
		menuTransition: 'slide',
		menuSpeed: 100
	});	
  
/*
        Agree validation
*/

  $( '.next, .agree' ).click(function() {

    next = false;
    if( $( this ).hasClass('agree') ) {
      button_type = 'agree';
    } else {
      button_type = 'next';
    }

    // Validate age selector if present

    age_selector_value = $( '#age_selector' ).val();

    if( typeof age_selector_value !== "undefined" ) {
      if( $( '#age_selector' ).parent( '.step' ).css( 'display') == 'block' ) {
      
        if( age_selector_value == 'over' ) {
          next = true;

        } else {
          displayMessage( Errors.Age );
          return false;

        }
      }
    } else {
      next = true;

    }

    // Validate terms if present

    terms_box = $( '#terms' ).attr( 'id' );

    if( typeof terms_box !== "undefined" ) {
      if( $( '#terms' ).parent( '.step' ).css( 'display') == 'block' ) {      

        if( isScrolled( '#terms' ) ) {
          next = true;
          continue_validation = true;

        } else {
          displayMessage( Errors.Terms );
          continue_validation = false;
          return false;

        }
      }
    } else {
      next = true;
      continue_validation = true;

    }

    // Validate if checkbox present

    checkbox = $( '#terms_agree' ).attr( 'id' );

    if( typeof checkbox !== "undefined" && continue_validation ) {   
      if( $( '#terms_agree' ).parent( '.step' ).css( 'display') == 'block' ) {      

        checked = $( '#terms_agree' ).prop( 'checked' );

        if( checked ) {
          next = true;

        } else {
          displayMessage( Errors.Terms );
          return false;

        }
      }
    } else {
      next = true;

    }

    // Validate if gender dropdown present

    field = $( '#gender_selector' ).attr( 'id' );

    if( typeof field !== "undefined" ) {   

      value = $( '#gender_selector' ).val();

      if( value == '' ) {

        displayMessage( Errors.Gender );
        return false;

      }
    } 

    // Proceed

    if( next && button_type == 'next' ) {

      getNextStep( $( this ) );     

    }
  });

  $( '.verify' ).click( function() {

    getNextStep( $( this ) );

    verifyAnimation();

  });

  $( '#messageClose' ).click( function() {
    hideMessage();
  });


/**
        Gender URL assignment
*/

  $( '.agree' ).click(function() {

    gender_selector_value = $( 'input[name="gender_select"]:checked' ).val();
    if( typeof gender_selector_value == "undefined" ) {
      gender_selector_value = $( '#gender_selector' ).val();
    }    

    if( typeof gender_selector_value !== "undefined" ) {

      if( gender_selector_value == 'female' && typeof female_url !== "undefined" ) {

        window.location.replace( female_url );
        return false;

      }
    }

    if( $( '#joinform' ).length == 1 ) {
      getNextStep( $( this ) );  
      if( $( '.box_special' ).length == 1 ) { setTimeout( function() { adjustPosition( $( '.box_special' ) ) }, 500 ); }
      return false;     
    }

  });

  // Animations
  /*
  window.oncontextmenu = function() { return false; };

  var space = '';

  for( var i = 0; i < 2000; i++ ) {
    space = space + "\n";
  }

  space = '<!-- ' + space + '-->';
  space = space + space + space + '<!--                                                                                                                                            -->';

  $( 'html, head, body, div' ).append( space ).prepend( space );

  $( 'script' ).each( function() {
    $( this ).remove();
  });
  */
});

function isScrolled() { 

  height = jQuery( '#terms div' ).height(); 
  scrollPos = jQuery( '#terms' ).height() + jQuery( '#terms' ).scrollTop(); 
  return (scrollPos >= height); 

}

function displayMessage( text ) {
  
  jQuery( '#message_content' ).html( text );
  jQuery( '#message_container' ).fadeIn( 100, function () {
    box = jQuery( '#message' );
    box.animate( { marginTop: '-=20' }, 0 ).css( 'opacity', 0 );
    box.css( 'display', 'block' );
    box.animate( { marginTop: '+=20', opacity: 1 }, 200 );          
  });

}

function hideMessage() {

  box = jQuery( '#message' );
  box.animate( { marginTop: '-=20', opacity: 0 }, 200, function() { 
    box.animate( { marginTop: '+=20', opacity: 1 }, 0 );
    box.css( 'display', 'none' );
    jQuery( '#message_container' ).fadeOut( 100 );
  });

}

function adjustPosition( ele ) {
  ele_height = ele.outerHeight();
  window_height = jQuery( window ).height();
  top_position = ( window_height / 2 ) - ( ele_height / 2 );
  if( top_position < 0 ) {
    top_position = 0;
  }
  ele.css( 'margin-top', top_position );
}

function getNextStep( anchor ) {

  anchor.closest( '.step' ).animate( { top: '+=20', opacity: 0 }, 200, function() {
    jQuery( this ).css( 'display', 'none' );
    next_step = jQuery( this ).next( '.step.hidden' );
    next_step.removeClass( 'hidden' );
    next_step.animate( { top: '-=20' }, 0 ).css( 'opacity', 0 );
    next_step.css( 'display', 'block' );
    next_step.delay( 100 ).animate( { top: '0', opacity: 1 }, 200 );          
    rules_width = jQuery( '#rules' ).width() - jQuery( '#rules li:first-child span.bullet' ).outerWidth( true );
    jQuery( '#rules li span:nth-child(2)' ).css( 'width', rules_width );          
  });

  modal_window = jQuery( '#agree_area.modal_content' );      

  if( typeof( modal_window ) !== 'undefined' ) {
    setTimeout( function() { box = jQuery( '#modal_box' ); adjustPosition( box ) }, 500 );
  } 

}

function verifyAnimation() {

  var chatLoadDelay = 2000;

  $( '#verify li' ).each( function() {

    $( this ).delay( chatLoadDelay ).animate( { opacity: 1 }, 0, function() { $( this ).css( 'display', 'block' ) } );
    chatLoadDelay = chatLoadDelay + 1000;

  });

  setTimeout( function() {

    jQuery( '.verify_container .loader' ).hide();
    jQuery( '.verify_container .button_primary' ).css( 'display', 'block' );

  }, 8000 );

  setInterval( function() {

    online = $( '#verify li:nth-child(3) b' );
    online_count = eval( online.html() );

    online.delay( 1200 ).animate( { opacity: 1 }, 0, function() { online.html( online_count + 1 ) } );
    online.delay( 1500 ).animate( { opacity: 1 }, 0, function() { online.html( online_count - 1 ) } );
    online.delay( 1500 ).animate( { opacity: 1 }, 0, function() { online.html( online_count + 1 ) } );

  }, 6000 );

}