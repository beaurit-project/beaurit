$(document).ready(function () {
  const $button = $('.main-bg .main-sub-box .button-container');
  const $images = $('.main-bg-contents');
  let intervalId;

  function activateImages() {
    $images.each(function (index) {
      const $img = $(this);
      setTimeout(function () {
        $img.addClass('active');
      }, index * 1500); // 이미지가 순차적으로 나타나도록 1.5초 간격으로 설정
    });

    // setTimeout(function() {
    //   $images.removeClass('active');
    // }, $images.length * 1500); // 모든 이미지가 활성화된 후 비활성화
  }

  $button.on('mouseover', function () {
    activateImages();
    intervalId = setInterval(activateImages, $images.length * 1500 + 500); // 이미지가 반복되도록 인터벌 설정
  });

  $button.on('mouseout', function () {
    clearInterval(intervalId);
    $images.stop(true, true).removeClass('active');
  });
});

$('.sub-main .sub-main-container .sub-main-box1').on('mouseenter', () => {
  $('.sub-main .sub-main-container .sub-main-box1 .sub-main-img-bg').addClass('active');
});
$('.sub-main .sub-main-container .sub-main-box1').on('mouseleave', () => {
  $('.sub-main .sub-main-container .sub-main-box1 .sub-main-img-bg').removeClass('active');
});
$('.sub-main .sub-main-container .sub-main-box2').on('mouseenter', () => {
  $('.sub-main .sub-main-container .sub-main-box2 .sub-main-img-bg').addClass('active');
});
$('.sub-main .sub-main-container .sub-main-box2').on('mouseleave', () => {
  $('.sub-main .sub-main-container .sub-main-box2 .sub-main-img-bg').removeClass('active');
});
$('.sub-main .sub-main-container .sub-main-box3').on('mouseenter', () => {
  $('.sub-main .sub-main-container .sub-main-box3 .sub-main-img-bg').addClass('active');
});
$('.sub-main .sub-main-container .sub-main-box3').on('mouseleave', () => {
  $('.sub-main .sub-main-container .sub-main-box3 .sub-main-img-bg').removeClass('active');
});

$('.sub-main .sub-main-container .sub-main-box1').on('mouseenter', () => {
  $('.sub-main .sub-main-container .sub-main-box1 .sub-main-txt').addClass('active');
});
$('.sub-main .sub-main-container .sub-main-box1').on('mouseleave', () => {
  $('.sub-main .sub-main-container .sub-main-box1 .sub-main-txt').removeClass('active');
});