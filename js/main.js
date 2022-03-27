$(document).ready(function(){
    $('nav > ul > li').hover(function(){
        $('.sub1',this).stop().slideDown();
    }, function (){
        $('.sub1',this).stop().slideUp();
    }, 3000);

    $('.slider div:last').prependTo('.slider');
    $('.slider').css('margin-left','-100%');
    var i=1;
    $('.next').click(function(){
        $('.slider').animate({marginLeft:'-=100%'}, function() {
            $('.slider div:first').appendTo('.slider');
            $('.slider').css('margin-left', '-100%');
        });
        if(i<3){
            i++;
            $('.num').text(i);
        } else {
            i=1;
            $('.num').text(i);
        }                
    });

    
    $('.slider div:first').prependTo('.slider');
    $('.slider').css('margin-left','-100%');

    $('.prev').click(function(){
        $('.slider').animate({marginLeft:'+=100%'}, function() {
            $('.slider div:last').prependTo('.slider');
            $('.slider').css('margin-left', '-100%');
        });
        if(i<=1){
            i=3;
            $('.num').text(i);
        } else {
            i--;
            $('.num').text(i);
        }                
    });

    setInterval(function(){
        $('.next').trigger('click');
    }, 5000);

    var $content=$('.tap_content ul'),
        $title=$('.tap_title li');
    
        $content.hide();
        $content.eq(0).show();

        $title.click(function(){
            $title.removeClass('on');
            $(this).addClass('on');

        var $index=$(this).index();
            $content.hide(); 
            $content.eq($index).show();
    })

});