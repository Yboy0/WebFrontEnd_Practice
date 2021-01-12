(function (window, document){ //즉시 실행 함수 
    'use strict'; // 해당 영역은 엄격한 js 문법을 통해서 작성하겠다는 선언 

    const $toggles= document.querySelectorAll('.toggle'); //토글 글래스 부여된 요소 전부 찾기 
    const $toggleBtn= document.getElementById('toggle-btn');
    
    $toggleBtn.addEventListener('click',function() { //토글 버튼이 클릭 되면 함수 실행해서 이벤트 처리 
        toggleElements();
    });

    // size 1024이상 일 때 토글 창 닫기 위해 
    window.addEventListener('resize'),function(){
        if(window.innerWidth > 1024){
            // Off toggle element
            offElements();

        }
    }
    
    function toggleElements() {
        [].forEach.call($toggles, function(toggle) {
            // 토글이란 클래스를 가지고 있는 요소에다가 toggleElements 함수가 실행될 때 마다 on이라는 클래스를 지속적을 토글 하겠다. 
            // 토글 버튼을 클릭 할 때 마다
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function(toggle) {
            //모든 토글 요소에 들어있는 on이라는 요소를 지우겠다.
            toggle.classList.remove('on');
        });
    }
})(window, document)