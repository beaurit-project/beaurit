/******* header 사라짐 **********/
$(window).on('scroll', () => {
  if (scrollY > 200) {
    $('header').addClass('none');
  } else {
    $('header').removeClass('none').animate({ 'transition': '1s' });
  }
});

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
