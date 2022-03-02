/**
 * 
 */
$(function (){
    $('#intro').animate({
        padding : '20px',
        fontSize : '30px'
    }, 2000);

    $('#navigation li').hover(
        function (){
           $(this).animate({paddingLeft: '+=15px'}, 200)
        },
        function (){
            $(this).animate({paddingLeft: '-=15px'}, 200)
        })

    $(window).scroll(function (){
        $('#navigation').css('top', $(document).scrollTop())
    });













});//end of window load