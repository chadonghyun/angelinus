
    // 카테고리 선택 시 진한글자, 밑줄나오게 함
    const tabList = document.querySelectorAll('.tab_mnu .list > li')//query 선택자 또는 태그


  let tabList_btn = document.querySelectorAll('.tab_mnu .list > li > a')

  for(let a=0;a<tabList.length;a++){
    tabList_btn[a].addEventListener('click', function(e){
      e.preventDefault();
      for(let b = 0; b < tabList_btn.length; b++){ 
        tabList_btn[b].classList.remove('on');
      }
      this.classList.add('on'); 
    });
  }




  //카테고리 선택 시 아래 갤러리가 변경됨
  
  $(function(){
    $('#t01').click(function(){
      $('.cont_wrap').css('display','none');
      $('.cont_wrap1').css('display','block');
    });
    $('#t02').click(function(){
      $('.cont_wrap').css('display','none');
      $('.cont_wrap2').css('display','block');
    });
    $('#t03').click(function(){
      $('.cont_wrap').css('display','none');
      $('.cont_wrap3').css('display','block');
    });
    $('#t04').click(function(){
      $('.cont_wrap').css('display','none');
      $('.cont_wrap4').css('display','block');
    });
    $('#t05').click(function(){
      $('.cont_wrap').css('display','none');
      $('.cont_wrap5').css('display','block');
    });

    $('#mb01').click(function(){
      $('.cw1_2').css('display','flex');
      $('#mb01').css('display','none');
    });
    $('#mb02').click(function(){
      $('.cw4_2').css('display','flex');
      $('#mb02').css('display','none');
    });
    $('#mb03').click(function(){
      $('.cw5_2').css('display','flex');
      $('#mb03').css('display','none');
      $('#mb04').css('display','block');
    });
    $('#mb04').click(function(){
      $('.cw5_3').css('display','flex');
      $('#mb04').css('display','none');
    });

    $('.btn').click(function(){
      $('.cw1_2').css('display','none');
      $('.cw4_2').css('display','none');
      $('.cw5_2').css('display','none');
      $('.cw5_3').css('display','none');
      $('.more_btn').css('display','block');
      $('#mb04').css('display','none');
    });

    $('.cont > li img').click(function(){
      $('.mnu_modal').fadeOut();
      $(this).parent().parent().find('.mnu_modal').fadeIn();
    })

    $('.fa-xmark').click(function(){
      $(this).parent().fadeOut();
    });

  });

  // 버튼 클릭 시 숨겨져 있던 내용이 나오고 숨겨진 내용이 더이상 없을 때 사라짐
