// /******* header **********/
// $(window).on('scroll',()=>{
//   if(scrollY > 100){
//     $('header').addClass('none');
//   }else{
//     $('header').removeClass('none').animate({'transition': '1s'});
//   }
// })

/******* add-color-into 슬라이드 버튼 ***********/
  
  $('.btn-group li').eq(0).on('click',()=>{
    $('.add-color-img').animate({ marginLeft : 0 }, 'linear');
  });
  $('.btn-group li').eq(1).on('click',()=>{
    $('.add-color-img').animate({ marginLeft : '-100%' }, 'linear');
  });
  $('.btn-group li').eq(2).on('click',()=>{
    $('.add-color-img').animate({ marginLeft : '-200%' }, 'linear');
  });
  $('.btn-group li').eq(3).on('click',()=>{
    $('.add-color-img').animate({ marginLeft : '-300%' }, 'linear');
  });


  