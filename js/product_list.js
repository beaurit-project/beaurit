$('a[href="#"]').on('click', e => e.preventDefault());



 /******* header 사라짐 **********/
 let lastScrollTop = 0;

 $(window).on('scroll', () => {
   // 현재 스크롤 위치를 가져옴
   let currentScrollTop = $(window).scrollTop();
   
   // 현재 스크롤 위치와 이전 스크롤 위치를 비교
   if (currentScrollTop > lastScrollTop) {
     // 스크롤을 내릴 때
     $('header').addClass('none');
   } else {
     // 스크롤을 올릴 때
     $('header').removeClass('none');
   }
   
   // 이전 스크롤 위치를 현재 스크롤 위치로 업데이트
   lastScrollTop = currentScrollTop;
 });
 

/******* 제품리스트 스크롤 이벤트 **********/
$(window).on('scroll', () => {
  if (document.documentElement.scrollTop >= 400) {
    $('.product-list .product-list-img li .best-seller-box').addClass('active');
    $('.product-list .product-list-img .product-list-item1 img, .product-list-item2 img, .product-list-item3 img, .product-list-item4 img').addClass('active');

    if (document.documentElement.scrollTop >= 900) {
      $('.product-list .product-list-img .product-list-item5 img, .product-list-item6 img, .product-list-item7 img, .product-list-item8 img').addClass('active');
    }

    if (document.documentElement.scrollTop >= 1500) {
      $('.product-list .product-list-img .product-list-item9 img, .product-list-item10 img, .product-list-item11 img, .product-list-item12 img').addClass('active');
    }

    if (document.documentElement.scrollTop >= 2200) {
      $('.product-list .product-list-img .product-list-item13 img, .product-list-item14 img').addClass('active');
    }
  } else {
    $('.nav').removeClass('active');
  }
});
