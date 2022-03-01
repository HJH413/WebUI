/**
 *
 */
$(document).ready(function () {
    // $('선택자').동작메소드() // odd 홀수 even 짝수
    /* $('div#celebs tbody tr:even').css({
         'background-color': '#ffddff'

     });
     $('div#celebs tbody tr:odd').addClass('table_striping');*/

    $('div#celebs tbody tr').hover(function () {
        $(this).addClass('td_mouseover');
    }, function () {
        $(this).removeClass('td_mouseover');
    });

    /*$('#hideButton').click(function () {
        let a = $('#intro > img').attr('src');
        $('#intro > img').attr('src', a.replace('./imgs/grim.jpg', ''));
    });
    $('#showButton').click(function () {
        let a = $('#intro > img').attr('src');
        $('#intro > img').attr('src', a.replace('', './imgs/grim.jpg'));
    });*/

    $('#hideButton').click(function () {
        $('p>img').slideUp('slow');
    });
    $('#showButton').click(function () {
        $('p>img').slideDown('slow');
    });
//-------------------------------------------------------------------------
    /*$('#toggleButton').click(function (){
        $('p>img').toggle();
    })*/

    /*$('#toggleButton').click(function (){
        $('p>img').slideToggle('slow')
        $('p>img').fadeToggle('slow')
    })*/

    /**/
//----------------------------------------------------------------------
    /*let show_pic = true;
    $('#toggleButton').click(function(){
        if(show_pic){
            $('#intro > img').fadeOut('slow');
            show_pic = false;
        }
        else{
            $('#intro > img').fadeIn('slow');
            show_pic = true;
        }
    })*/
    /*$('#toggleButton').click(function(){
        if($('p>img').is(':visible')){ // is 는 상태보는 함수
            $('#intro > img').fadeOut('slow');
        }
        else{
            $('#intro > img').fadeIn('slow');
        }
    })*/

});