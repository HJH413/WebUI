window.onload = function(){

		let frm = document.querySelector('#frm');
		let inputs = document.querySelectorAll("input");
		
		frm.onsubmit = function (e){ //submit 이 눌렸을때 작동하게
			//1.고유의 이벤트 기능을 막기
			e.preventDefault();
			e.stopPropagation();
			//2. 체크 여부 확인
			let agree = document.getElementById('agree').checked;
			if(!agree){
				alert('확인을 반드시 체크해주세요.');
				return;
			}
			//3.서버로 전송
			frm.submit();
		}

	}