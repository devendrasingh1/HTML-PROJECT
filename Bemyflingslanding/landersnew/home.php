<!-- Slider Section Start -->
	<div class="section slider_section">
		<!-- Slider Start -->
		<div class="home_slider owl-carousel owl-theme">
			<!-- item start -->
			<div class="item">
				<div class="slide_item">
					<img src="<?php echo base_url(); ?>assets/images/slider/slide_1.jpg" alt="" class="img-responsive">
					<!-- slider caption -->
					<div class="slider_caption_wrap">
						<div class="slider_caption_center">
							<div class="slider_caption">
								<h1>Your Business Delivery Partner</h1>
								<p>
									Looking to enhance your business operations? Partner with Zebra Delivery for your delivery requirements, and only pay the distance fee. 
								</p>
								<div class="slider_buttons">
									<a href="<?php echo base_url('home/login/customer'); ?>" target="_blank" class="site_button">Book Now</a>
									<a href="#quote_sec" class="site_button app_scroll_btn">Get A Quote</a>
								</div>
							</div>
						</div>
					</div>
					<!-- slider caption -->
				</div>
			</div>
			<!-- item end -->
			<!-- item start -->
			<div class="item">
				<div class="slide_item">
					<img src="<?php echo base_url(); ?>assets/images/slider/slide_2.jpg" alt="" class="img-responsive">
					<!-- slider caption -->
					<div class="slider_caption_wrap">
						<div class="slider_caption_center">
							<div class="slider_caption">
								<h1>Hassle Free Delivery For All Your Needs</h1>
								<p>
									Zebra Delivery deliver many different products and delivery sizes. Book with us, and take the stress out of arranging your package deliveries.
								</p>
								<div class="slider_buttons">
									<a href="<?php echo base_url('home/login/customer'); ?>" target="_blank" class="site_button">Book Now</a>
									<a href="#quote_sec" class="site_button app_scroll_btn">Get A Quote</a>
								</div>
							</div>
						</div>
					</div>
					<!-- slider caption -->
				</div>
			</div>
			<!-- item end -->
			<!-- item start -->
			<div class="item">
				<div class="slide_item">
					<img src="<?php echo base_url(); ?>assets/images/slider/slide_3.jpg" alt="" class="img-responsive">
					<!-- slider caption -->
					<div class="slider_caption_wrap">
						<div class="slider_caption_center">
							<div class="slider_caption">
								<h1>Your Goods Are Always In Safe Hands</h1>
								<p>Zebra Delivery are widely regarded for guaranteeing prompt and safe deliveries. Your items are always handled with care to ensure damage-free transit.</p>
								<div class="slider_buttons">
									<a href="<?php echo base_url('home/login/customer'); ?>" target="_blank" class="site_button">Book Now</a>
									<a href="#quote_sec" class="site_button app_scroll_btn">Get A Quote</a>
								</div>
							</div>
						</div>
					</div>
					<!-- slider caption -->
				</div>
			</div>
			<!-- item end -->
		</div>
		<!-- Slider End -->
	</div>
	<!-- Slider Section End -->
	<!-- feature Section Start -->
	<div class="section features_wrapper">
		<div class="container">
			<div class="col-xl-10 offset-xl-1">
				<!-- row start -->
				<div class="row">
					<div class="col-lg-4 col-md-4 col-sm-12">
						<div class="features_body">
							<a href="<?php echo base_url('home/delivery_option'); ?>" class="f_anchor">
							  <div class="feature_icon">
								<span><i class="fas fa-truck-moving"></i></span>
						 	  </div>
							  <h4>Multiple Delivery Options</h4>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12">
						<div class="features_body">
							<a href="<?php echo base_url('home/peace_of_mind'); ?>" class="f_anchor">
								<div class="feature_icon">
									<span><i class="fas fa-clock"></i></span>
								</div>
								<h4>peace of mind</h4>
							</a>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-12">
						<div class="features_body">
							<a href="#" class="f_anchor">
							   <div class="feature_icon">
								<span><i class="fas fa-paper-plane"></i></span>
							   </div>
							   <h4>How Does It Work</h4>
						    </a>
						</div>
					</div>
				</div>
				<!-- row end -->
			</div>
		</div>
	</div>
	<!-- feature Section End -->
	<!-- Service Section Start -->
	<div class="section service_wrapper pad_top_60 pad_bottom_50">
		<div class="container">
			<div class="section_heading">
				<div class="section_title">
					<h3>We Provide Delivery Services For The Following:</h3>
				</div>
			</div>
			<!-- row start -->
			<div class="row">
				 <?php 
                  if(!empty($service_list)){
                       $i=1;                
                     	foreach ($service_list as $key => $value) {
                       If($i==4){
                       	break;
                       }
	                //print_r($value);
                ?>
				<div class="col-lg-3 col-md-6 col-sm-6 service_col">
					<div class="service_body">
						<div class="service_img">
							<span>
								<img src="<?php echo base_url(SERVICE_IMG_PATH).$value['image']; ?>" alt="" class="img-fluid" />
							</span>
						</div>
						<div class="service_text">
							<h5><?php echo $value['name']; ?> </h5>
						</div>
					</div>
				</div>
          		<?php  $i++; } } ?>
				<div class="col-lg-3 col-md-6 col-sm-6 service_col">
					<div class="service_body">
						<div class="service_img">
							<a href="<?php echo base_url('home/services'); ?>" class="service_icon">
								<i class="fas fa-plus"></i>
							</a>
						</div>
						<div class="service_text">
							<h5>more services</h5>
						</div>
					</div>
				</div>
			</div>
			<!-- row end -->
		</div>
	</div>
	<!-- Service Section End -->
	<!-- Service tab wrapper Start -->
	<div class="section service_tab_wrapper">
		<div class="container">
			<div class="section_heading">
				<div class="section_title">
					<h3>Why us</h3>
				</div>
			</div>
			<!-- row start -->
			<div class="row">
				<div class="col-lg-10 col-sm-12 offset-lg-1">
					<div class="service_tab_list">
						<div class="service_tab active" data-tab="driver">
							<div class="service_tab_inr">
								<div class="tab_img">
									<img src="<?php echo base_url(); ?>assets/images/service/driver.jpg" alt="" class="img-fluid" />
								</div>
								<h3>Drivers</h3>
							</div>
						</div>
						<div class="service_tab" data-tab="customer">
							<div class="service_tab_inr">
								<div class="tab_img">
									<img src="<?php echo base_url(); ?>assets/images/service/customer.jpg" alt="" class="img-fluid" />
								</div>
								<h3>customers</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- row end -->
		</div>
	</div>
	<!-- Service tab wrapper End -->
	<!-- Service tab content Start -->
	<div class="section srvc_content_wrap">
		<!-- Driver tab content Start -->
		<div class="srvc_content active" id="driver">
			<div class="container">
				<div class="srvc_content_head">
					<h2>Zebra Delivery Provide Many Service Options for You To Explore</h2>
				</div>
				<!-- row start -->
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-6">
						<div class="tab_content_box">
							<span class="tab_icon">
								<i class="fas fa-mobile-alt"></i>
							</span>
							<div class="text_cover">
								<h5>Work When It's Convenient</h5>
								<p>
									Become a delivery driver for Zebra Delivery and enjoy the added benefit of choosing your own working hours to suit your lifestyle and other commitments.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6">
						<div class="tab_content_box">
							<span class="tab_icon">
								<i class="fas fa-user-clock"></i>
							</span>
							<div class="text_cover">
								<h5>Timely Distribution Of Salaries</h5>
								<p>
									Zebra Delivery ensure the timely distribution of payments, salaries and bonuses. We strive to ensure the best practice for the development of our drivers.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6">
						<div class="tab_content_box">
							<span class="tab_icon">
								<i class="fas fa-user-friends"></i>
							</span>
							<div class="text_cover">
								<h5>Friendly Service</h5>
								<p>
									Zebra Delivery provides a friendly, professional and functional work environment for our drivers and customers. This helps Zebra Delivery provide the best services possible.
								</p>
							</div>
						</div>
					</div>
				</div>
				<!-- row end -->
			</div>
		</div>
		<!-- Driver content End -->
		<!-- customer tab content Start -->
		<!-- Driver tab content Start -->
		<div class="srvc_content" id="customer">
			<div class="container">
				<div class="srvc_content_head">
					<h2>Zebra Delivery Provide Many Service Options for You To Explore</h2>
				</div>
				<!-- row start -->
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-12">
						<div class="tab_content_box">
							<span class="tab_icon">
								<i class="fas fa-truck-moving"></i>
							</span>
							<div class="text_cover">
								<h5>Quick Deliveries</h5>
								<p>
									Apart from being quick, our delivery service renders different options to mark up your delivery time. From 1 hour to within the day options, we schedule your delivery according to your desired timings.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12">
						<div class="tab_content_box">
							<span class="tab_icon">
								<i class="fas fa-dollar-sign"></i>
							</span>
							<div class="text_cover">
								<h5>Pay Only For Distance</h5>
								<p>
									You pay only for distance for getting a package delivered from faraway places, there are no hidden fees, with no added commissions.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12">
						<div class="tab_content_box">
							<span class="tab_icon">
								<i class="fas fa-map-marked-alt"></i>
							</span>
							<div class="text_cover">
								<h5>Real-Time Tracking</h5>
								<p>
									We have designed our website to facilitate ease and convenience. And that is the reason we provide real-time tracking facilities. This makes it more favourable and desirable.
								</p>
							</div>
						</div>
					</div>
				</div>
				<!-- row end -->
			</div>
		</div>
		<!-- Driver content End -->
		<!-- customer tab content End -->
	</div>
	<!-- Service tab content End -->
	<!-- Delivery banner Start -->
	<div class="section delivery_banner_wrap" id="quote_sec">
		<div class="banner_overlay"></div>
		<div class="container">
			<!-- row start -->
			<div class="row">
				<div class="col-lg-10 col-sm-12 offset-lg-1">
					<!-- Delivery heading -->
					<div class="delivery_heading">
						<h2>Check Your Delivery Amount Here</h2>
						<p>
							Enter a pickup and delivery address below to see estimated prices for deliveries from your business location to your customers
						</p>
					</div>
					<!-- Delivery heading -->
					<!-- Delivery form -->
				<div class="delivery_form">
						<form>
							<div class="row">
								<div class="col-md-4">
									<div class="form_group">
										<input type="text" id="origin-input" placeholder="Enter pickup location">
										<input type="hidden" id="origin-inputc" placeholder="Enter pickup location">
									</div>
								</div>
								<div class="col-md-4">
									<div class="form_group">
										<input type="text" id="destination-input" placeholder="Enter Drop location">
										<input type="hidden" id="destination-inputc" placeholder="Enter pickup location">
									</div>
								</div>

							     <div class="col-md-4">
							 		<div class="form_group">
									   <!--<h2>Delivery Option</h2> -->
										<span id="delivery_type_error" style="color: red"></span>
										<select class="custom-select vehicle_select" id="vehicle_type" onchange="show_price_block(this.value);">
											<option value="">Select Delivery Type</option>
											<?php foreach ($deliveryprice as $key => $value) {?>
											<option value="<?php echo $value['id'] ?>"><?php echo $value['deliveryOption'] ?></option>
											<?php } ?>
										</select>
									</div>
								</div>
							</div>
						</form>
						
						<div class="col-lg-12 col-xl-12 text-center" id="price_div">
							<div class="show_prices">
								<div class="prc_title">
			                     <h3>Price</h3>
		                        </div>
								<span id="description_error" style="color: red"></span>
								<div class="type_vehicle" >
									<!-- <span id="check_price">0.00</span> AUD -->
									<span id="check_pricekm">0.00 </span><span id="pri"> AUD</span>
								</div>
			                     <p>* Price is for indicative purpose only, for detailed pricing please signup and login through customer section.</p>
							</div>
						</div>
					</div>
					 <div id="map"></div>
					<!-- Delivery form -->
				</div>
			</div>
			<!-- row end -->
		</div>
	</div>
	<!-- Delivery banner End -->
	<!-- App Section Start -->
	<!-- <div class="section app_wrapper">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-sm-12">
					<div class="app_thumb_wrap">
						<div class="app_thumb">
							<img src="<?php echo base_url() ?>assets/images/app/app_screen1.png" alt="app screen" class="img-fluid">
						</div>
                    </div>
				</div>
				<div class="col-lg-6 col-sm-12">
					<div class="app_details">
						<h1>Get our App</h1>
						<h4>You can explore more with our allnew app.</h4>
						<ul class="app_list">
                            <li>
                            	<span class="check_icon"><i class="fa fa-check"></i></span>
                            	<div>Select and customise your service in less than 30 sec</div>
                            </li>
                            <li>
                            	<span class="check_icon"><i class="fa fa-check"></i></span>
                           		<div>Modify your booking anytime, anywhere</div>
                        	</li>
                            <li>
                            	<span class="check_icon"><i class="fa fa-check"></i></span>
                            	<div>Access deals and discounts оnly available for app clients
                            	</div>
                        	</li>
                        </ul>
                        <div class="app_download_btn">
                        	<a href="#app_download_strip" class="site_button app_scroll_btn">
                        		Download
                        	</a>
                        </div>
					</div>
				</div>
				<div class="col-lg-3 col-sm-12">
					<div class="app_thumb_wrap">
						<div class="app_thumb">
							<img src="<?php echo base_url() ?>assets/images/app/app_screen2.png" alt="app screen" class="img-fluid">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>-->
	<!-- App Section End -->
	<!-- Contact Section Start -->
	<!--<div class="section contact_wrapper">
		<div class="contact_div_wrapper">
			<div class="contact_left">
				<div class="map_div">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23578.965817982313!2d-71.12256649424367!3d42.37724833215511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1562748830665!5m2!1sen!2sin" frameborder="0" style="border:0" allowfullscreen>
					</iframe>
				</div>
			</div>
			<div class="contact_right">
				<div class="contact_part">
					<h1 class="contact_heading">Contact us</h1>
					<div class="contact_form">
						<form method="post" action="<?php echo base_url('home/contactus');?>">
							<div class="form_group">
								<div class="input_group">
									<label class="form_label">Name</label>
									<input type="text" name="name" class="input">
									<i class="fas fa-user"></i>
									<?php echo form_error('name'); ?>
								</div>
							</div>
							<div class="form_group">
								<div class="input_group">
									<label class="form_label">Email</label>
									<input type="email" name="email" class="input">
									<i class="fas fa-envelope"></i>
									<?php echo form_error('email'); ?>
								</div>
							</div>
							<div class="form_group">
								<div class="input_group">
									<label class="form_label">comment</label>
									<textarea name="comments" class="input"></textarea>
									<i class="fas fa-pencil-alt"></i>
									<?php echo form_error('comments'); ?>
								</div>
							</div>
							<div class="button_group text-center">
								<button type="submit" name="submit" class="site_button submit_btn">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>-->
	<script>
function initialize() {
        var input = document.getElementById('origin-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.setComponentRestrictions(
            {'country': ['Au']});
         google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();
            document.getElementById('origin-inputc').value = place.name;
           // document.getElementById('cityLat').value = place.geometry.location.lat();
           // document.getElementById('cityLng').value = place.geometry.location.lng();
            //alert("This function is working!");
            //alert(place.name);
           // alert(place.address_components[0].long_name);
		  var latlng = new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng());
        var myOptions =
        {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
        };
        map = new google.maps.Map(document.getElementById("map"), myOptions);

        });
	    var input = document.getElementById('destination-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.setComponentRestrictions(
            {'country': ['Au']});
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();
            document.getElementById('destination-inputc').value = place.name;
           // document.getElementById('cityLats').value = place.geometry.location.lat();
           // document.getElementById('cityLngs').value = place.geometry.location.lng();
            //alert("This function is working!");
            //alert(place.name);
           // alert(place.address_components[0].long_name);
		   
		   var latlng = new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng());
        var myOptions =
        {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
        };
        map = new google.maps.Map(document.getElementById("map"), myOptions);

        });	
			
		
    }
    google.maps.event.addDomListener(window, 'load', initialize);
	
	function show_price_block(id) {

		//alert(id);
 	$("#price_div").css("display",'block');
				var pickupadd =$("#origin-input").val();
			if (pickupadd=='') {
		  $("#origin_input_error").html("This Field is required");
		  return ;
	}
		
		var deliveryadd =$("#destination-input").val();
			if (deliveryadd=='') {
		  $("#destination_input_error").html("This Field is required");
		  return ;
	}
			
		$.ajax({		
			url:'<?php echo base_url(); ?>Home/kmbypricehome/',			
			type: 'POST',
			data:{'pickupadd':pickupadd,'deliveryadd':deliveryadd,'id':id},
			success: function(response){ 
           //alert(response);
           
			 document.getElementById('check_pricekm').innerHTML=response;
	     	// $("#check_pricekm").val(response);	
			}
		});	
 	}
</script>