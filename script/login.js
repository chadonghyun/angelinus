    //1. 로그인 슬라이드
        //1. 초기값
        let n=0;
        //2. 페이지 번호가 나오게 한다. 1/5
        $('.c_btn li:first-child').html((n+1)+'/3');
    function fadeInOut(){
      $('#new_mnu>#log_sld>a>img').stop().fadeOut();//모든 이미지를 숨긴다.
      if(n==2){//마지막이미지라면
      n=0;//처음 이미지가 나오게 0을 대입
  }else{
    n++;
  }
  console.log(n);
  $('#new_mnu>#log_sld>a>img').eq(n).stop().fadeIn();//다음 번호에 맞는 이미지가 나옴.
    $('.c_btn li:first-child').eq(0).html((n+1)+'/3')
  }
    //시간객체를 사용하여 반복 함수 호출하기
    let Timer = setInterval(fadeInOut, 3000);
    $('.c_btn li:last-child').click(function(){//정지버튼을 클릭하면
      if($(this).find('i').hasClass('fas fa-pause')==true){//해당 클래스가 있는지 판단하여 있으면 아래 내용을 실행하고
        clearInterval(Timer);//시간을 제거하여 멈추게 한다.
        $(this).find('i').attr('class','fas fa-play');//클래스명을 찾아서 강제로 변경.
      }else{//fa-pause클래스명이 없으면 아래 내용을 실행한다.
        Timer = setInterval(fadeInOut, 3000);//시간을 다시 넣어서 움직이게 한다.
        $(this).find('i').attr('class','fas fa-pause');//클래스명을 찾아서 강제로 변경
      }
    });

    //2. ID/PW 확인
    document.getElementById('log_btn').onclick = function() {
      let ID = document.getElementById('id_name').value;
      let PW = document.getElementById('pw_name').value;
      if (ID === "1234" && PW === "1234") {
          alert(ID+"회원님 환영합니다.");
          location.href ="index.html";
      }
      else if(ID === ""){//ID가 비어있으면
        alert('*아이디를 입력해주세요.');
      }
      else if(PW === ""){//PW가 비어있으면
        alert('*비밀번호를 입력해주세요.');
      }
      else if(ID != "1234" || PW != "1234") {//ID가 1234가 아니면
        document.getElementById('red_alert').innerHTML='<p>아이디나 비밀번호를 확인해주세요.</p>';
      }
      // document.getElementById('join_btn').addEventListener("click",location.href ="join.html");
      }