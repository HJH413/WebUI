window.onload = function (){

    //여행자 인원수 입력후 상품 합계 금액
    let adult = document.querySelector('#adult');
    let child = document.querySelector('#child');
    let baby = document.querySelector('#baby');

    adult.onchange = calc;
    child.onchange = calc;
    baby.onchange = calc;

    function calc() {
        document.querySelector('#total').value = (adult.value*39.000) + (child.value*29.000) + (baby.value*19.000) +',000원'
    }
    //여행자 인원수 입력후 상품 합계 금액 -끝-

    //약관 동의 채크
    let frm = document.querySelector('#frm');

    frm.onsubmit = function (e) {
        e.preventDefault();
        e.stopPropagation();

        let agree1 = document.querySelector('#agree1').checked;
        let agree2 = document.querySelector('#agree2').checked;
        if(!agree1 || !agree2){
            alert("둘다 약관동의 해야함")
            return;
        }
        frm.submit();
    }
    //약관 동의 채크 -끝-
}//end of window.onload




/*
    = function (){
    alert('2')
}*/
