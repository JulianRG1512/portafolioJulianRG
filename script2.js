
(function() {
    $('.btn3').click(function() {
        $(this).toggleClass('active');
        return $('.box3').toggleClass('open3');
    });
    
}).call(this);



(function() {
    $('.btn2').click(function() {
        $(this).toggleClass('active');
        return $('.box2').toggleClass('open2');
    });
    
}).call(this);



(function() {
    $('.btn4').click(function() {
        $(this).toggleClass('active');
        return $('.box4') .toggleClass('open4') & $('.box4_1') .toggleClass('open4_1');
    });
    
}).call(this);

(function() {
    $('.btn5').click(function() {
        $(this).toggleClass('active');
        return $('.box5') .toggleClass('open5') & $('.box5_1') .toggleClass('open5_1');
    });
    
}).call(this);

