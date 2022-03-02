$(function (){

    let topDiv = $('.tabSet');
    let anchor = topDiv.find('ul.tabs a')
    let panelDiv = topDiv.find('div.panel')

    anchor.show();
    panelDiv.hide();

    let lastAnchor = anchor.filter('.on');

    let lastPanel = $(lastAnchor.attr('href'))
    lastPanel.show();

    anchor.click(function (){
        //1) 현재 이벤트 발생한 a 태그와 그 href 값(패널) 얻어와서 변수에 저장
        let num = $(this);
        let num2 = $(num.attr('href'));
        //2) 기존 a 태그에 있던 'on' 클래스를 제거
        lastAnchor.removeClass('on')
        //3) 현재 이벤트 발생한 a 태그에 'on' 클레스 추가
        num.addClass('on')
        //4) 기존패널 감추기
        lastPanel.hide();
        //5) 현재패널 보이기 (1번의 변수)
        num2.show();
        /*anchor = idx;*/
        //6)현재 a 태그와 현재 패널을 lastAnchor / lastPanel 변수에 저장
        lastAnchor = num
        lastPanel = num2
    });
});//end of document load