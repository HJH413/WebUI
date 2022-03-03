/**
 *
 */

$(function () {
    /*
    *  $('xxx').validate({})
    *  $('xxx').validate({
    *  rules : aaaaa,
    *  success : bbbb
    * })
    * */
    $('div#signup>form').validate({
        rules: {
            name: {required: true},
            email: {
                required: true,
                email: true
            },
            website: {URL: true},
            password: {
                required: true,
                minlength: 6
            },
            passconf: {equalTo: '#password'}
        },
        success: function (label) {
            label.addClass('valid')
            label.text('성공') //출력은 안되지만 이 코드 없으면 녹색체크 안됨
        }
    });

    /*
   * 2.x attr()가 이벤트가 한 번 발생하면  다시 이벤트가 발생하지 않았음
   * -> prop() 사용
   * 3.x attr() 사용해도 됨.
   *
     - attr() :  HTML 속성 (Attribute) 취급
     - prop() : javascript 프로퍼티 (Property) 취급
   * */



    //성민
    /*$('.check-all').click(function(){
        if($('.check-all').prop("checked") == true)
            $('.agree').prop("checked", true);
        else
            $('.agree').prop("checked", false);
    });

    $('.agree').click(function(){
        $('.check-all').prop("checked", false);
    });
*/

    //형준

   /* $('.check-all').change(function(){
        if($(this).is(':checked')){
            $('.agree').prop('checked',true);
        }
        else{
            $('.agree').prop('checked',false);
        }
    })*/




    /*$('.check-all').click(function () {
        //checkbox 에서 선택한다는 것은 checked
        // '위 조항 모두' 채크를 선택하면 위의 항목들 모두 체크
        if ($('.check-all').is(':checked')) {
            $('.agree').prop("checked", true);
        }
        // '위 조항 모두' 채크를 선택하면 위의 항목들 모두 해제
        else {
            $(".agree").prop("checked", false)
        }
        /!*- attr() :  HTML 속성 (Attribute) 취급
        - prop() : javascript 프로퍼티 (Property) 취급*!/
    });*/

    /*$('.check-all').click(function(){
            $('.agree').prop("checked", $(this).is(":checked"));
    });



    $(".agree").click(function () {
        let total = $(".agree").length;//total 변수에 조항 갯수를 저장
        let checked = $(".agree:checked").length; // checked 변수에 조항 채크 갯수를 저장

        if (total !== checked) $(".check-all").prop("checked", false);
        //만약에 조항갯수와 동의한 조항갯수가 다르면 전체동의를 해제하고
        else $(".check-all").prop("checked", true);
        // 아니라면 전체동의를 채크해라
    });*/


});