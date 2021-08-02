  function onlyNumber() {
        if ((event.keyCode <= 48) || (event.keyCode >= 57))
            event.returnValue = false;
    }

    function CheckForm() {
        if (document.getElementById("choose_number").value == "") {
            window.alert("휴대폰 번호를 선택하시오.");
            return false;
        }
        if (document.getElementById("num1").value.length != 4) {
            window.alert("가운데 번호는 4자리로 입력하세요");
        }else{
            window.alert("뒷 번호를 4자리로 입력해주세요")
        }
    }