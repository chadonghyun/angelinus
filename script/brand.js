$(function(){

  $(window).scroll(function(){

    let spos1 = $(this).scrollTop();

    let img1_top = document.querySelector('#brnd_ss02').offsetTop;
    let img2_top = document.querySelector('#brnd_ss03').offsetTop;

    console.log(spos1);

    // if(spos1 >=500){
    //   $('.brnd_fade1').animate({'opacity':'1'},1000);}


    if (768 <= window.screen.width <= 1024){
      // if(spos1 >= 900){
      if(spos1 >= img1_top - 700){
      $('.brnd_fade1').animate({'opacity':'1'},1000);
      $('.brnd_fd_img1').animate({'opacity':'1'},1500)
    }
      if(spos1 >= img2_top - 700){
      $('.brnd_fade2').animate({'opacity':'1'},1000);
      $('.brnd_fd_img2').animate({'opacity':'1'},1500);
    }
      }
    // else{
    //     if(spos1 >= 500){
    //     $('.brnd_fade1').animate({'opacity':'1'},1000);}
    //     if(spos1 >= 1400){
    //     $('.brnd_fade2').animate({'opacity':'1'},1000);}
    //   }
    

    // if(spos1>=1400){
    //   $('.brnd_fade2').animate({'opacity':'1'},1000);}

  });
});
  
  // }else{
    //   $('.brnd_fade').animate({'opacity':'0'},500);
    // }