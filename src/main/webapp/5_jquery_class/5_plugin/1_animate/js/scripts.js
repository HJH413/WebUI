/*
* 5_plugin/js/scripts.js
* */

$(function () {
    $('div#bio > div').hide();
    $('div#bio > div:first').show();

    $('div#bio > h3').css({
        cursor : 'pointer'
    }).click(function (){
        //$(this).next().toggle(); // ne; xt 는 this 로 불러온 대상의 다음요소들을 지칭한다.!!
        $(this).next().animate({'height' : 'toggle'},2000, 'easeOutCirc');
    });




});