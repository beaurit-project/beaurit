/******* header **********/
$(window).on('scroll',()=>{
  if(scrollY > 100){
    $('header').addClass('none');
  }else{
    $('header').removeClass('none').animate({'transition': '1s'});
  }
})

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


  // const autoSlide = () => {
  //   currentIdx = (currentIdx + 1) % $('.add-color-img li img').length; //0,1,2,3
  //   $('.add-color-img').stop().animate({
  //     marginLeft: -100 * currentIdx + '%'
  //   }, 700);

  //   $('.add-color-img-box .btn-group li').eq(currentIdx).addClass('on').siblings().removeClass('on')
  // } 

  // let mainSlide = setInterval(autoSlide, 3000);


  // $('.add-color-img-box').on({
  //   mouseenter: () => { clearInterval(mainSlide) },
  //   mouseleave: () => { mainSlide = setInterval(autoSlide, 3000) },
  // })


  const mainSwiper = new Swiper(".main-swiper", {
    speed: 600,
    loop:true, //시간차 움직임
    parallax: true, 
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });