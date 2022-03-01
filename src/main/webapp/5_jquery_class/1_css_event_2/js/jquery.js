/**
 * 
 */

$(function (){
    $('.rollover > img').hover(function (){
        let a = $(this).attr('src');
        $(this).attr('src', a.replace('off','on'));
    },function (){
        let a = $(this).attr('src');
        $(this).attr('src', a.replace('on','off'));
    });

    /*$('.rollover > img').mouseenter(function(){
        let a = $(this).attr('src');
        $(this).attr('src', a.replace('off', 'on'));
    }).mouseleave(function(){
        let a = $(this).attr('src');
        $(this).attr('src', a.replace('on', 'off'));
    })*/



    /*$('img').hover(function(){
        let a = $(this).attr('src');
        $(this).attr('src', a.replace('off', 'on'));
    },function (){
        let a = $(this).attr('src');
        $(this).attr('src', a.replace('on', 'off'));
    })*/

})