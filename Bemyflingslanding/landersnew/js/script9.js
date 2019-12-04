window.landing = {
    curProfile: 0,
    profiles: {},
    curImage: 0,
    init: function () {
       // landing.getProfiles();
        landing.events();
    },
    events: function () {
        $('.next').on('click', landing.nextStep);
        $('#shakeIt').on('click', landing.shakeForm);
        $('body').on('click', '.profiles .item', landing.shakeForm);
        $('#landing #content .inner .inner-right .form-overlay').on('click', function () {
            $(this).css({opacity: 0, display: "none"})
        });
    },
    getProfiles: function () {
        $.get("profiles.php", {
            niche_a: window.niche_for_ajax,
            filter_a: window.filter_for_ajax
        }).done(function (data) {
            landing.profiles = data;
            for (var i = 0; i < 5; i++) {
                $('.profiles .item').eq(landing.curProfile).append('<img src="' + landing.profiles[landing.curProfile].img + '" alt="">');
                landing.curProfile += 1;
            }
        })
    },
    changeProfile: function () {
        $('.profiles .item').eq(4).hide("fast", function () {
            if (landing.curProfile == 20) {
                landing.curProfile = 0;
            }
            $('.profiles .item').eq(4).remove();
            $('.profiles').prepend('<div class="item" style="display: none;"><img src="' + landing.profiles[landing.curProfile].img + '" alt=""></div>');
            $('.profiles .item').eq(0).show("fast");
            landing.curProfile += 1;
        });
    },
    nextStep: function () {
        clearInterval(window.shakeEvery);

        if ($(this).closest('.step').next('.step').data('type') == 'last') {
            $('.inner-right .inner-form .text-2').hide();
            $('.inner-right .inner-form .text-3').hide();
            $('.inner-right .inner-form #noty').show();
        }

        $('#landing #content .inner .inner-right .form-overlay').css({opacity: 1, display: "block"});
        var $valid = $("#register").valid();
        if (!$valid) {
            return false;
        }
        $(this).closest('.step').hide().next('.step').show();
        if ($(this).data('type') == 'gender') {
            $('#gender').val($(this).data('value'));
        }
        if ($(this).data('type') == 'gender_in') {
            $('#gender_in').val($(this).data('value'));
        }
    },


    shakeForm: function () {
        var el = document.getElementById('form_submit_id');
        el.style.animation = 'none';
        el.offsetHeight;
        el.style.animation = null;
        $('#form_submit_id').addClass('shakeIt');
    },
    changeBigImage: function () {
        if (landing.curImage >= $('.big-image').length) {
            landing.curImage = 0;
        }
        $('.big-image').css({opacity: 0});
        $('.big-image').eq(landing.curImage).css({opacity: 1});
        setTimeout(function () {
            $('.big-image .balloon').css({opacity: 1});
        }, 1000);
        setTimeout(function () {
            $('.big-image .balloon').css({opacity: 0});
        }, 9000);
        landing.curImage += 1;

    },
    counterBlink: function () {
        var blinkTime = 100;
        $('.hours').fadeOut(blinkTime).fadeIn(blinkTime).fadeOut(blinkTime).fadeIn(blinkTime).fadeOut(blinkTime).fadeIn(blinkTime);
        $('.mins').fadeOut(blinkTime).fadeIn(blinkTime).fadeOut(blinkTime).fadeIn(blinkTime).fadeOut(blinkTime).fadeIn(blinkTime);
        $('.secs').fadeOut(blinkTime).fadeIn(blinkTime).fadeOut(blinkTime).fadeIn(blinkTime).fadeOut(blinkTime).fadeIn(blinkTime);
    },
    map: function () {
        $('.map').remove();
        $('.big-image').fadeIn();
        setTimeout(function () {
            $('.big-image .balloon').css({opacity: 1});
        }, 1000);
        setTimeout(function () {
            $('.big-image .balloon').css({opacity: 0});
        }, 9000);
        var bigImage = setInterval(landing.changeBigImage, 10000);
    }
};
landing.init();
var slider = setInterval(landing.changeProfile, 10000);
var counterBlink = setInterval(landing.counterBlink, 5000);
window.shakeEvery = setInterval(landing.shakeForm, 5000);
var map = setTimeout(landing.map, 8000);