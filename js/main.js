/******* header 사라짐 **********/
$(window).on('scroll',()=>{
    if(scrollY > 200){
      $('header').addClass('none');
    }else{
      $('header').removeClass('none').animate({'transition': '1s'});
    }
  });
  
