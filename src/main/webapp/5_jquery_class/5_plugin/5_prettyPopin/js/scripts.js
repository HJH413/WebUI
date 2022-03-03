/**
 * 
 */
$(function (){
    //태그안에 속성이 rel=prettyPopin 요소를 찾고 그 중 첫 번째 불러오기
    $('a[rel="prettyPopin"]:first').prettyPopin({
        width : 450
    })
    //태그안에 속성이 rel=prettyPopin 요소를 찾고 그 중 두 번째 불러오기
    /*$('a[rel="prettyPopin"]:eq(1)').prettyPopin({
        width : 450
    })*/

    $('a[rel="prettyPopin"]:eq(1)').prettyPopin({
        width : 450,
        callback : function (){
            alert('나감')
        }
    })

})