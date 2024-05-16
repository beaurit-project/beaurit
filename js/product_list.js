$(window).on('scroll', () => {
  if(document.documentElement.scrollTop >= 500) {
    $('.product-list .product-list-img li .best-seller-box').addClass('active');
    $('.product-list .product-list-img .product-list-item1 img, .product-list-item2 img, .product-list-item3 img, .product-list-item4 img').addClass('active');
    // $('.product-list .product-list-img li .product-list-inner-wrapper').addClass('active');

    if(document.documentElement.scrollTop >= 1100) {
      $('.product-list .product-list-img .product-list-item5 img, .product-list-item6 img, .product-list-item7 img, .product-list-item8 img').addClass('active');
    }

    if(document.documentElement.scrollTop >= 1800) {
      $('.product-list .product-list-img .product-list-item9 img, .product-list-item10 img, .product-list-item11 img, .product-list-item12 img').addClass('active');
    }

    if(document.documentElement.scrollTop >= 2200) {
      $('.product-list .product-list-img .product-list-item13 img, .product-list-item14 img').addClass('active');
    }
  } else{
    $('.nav').removeClass('active');
  }
})