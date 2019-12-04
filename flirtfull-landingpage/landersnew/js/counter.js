$(document).ready(function () {
    window.counter = {
        endTime: new Date(window.endTime * 1000),
        minsLeft: 50,
        init: function () {
            counter.endTime = counter.endTime.setMinutes(counter.endTime.getMinutes() + 50);
            counter.counterInterval = setInterval(counter.iteration, 1000);
        },
        iteration: function () {
            var now = new Date().getTime();
            var distance = counter.endTime - now;
            var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var sec = Math.floor((distance % (1000 * 60)) / 1000);
            counter.minsLeft = min;
            min = ('0' + min).slice(-2);
            sec = ('0' + sec).slice(-2);
            if (distance < 0) {
                clearInterval(counter.counterInterval);
            } else {
                $('.mins').html(min);
                $('.secs').html(sec);
            }
        }
    };
    counter.init();
});