$(function () {//jquery start

    // 각 상품 별 주문 갯수 합계 금액 출력
    /*$('#price1, #price2').on('change', function() {
        $('#total_price').val( (Number($('#price1').val())*5300) + (Number($('#price2').val())*5300) )
    });
    */
    /*$('#price1, #price2, #price3, #price4, #price5, #price6, #price7, #price8, #price9, #price10, #price11, #price12').on('change', function () {

        $('#total_price').val(
            (Number($('#price1').val()) * 5300)
            + (Number($('#price2').val()) * 5100)
            + (Number($('#price3').val()) * 5100)
            + (Number($('#price4').val()) * 6600)
            + (Number($('#price5').val()) * 4300)
            + (Number($('#price6').val()) * 3900)
            + (Number($('#price7').val()) * 4500)
            + (Number($('#price8').val()) * 3500)
            + (Number($('#price9').val()) * 4100)
            + (Number($('#price10').val()) * 4200)
            + (Number($('#price11').val()) * 4400)
            + (Number($('#price12').val()) * 5300)
        )
    });*/

    //주문목록 띄우기
    let p1 = $('#price1')
    let p2 = $('#price2')
    let p3 = $('#price3')
    let p4 = $('#price4')
    let p5 = $('#price5')
    let p6 = $('#price6')
    let p7 = $('#price7')
    let p8 = $('#price8')
    let p9 = $('#price9')
    let p10 = $('#price10')
    let p11 = $('#price11')
    let p12 = $('#price12')

    $('#p1_btn').on("click", function () {
        $('#list_table').append(
            $('<tr>').append(
                $('<td>').append('치킨바베큐 버거'),
                $('<td>').append(p1.val()),
                $('<td>').append(Number(p1.val()) * 5300),
                $('<td>').append(
                    // property와 attribute의 차이!!
                    $('<a>').prop('href', '#').addClass('delete-link1').append('취소')
                    // <a href="#" class="delete-link">Delete</a>
                )
            )
        );
    });

    $('#p2_btn').on("click", function () {
        $('#list_table').append(
            $('<tr>').append(
                $('<td>').append('에멘탈치즈 버거'),
                $('<td>').append(p2.val()),
                $('<td>').append(Number(p2.val()) * 5100),
                $('<td>').append(
                    // property와 attribute의 차이!!
                    $('<a>').prop('href', '#').addClass('delete-link2').append('취소')
                    // <a href="#" class="delete-link">Delete</a>
                )
            )
        );
    });

    $('#p3_btn').on("click", function () {
        $('#list_table').append(
            $('<tr class="price_text">').append(
                $('<td>').append('체다치즈 버거'),
                $('<td>').append(p3.val()),
                $('<td>').append(Number(p3.val()) * 5100),
                /*$('<td>').append(
                    $('<input type="text"  readonly>')
                        .val(Number(p12.val()) * 5300)
                ),*/
                $('<td>').append(
                    // property와 attribute의 차이!!
                    $('<a>').prop('href', '#').addClass('delete-link3').append('취소')
                    /*$('<input type="button" value="취소" id="price12_del12">').addClass('delete-link').append('Delete')*/
                    // <a href="#" class="delete-link">Delete</a>
                )
            )
        );
    });

    $('#p4_btn').on("click", function () {
        $('#list_table').append(
            $('<tr>').append(
                $('<td>').append('2치킨 버거'),
                $('<td>').append(p4.val()),
                $('<td>').append(Number(p4.val()) * 6600),
                $('<td>').append(
                    // property와 attribute의 차이!!
                    $('<a>').prop('href', '#').addClass('delete-link4').append('취소')
                    // <a href="#" class="delete-link">Delete</a>
                )
            )
        );
    });

    $('#p5_btn').on("click", function () {
        $('#list_table').append(
            $('<tr>').append(
                $('<td>').append('양념치킨 버거'),
                $('<td>').append(p5.val()),
                $('<td>').append(Number(p5.val()) * 4300),
                $('<td>').append(
                    // property와 attribute의 차이!!
                    $('<a>').prop('href', '#').addClass('delete-link5').append('취소')
                    // <a href="#" class="delete-link">Delete</a>
                )
            )
        );
    });

    $('#p6_btn').on("click", function () {
        $('#list_table').append(
            $('<tr class="price_text">').append(
                $('<td>').append('간장마늘 버거'),
                $('<td>').append(p6.val()),
                $('<td>').append(Number(p6.val()) * 3900),
                /*$('<td>').append(
                    $('<input type="text"  readonly>')
                        .val(Number(p12.val()) * 5300)
                ),*/
                $('<td>').append(
                    // property와 attribute의 차이!!
                    $('<a>').prop('href', '#').addClass('delete-link6').append('취소')
                    /*$('<input type="button" value="취소" id="price12_del12">').addClass('delete-link').append('Delete')*/
                    // <a href="#" class="delete-link">Delete</a>
                )
            )
        );
    });

    $('#p7_btn').on("click", function () {
        $('#list_table').append(
            $('<tr>').append(
                $('<td>').append('케이준양념감자'),
                $('<td>').append(p7.val()),
                $('<td>').append(Number(p7.val()) * 1500),
                $('<td>').append(
                    // property와 attribute의 차이!!
                    $('<a>').prop('href', '#').addClass('delete-link7').append('취소')
                    // <a href="#" class="delete-link">Delete</a>
                )
            )
        );
    });

    $('#p8_btn').on("click", function () {
        $('#list_table').append(
            $('<tr>').append(
                $('<td>').append('베이컨에그랩'),
                $('<td>').append(p8.val()),
                $('<td>').append(Number(p8.val()) * 2500),
                $('<td>').append(
                    // property와 attribute의 차이!!
                    $('<a>').prop('href', '#').addClass('delete-link8').append('취소')
                    // <a href="#" class="delete-link">Delete</a>
                )
            )
        );
    });

    $('#p9_btn').on("click", function () {
        $('#list_table').append(
            $('<tr class="price_text">').append(
                $('<td>').append('매콤김떡만'),
                $('<td>').append(p9.val()),
                $('<td>').append(Number(p9.val()) * 3300),
                /*$('<td>').append(
                    $('<input type="text"  readonly>')
                        .val(Number(p12.val()) * 5300)
                ),*/
                $('<td>').append(
                    // property와 attribute의 차이!!
                    $('<a>').prop('href', '#').addClass('delete-link9').append('취소')
                    /*$('<input type="button" value="취소" id="price12_del12">').addClass('delete-link').append('Delete')*/
                    // <a href="#" class="delete-link">Delete</a>
                )
            )
        );
    });

    $('#p10_btn').on("click", function () {
        $('#list_table').append(
            $('<tr>').append(
                $('<td>').append('콜라'),
                $('<td>').append(p10.val()),
                $('<td>').append(Number(p10.val()) * 2000),
                $('<td>').append(
                    // property와 attribute의 차이!!
                    $('<a>').prop('href', '#').addClass('delete-link10').append('취소')
                    // <a href="#" class="delete-link">Delete</a>
                )
            )
        );
    });

    $('#p11_btn').on("click", function () {
        $('#list_table').append(
            $('<tr>').append(
                $('<td>').append('사이다'),
                $('<td>').append(p11.val()),
                $('<td>').append(Number(p11.val()) * 2000),
                $('<td>').append(
                    // property와 attribute의 차이!!
                    $('<a>').prop('href', '#').addClass('delete-link11').append('취소')
                    // <a href="#" class="delete-link">Delete</a>
                )
            )
        );
    });

    $('#p12_btn').on("click", function () {
        $('#list_table').append(
            $('<tr class="price_text">').append(
                $('<td>').append('오렌지주스'),
                $('<td>').append(p12.val()),
                $('<td>').append(Number(p12.val()) * 2000),
                /*$('<td>').append(
                    $('<input type="text"  readonly>')
                        .val(Number(p12.val()) * 5300)
                ),*/
                $('<td>').append(
                    // property와 attribute의 차이!!
                    $('<a>').prop('href', '#').addClass('delete-link12').append('취소')
                    /*$('<input type="button" value="취소">').addClass('delete-link12').append('Delete')*/
                    // <a href="#" class="delete-link">Delete</a>
                )
            )
        );
    });
        // delete btn 클릭하면 목록 삭제
    $('#list_table').on("click", ".delete-link1", function (e) {
        // this == a의 부모의 부모는 tr태그
        $(this).parent().parent().remove();
        p1.val(0)
    })
    $('#list_table').on("click", ".delete-link2", function (e) {
        // this == a의 부모의 부모는 tr태그
        $(this).parent().parent().remove();
        p2.val(0)
    })
    $('#list_table').on("click", ".delete-link3", function (e) {
        // this == a의 부모의 부모는 tr태그
        $(this).parent().parent().remove();
        p3.val(0)
    })
    $('#list_table').on("click", ".delete-link4", function (e) {
        // this == a의 부모의 부모는 tr태그
        $(this).parent().parent().remove();
        p4.val(0)
    })
    $('#list_table').on("click", ".delete-link5", function (e) {
        // this == a의 부모의 부모는 tr태그
        $(this).parent().parent().remove();
        p5.val(0)
    })
    $('#list_table').on("click", ".delete-link6", function (e) {
        // this == a의 부모의 부모는 tr태그
        $(this).parent().parent().remove();
        p6.val(0)
    })
    $('#list_table').on("click", ".delete-link7", function (e) {
        // this == a의 부모의 부모는 tr태그
        $(this).parent().parent().remove();
        p7.val(0)
    })
    $('#list_table').on("click", ".delete-link8", function (e) {
        // this == a의 부모의 부모는 tr태그
        $(this).parent().parent().remove();
        p8.val(0)
    })
    $('#list_table').on("click", ".delete-link9", function (e) {
        // this == a의 부모의 부모는 tr태그
        $(this).parent().parent().remove();
        p9.val(0)
    })
    $('#list_table').on("click", ".delete-link10", function (e) {
        // this == a의 부모의 부모는 tr태그
        $(this).parent().parent().remove();
        p10.val(0)
    })
    $('#list_table').on("click", ".delete-link11", function (e) {
        // this == a의 부모의 부모는 tr태그
        $(this).parent().parent().remove();
        p11.val(0)
    })
    $('#list_table').on("click", ".delete-link12", function (e) {
        // this == a의 부모의 부모는 tr태그
        $(this).parent().parent().remove();
        p12.val(0)
    })
    //주문하기 버튼툴르면 총 주문금액에 표시
    $('#order').on('click', function() {
        $('#total_price').val(
            (Number($('#price1').val()) * 5300)
            + (Number($('#price2').val()) * 5100)
            + (Number($('#price3').val()) * 5100)
            + (Number($('#price4').val()) * 6600)
            + (Number($('#price5').val()) * 4300)
            + (Number($('#price6').val()) * 3900)
            + (Number($('#price7').val()) * 1500)
            + (Number($('#price8').val()) * 2500)
            + (Number($('#price9').val()) * 3300)
            + (Number($('#price10').val()) * 2000)
            + (Number($('#price11').val()) * 2000)
            + (Number($('#price12').val()) * 2000)
        )
    });

    /*$('#price12_del12').on('click', function() {
        $('#total_price').val(
            - (Number($('#price1').val()) * 5300)
            - (Number($('#price2').val()) * 5100)
            - (Number($('#price3').val()) * 5100)
            - (Number($('#price4').val()) * 6600)
            - (Number($('#price5').val()) * 4300)
            - (Number($('#price6').val()) * 3900)
            - (Number($('#price7').val()) * 4500)
            - (Number($('#price8').val()) * 3500)
            - (Number($('#price9').val()) * 4100)
            - (Number($('#price10').val()) * 4200)
            - (Number($('#price11').val()) * 4400)
            - (Number($('#price12_aa').val()))
        )
    });
*/
//포장 or 매장식사 선택
let frm = document.querySelector('#frm');

frm.onsubmit = function (e) {
   e.preventDefault();
   e.stopPropagation();

   let sel1 = $('#sel1').is(":checked");
   let sel2 = $('#sel2').is(":checked");
   let prT = $('#total_price')
   if(prT.val()===""){
       alert("주문하기를 눌러주세요.")
       return;
   }  else {
       if(sel1){
           alert("맛있게 포장해드리겠습니다.")
       } else if(sel2) {
           alert("매장에서 맛있게드세요.")
       } else {
           alert("포장 또는 매장을 선택하세요.")
           return;
       }
   }
   frm.submit();
}

});//jquery end
