/*5. 자바스크립트(js) 파일을 하나 만들어서 연결*/
window.onload = function () {
    /*(1) 각 쉘(td)에 클릭하면 "OK"라는 메세지창(alert) 으로 먼저 확인*/

    /*let item = document.getElementsByClassName("item");
    for (let i = 0; i < item.length; i++) {
        item[i].onclick = function (e){
            alert('OK');
        }
    }*/
    /*(2) 각 쉘(td)에 클릭하면 해당 price 값을 메세지창(alert) 으로 확인*/

    let item = document.getElementsByClassName("item");
    for (let i = 0; i < item.length; i++) {
        item[i].onclick = function (){
            alert(item[i].getAttribute('price'));
        }

    }
}
