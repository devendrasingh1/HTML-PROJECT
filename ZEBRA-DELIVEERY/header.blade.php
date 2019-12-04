<!DOCTYPE html>
<html lang="en">
<head>
    <?php
    $helper = new Helper();
    $settings = $helper->settings();
    ?>
    <?php
    ?>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
  <meta name="title" content="{{ $settings['meta_title'] }}">
  <meta name="description" content="{{ $settings['meta_description'] }}">
  <meta name="keywords" content="{{ $settings['meta_key'] }}">
  <meta name="author" content="">
  <title>{{ env('APP_NAME') }}</title>
  <link rel="shortcut icon" type="image/png" href="{{ asset('public/images/fevicon.png') }}"/>
  <link href="{{ asset('public/css/font-awesome.min.css') }}" rel="stylesheet">
  <link href="{{ asset('public/css/bootstrap.min.css') }}" rel="stylesheet">
  @if(Request::segment(1) == 'profile' || Request::segment(1) == 'profile-test') 
  <link rel="stylesheet" href="{{ asset('public/css/owl.carousel.min.css') }}">
  <!-- <link href="{{ asset('public/css/ninja-slider.css') }}" rel="stylesheet"> -->
  <link href="{{ asset('public/css/fotorama.css') }}" rel="stylesheet">
  <link rel="stylesheet" href="{{ asset('public/css/croppie.css') }}" />  
  @endif
  <!-- magnific popup -->
  <link href="{{ asset('public/css/magnific-popup.css') }}" rel="stylesheet">
  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css"> 
 <!-- magnific popup -->  
  <link href="{{ asset('public/css/style.css') }}" rel="stylesheet">
  <link href="{{ asset('public/css/responsive.css') }}" rel="stylesheet">
  <script src="{{ asset('public/js/jquery.min.js') }}"></script>
  <script src="{{ asset('public/js/bootstrap.min.js') }}"></script>
  @if(Request::segment(1) == 'profile' || Request::segment(1) == 'profile-test')  
  <script src="{{ asset('public/js/owl.carousel.js') }}"></script>
  <!-- <script src="{{ asset('public/js/ninja-slider.js') }}"></script> -->
  <script src="{{ asset('public/js/fotorama.js') }}"></script>
  <script src="{{ asset('public/js/croppie.js') }}"></script>
  @endif  
  <script src="https://cdn.ckeditor.com/4.11.4/standard/ckeditor.js"></script>
  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.2/css/bootstrap-select.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>  
<!-- Latest compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.2/js/bootstrap-select.min.js"></script>
<!--Firebase chat conf.-->
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-storage.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-messaging.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-functions.js"></script>
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCh56LGkwDZaSlqs5t0LNZBB-ppT0UQm4c",
    authDomain: "flirtengine.firebaseapp.com",
    databaseURL: "https://flirtengine.firebaseio.com",
    projectId: "flirtengine",
    storageBucket: "flirtengine.appspot.com",
    messagingSenderId: "765124051377",
    appId: "1:765124051377:web:63bf28a0cae41e6a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
<!--Firebase chat conf.--> 
<style type="text/css">
    .dropdown-menu{}
    .wlt-drpwn ul li{padding: 5px 10px;}
    .wlt-drpwn ul li:hover{background-color: #ec155a;padding: 5px 10px;color: #fff;}
    .wlt-drpwn button.btn.btn-primary.dropdown-toggle{background-color: #EC155A;border:1px solid #EC155A;}
    .wlt-drpwn button.btn.btn-primary.dropdown-toggle:hover{background-color: #EC155A;border:1px solid #EC155A;}
    header .dropdown.wlt-drpwn .dropdown-toggle{margin: 0px;}
    .wlt-drpwn button.btn.btn-primary.dropdown-toggle{font-size: 14px;font-weight: 600;color: #fff;}
    button.btn.dropdown-toggle.bs-placeholder.btn-default{background-color: #eee;}
    .bootstrap-select .dropdown-toggle .filter-option-inner-inner {
    overflow: hidden;
    color: #000;
    }


    .region-process, #succmess{
    font-size: 14px;
    background: #27a527;
    color: #ffffff !important;
    padding: 5px 10px;
    }
    .profilename-process, #succmess1{
    font-size: 14px;
    background: #27a527;
    color: #ffffff !important;
    padding: 5px 10px;
    }

    .region-process, #succmess12{
    font-size: 14px;
    background: #27a527;
    color: #ffffff !important;
    padding: 5px 10px;
    }
    .profilename-process, #succmess11{
    font-size: 14px;
    background: #27a527;
    color: #ffffff !important;
    padding: 5px 10px;
    }
  </style>
</head>
<body>
  <header>
   <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-xs-3">
        @if (Auth::check())
        <a href="{{ url('search') }}" class="logo"><img alt="" src="{{ asset('public/images/logo.png') }}"></a>
        @else
        <a href="{{ url('/') }}" class="logo"><img alt="" src="{{ asset('public/images/logo.png') }}"></a>
        @endif
      </div>
      <div class="col-md-9 col-xs-9">
        <div class="dropdown pull-right custom tbtwodrop">
          <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-bars"></i>
          </button>
            <input type="hidden" id="mycredit" value="">    
            <?php
            //print_r(Auth::user()->id);
            if (Auth::check()){
                $chatrequest = $helper->getChatRequest(Auth::user()->id);
                $confirmchatrequest = $helper->getConfirmChatRequest(Auth::user()->id);
                $fakechatrequest = $helper->getfakeChatRequest(Auth::user()->id);
                $wallet = $helper->getWallet(Auth::user()->id);
            }else{
                $chatrequest = [];
                $confirmchatrequest = [];
                $fakechatrequest = [];
                $wallet = []; //$helper->getWallet(Auth::user()->id);
            }
            ?>
            <input type="hidden" id="initialcredit" value="{{ ($wallet) ? $wallet->credits : '0' }}">
            <input type="hidden" id="initialpremium" value="{{ ($wallet) ? $wallet->premiums : '0' }}">
          <ul class="dropdown-menu" role="menu" >
            <li role="presentation" ><a role="menuitem" tabindex="-1" href="{{ url('/') }}">Home</a></li>
            @if (Auth::check())
            <li role="presentation"><a role="menuitem" tabindex="-1" href="{{ url('profile') }}/{{ Auth::id() }}">My Profile</a></li>
            <!-- <li role="presentation"><a role="menuitem" tabindex="-1" data-toggle="modal" data-target="#wallet">Wallet</a></li> -->
            @endif
            
            @if (Auth::check() && Auth::user()->status == 1)
            <li role="presentation"><a role="menuitem" tabindex="-1" href="{{ url('setting') }}">Setting</a></li>
            @endif
            @if (Auth::check() && Auth::user()->status == 0)
            <li role="presentation"><a role="menuitem" tabindex="-1" data-toggle="modal" data-target="#notverifyModal">Setting</a></li>    
            @endif  
            <li role="presentation"><a role="menuitem" tabindex="-1" href="{{ url('help-center') }}">Help Center</a>
            </li>
            <!-- <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Promotional Coder</a></li> -->
            <li role="presentation" class="divider"></li>
            @if (Auth::check())
            <li role="presentation"><a role="logout" tabindex="-1" href="{{ url('/') }}/logout">Signout</a></li>
            @endif  
            @if (Auth::check())
                @if(isset($wallet))
                    @if(($wallet->premiums == 0 && $wallet->premiums < time() && (Request::segment(1)) != 'activities'))
                        <li role="presentation" class="mobile_info"><button type="button" class="upgrd" data-plan="premium" id="upgrade_myModal_click" data-toggle="modal" data-target="#upgrade_myModal">Upgrade Account</button></li>
                    @endif
                @else
                  @if(Request::segment(1) != 'activities')
                    <li role="presentation" class="mobile_info"><button type="button" class="upgrd" data-plan="premium" id="upgrade_myModal_click" data-toggle="modal" data-target="#upgrade_myModal">Upgrade Account</button></li>
                  @endif  
                @endif    
            @endif
          </ul>
        </div>
        <nav class="navbar pull-right">
        <ul>
        @if(Request::segment(1) != 'search' && Auth::check())
        <li class="drp_opn">
          <a href="{{ url('/search') }}" class="drp_togle" id="search_profile" >
            <span class="nav-title">Members</span><span class="nav-icon" title="search"><i class="fa fa-search"></i></span>
          </a>
        </li>
        @endif
    <li class="dropdown dropdown-large mobile_info">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="search_profile">
          <span class="nav-title">Contacts</span>
          <span class="nav-icon" title="Contacts"><i class="fa fa-comment-o"></i></span>
        </a>
      <ul class="dropdown-menu pull-right" id="my-contact_option">
        <li>
         <h4 class="chat_title">My Contacts</h4>
         <div class="chat_box no-chat custom-scrl">
          <span id="chat_input_btn"></span>
          <ul id="hedChatHis" class="no-chat-scrl">
          </ul>    
          </div>
        <div class="chat_search">
            <input type="text" placeholder="Search Chat" id="myInput1" id_old="chat_input" class="chat_input">
            <div class="chat-user-btn">
                <span id="chat_input_btn"></span>
            </div>    
          </div>
      </li>
    </ul>
    </li>
    <li class="dropdown dropdown-large mobile_info"><a href="#" class="dropdown-toggle" data-toggle="dropdown" id="search_profile"><span class="nav-title">Chat Request </span> <span class="nav-icon" title="Chat Request"><i class="fa fa-bell"></i></span></a>
      <ul class="dropdown-menu pull-right" id="chat_request_option">
        <li>
         <h4 class="chat_title">Chat Request</h4>
         <div class="chat_box custom-scrl">
            <ul id="hedChatRequest">
            </ul>
          </div>
    </li>
    </ul>
    </li>
    <?php if (Auth::check() && Auth::user()->status == 1){ ?>
  <?php if ($helper->getChatRequestNotification(Auth::user()->id)){ ?>    
    <li><a href="{{ url('inbox') }}" onclick="localStorage.setItem('chatTab', 'inbox');"><span class="nav-title">inbox</span> 
      <span class="nav-icon" title="Inbox"><i class="fa fa-envelope"></i></span></a><span class="notify_text" id="notify"><i class="fa fa-circle"></i></span>
    </li>
    <?php }else { ?>
    <li><a href="{{ url('inbox') }}"><span class="nav-title">inbox</span> 
      <span class="nav-icon" title="Inbox"><i class="fa fa-envelope"></i></span></a><span class="notify_text" id="notify"><i class="fa fa-circle"></i></span>
    </li>
    <?php } ?>
    <li class="">
      <a href="{{ url('activities') }}">
       <span class="nav-title">Activities</span>
       <span class="nav-icon acti_icon"  title="Activity">
        <img class="img_1" src="{{ asset('public/images/icons/activity_icon.png') }}" alt="Activity icon">
        <img class="img_2" src="{{ asset('public/images/icons/activity_icon2.png') }}" alt="Activity icon">
       </span>
      </a>
    </li>
    <li class="">
      <a href="{{ url('matches') }}">
        <span class="nav-title">Hot or Not</span>
        <span class="nav-icon" title="Hot or Not"><i class="fa fa-heart"></i></span>
      </a>
    </li>
       
    <li class="">
      <a href="#" role="menuitem" data-toggle="modal" data-target="#wallet">
        <span class="nav-title">
          <img style="width:24px;" src="{{ asset('public/images/icons/wallet_icon.png') }}">
          <span class="credit_count">Credit
            <span id="updatedwallet">({{ isset($wallet->credits) ? $wallet->credits: '0' }})</span>
          </span>
        </span>
        <span class="nav-icon wallet_img"  title="Wallet">          
          <img class="img_1" src="{{ asset('public/images/icons/wallet_icon.png') }}" alt="Wallet icon">
          <img class="img_2" src="{{ asset('public/images/icons/wallet_icon_red.png') }}" alt="Wallet icon">
        </span>
      </a>
      <span class="credit_count_mb" id="updatedwallet">{{ isset($wallet->credits) ? $wallet->credits: '0' }}</span>
    </li>
      
    <?php }else{ ?>
        <!-- <li><a data-toggle="modal" data-target="#notverifyModal"><span class="nav-title">inbox</span> <span class="nav-icon"><i class="fa fa-envelope"></i></span></a></li> -->
    <?php } ?>
<script>
var cunt = localStorage.getItem("chatCount");
if ('null' != cunt){
  //$('#notify').html(cunt);
  if(cunt == 0){
    $('#notify').hide();
  }else{
    $('#notify').show();
  }
}
</script>
@if (Auth::check())
    @if(isset($wallet))
        @if(($wallet->premiums == 0 && $wallet->premiums < time() && (Request::segment(1)) != 'activities'))
            <li class="desktop-info"><button type="button" class="btn btn-info btn-lg upgrd" data-toggle="modal" data-target="#upgrade_myModal" data-plan="premium"><span class="nav-title">Upgrade account </span></button></li>
        @endif
    @else
      @if((Request::segment(1)) != 'activities')
        <li class="desktop-info"><button type="button" class="btn btn-info btn-lg upgrd" data-toggle="modal" data-target="#upgrade_myModal" data-plan="premium"><span class="nav-title">Upgrade account </span></button></li>
      @endif  
    @endif    
@endif
</ul>
</nav>
</div>
<!--end of col -->
</div>
</div>
<script type="text/javascript">
$(document).ready(function(){
  $('.s_lang').selectpicker();
});
</script>
<script type="text/javascript">
  $(document).ready(function(){
    $('.drp_togle').click(function(){
      $('.dropdwn_opn').toggle();
    });
    $('.close_dropdwn').click(function(){
      $(this).parents ('.dropdwn_opn').hide();
    });
  });
</script>
</header>
@if(Request::segment(1) != 'search')
<!-- Search popup Start -->
<div id="search_popup" class="modal fade" role="dialog">  
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <div class="search_profile_match" id="search_profile_option">
          <h3>Search for Your Matches </h3>
            <form method="get" action="{{ url('search') }}">
              <div class="row">
                  <div class="col-md-12">
                    <input type="text" id="player" placeholder="Profile Name" id="profile_name" name="profile_name" class="form-control">              
                  </div>
              </div>
              <?php
              if(isset($users)){
                  if($users->seeking_val == 1) { $v1 = 1; $op1 = 'Men'; $v2 = 2; $op2 = 'Women'; }else{ $v2 = 1; $op2 = 'Men'; $v1 = 2; $op1 = 'Women'; }        
              }else{
                  $v1 = 1; $op1 = 'Men'; $v2 = 2; $op2 = 'Women';
              }        
              ?>    
              <div class="row">
                <div class="col-md-6 col-xs-6">
                  <select class="trackable" name="seeking">
                      <option value="<?=$v1?>"><?=$op1?></option>
                      <option value="<?=$v2?>"><?=$op2?></option>
                      <option value="">All</option>
                  </select>
                </div>
                <div class="col-md-6 col-xs-6 age_field">
                 <label>Age</label>
                 <span class="data-lower">
                   <span class="customized-select">
                    <select name="min_age" class="lower" >
                      <option value="18">18</option>
                      <option value="20">20</option>
                      <option value="25">25</option>
                      <option value="30">30</option>
                      <option value="35">35</option>
                      <option value="40">40</option>
                      <option value="45">45</option>
                      <option value="50">50</option>
                      <option value="55">55</option>
                      <option value="60">60</option>
                      <option value="65">65</option>
                      <option value="70">70</option>
                      <option value="75">75</option>
                    </select>
                  </span>
                </span>
                <span class="separator text-wrapper">—</span>
                <span class="data-wrapper">
                  <span class="customized-select">
                    <select name="max_age" class="higher">
                      <option value="20">20</option>
                      <option value="25">25</option>
                      <option value="30" selected>30</option>
                      <option value="35">35</option>
                      <option value="40">40</option>
                      <option value="45">45</option>
                      <option value="50">50</option>
                      <option value="55">55</option>
                      <option value="60">60</option>
                      <option value="65">65</option>
                      <option value="70">70</option>
                      <option value="75">75</option>
                      <option value="80">80+</option>        
                    </select>
                  </span>
                </span>
              </div>
            </div>
           <div class="row">
             <div class="col-md-6 col-xs-6">
              <select name="state" id="prof_region" class="home_hometown" onChange="getCityByState(this.value);">
               <option selected="" value="">Region</option>             
              </select>        
             </div>
             <div class="col-md-6 col-xs-6">      
              <select name="city" id="city" class="home_hometown">
               <option selected="" value="">City</option>
              </select>        
             </div> 
           </div>
           <div class="row presence_status">
             <div class="col-md-12">
               <input type="checkbox" name="online" value="1"><label>Online</label>
               <!-- <input type="checkbox" value="available"><label>Available for Video Chat</label> -->
             </div>
           </div>
           <div class="row">
             <span id="additional-options" class="col-md-12">Add more options</span>
           </div>
           <div class="additional-options row">
             <div class="col-xs-4">
              <!-- required for floating -->
              <!-- Nav tabs -->
              <ul class="nav nav-tabs tabs-left">
                <li class="active"><a href="#Interests" data-toggle="tab">Interests</a></li>
                <li><a href="#Relationship" data-toggle="tab">Relationship</a></li>
              </ul>
            </div>
            <div class="col-xs-8">
              <!-- Tab panes -->
              <div class="tab-content">
                <div class="tab-pane active" id="Interests">
                  <ul>
                   @if(!empty($all_interests) && count($all_interests)>0)
                    @foreach($all_interests as $single)
                      <li><label><input type="checkbox" name="s_interest[]" class="interests option" value="{{ $single->id }}"><span class="name">{{ $single->name }}</span></label></li>
                    @endforeach
                  @endif 
                 </ul>
               </div>
               <div class="tab-pane" id="Education">
                <ul>
                  <li>
                    <label><input type="radio" name="s_education" class="educations option" value="High school" ><span class="name">High school</span></label>
                  </li>
                  <li>
                    <label><input type="radio" name="s_education" class="educations option" value="College" ><span class="name">College</span></label>
                  </li>
                  <li>
                    <label><input type="radio" name="s_education" class="educations option" value="Associates degree" ><span class="name">Associates degree</span></label>
                  </li>
                  <li>
                    <label><input type="radio" name="s_education" class="educations option" value="Bachelors degree" ><span class="name">Bachelors degree</span></label>
                  </li>
                  <li>
                    <label><input type="radio" name="s_education" class="educations option" value="Graduate degree" ><span class="name">Graduate degree</span></label>
                  </li>
                  <li>
                    <label><input type="radio" name="s_education" class="educations option" value="PhD" ><span class="name">PhD</span></label>
                  </li>
                </ul>
              </div>
              <div class="tab-pane" id="Languages">
                <select name="s_languages[]" multiple class="s_lang">
                  @if(!empty($all_languages) && count($all_languages)>0)
                    @foreach($all_languages as $single)
                      <option value="{{ $single->id }}">{{ $single->name }}</option>
                    @endforeach
                  @endif 
                  </select>   
              </div>
                <div class="tab-pane" id="Relationship">
                  <ul>
                    <li><label><input type="radio" name="s_relationship" class="relationships option" value="1" ><span class="name">Never married</span></label>
                    </li>
                    <li><label><input type="radio" name="s_relationship" class="relationships option" value="2" ><span class="name">Separated</span></label>
                    </li>
                    <li><label><input type="radio" name="s_relationship" class="relationships option" value="3" ><span class="name">Divorced</span></label>
                    </li>
                    <li><label><input type="radio" name="s_relationship" class="relationships option" value="4" ><span class="name">Widowed</span></label>
                    </li>
                  </ul>
                </div>
                <div class="tab-pane" id="Kids">
                  <ul>
                    <li>
                      <label><input type="radio" name="s_kids" class="children option " value="1"><span class="name">Have kids</span></label>
                    </li>
                    <li>
                      <label><input type="radio" name="s_kids" class="children option " value="0"><span class="name">No kids</span></label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row text-center">
           <div class="col-md-12"><button type="submit" class="btn btn-bg">Show Matches</button></div>
         </div>
       </form>
      </div>
      </div>
    </div>
  </div>
</div>
<!-- search popup End -->
@endif
<div id="wallet" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-body">
         <button type="button" class="close" data-dismiss="modal">&times;</button>
        <div class="wallet_outer text-center">
            <div class="wallet_col">
              <div class="wallet_p_box">
                  <img src="{{ asset('public')  }}/images/wallet_premium.png">
                  <h2>Premium</h2>
                  <h3>{{ (isset($wallet->premiums) && ($wallet->premiums > 0) ) ? date('d M Y',($wallet->premiums)): 'No' }}</h3>
                  <a class="wallet_btn btn btn-info" data-plan="premium" data-toggle="modal" data-target="#upgrade_myModal">Buy Premium</a>    
              </div>
            </div>
            <div class="wallet_col">
              <div class="wallet_p_box">
                  <img src="{{ asset('public')  }}/images/wallet_credit.png">
                  <h2>credit</h2>
                  <h3 id="updatedwallet">{{ isset($wallet->credits) ? $wallet->credits: '0' }}</h3>
                  <a class="wallet_btn btn btn-info credit_btn" data-plan="credit" data-toggle="modal" data-target="#upgrade_myModal">Add Credits</a>        
              </div>
            </div>
            <div class="wallet_col">
              <div class="wallet_p_box">
                  <img src="{{ asset('public')  }}/images/wallet_diamond.png">
                  <h2>diamond</h2>                  
                  <div class="add-diamonds">
                    <h3 id="updateddiamonds">{{ isset($wallet->diamonds) ? $wallet->diamonds: '0' }}  </h3>
                    @if( isset($wallet->credits) && ($wallet->credits > '0') )    
                    <form action="{{ url('/add-diamonds') }}" method="post">
                    <div class="diamond-select">
                    <select name="diamonds" class="form-control">
                          <option value="3">3 Diamonds for 1 Credit</option>
                          <option value="6">6 Diamonds for 2 Credit</option>
                          <option value="9">9 Diamonds for 3 Credit</option>
                          <option value="12">12 Diamonds for 4 Credit</option>
                          <option value="15">15 Diamonds for 5 Credit</option>        
                    </select>
                    <button type="submit" class="wallet_btn btn btn-info">ADD</button>
                    </div>    
                    </form>
                    @endif        
                  </div>          
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="main_wrapper">
<!-- main_wrapper -->
