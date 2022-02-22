// window.onload = function(){

let list = document.getElementById('list');
let pic = document.getElementById('pic');
let del = document.getElementById('del');

// 리스트에서 선택(클릭했을 때)
list.onclick = function (evt) {
    //console.log(evt.target);
    let isbn = evt.target.getAttribute('data-isbn');
    //alert(isbn);
    if (isbn) {
        // <img src="경로" height='150' width='100'>
        let img = document.createElement("img");
        img.height = 150;
        img.width = 100;
        img.src = 'images/' + isbn + '.jpg'; // images/php.jpg
        //console.log(img);
        // pic에 자식으로 img태그가 1개라도 있으면 대치하기

        /*pic.replaceChild(img, pic.lastChild);
        // 그렇지 않다면 pic에 img 태그를 붙이기
        pic.appendChild(img);*/
        if (pic.lastChild == null) {
            pic.appendChild(img);
            del.disabled = false;
        } else {
            pic.replaceChild(img, pic.lastChild);
        }

    }
}

// 삭제 버튼 누르면 pic 아래 자식(img 태그)를 지운다
del.onclick = function () {
  pic.removeChild(pic.lastChild);
};

//};
