/**
 *
 */

$(function () {
    $('.accordion').each(function () {//개별적으로 동작을 했으면 좋겠다.
        let allDt = $(this).find('dt');
        let allDd = $(this).find('dd');
        allDd.hide();
        allDd.first().show();
        allDt.css({
            cursor : 'pointer'
        }).click(function (){
            allDd.hide();
            $(this).next().toggle();
        });

    });
});//end of window load