
    document.getElementById('from_id').onsubmit = function () {
    if (document.getElementById('empno').value == '') {
    alert('필수 입력사항입니다.')
    return false;
}
    return true;
}