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

/* 이미지 구역 hover 시, background 생김 */
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

/* 이미지 구역 hover 시, 이미지 안에 텍스트 생김 */
$('.sub-main .sub-main-container .sub-main-box1').on('mouseenter', () => {
  $('.sub-main .sub-main-container .sub-main-box1 .sub-main-txt').addClass('active');
});
$('.sub-main .sub-main-container .sub-main-box1').on('mouseleave', () => {
  $('.sub-main .sub-main-container .sub-main-box1 .sub-main-txt').removeClass('active');
});

$('.sub-main .sub-main-container .sub-main-box2').on('mouseenter', () => {
  $('.sub-main .sub-main-container .sub-main-box2 .sub-main-txt').addClass('active');
});
$('.sub-main .sub-main-container .sub-main-box2').on('mouseleave', () => {
  $('.sub-main .sub-main-container .sub-main-box2 .sub-main-txt').removeClass('active');
});

$('.sub-main .sub-main-container .sub-main-box3').on('mouseenter', () => {
  $('.sub-main .sub-main-container .sub-main-box3 .sub-main-txt').addClass('active');
});
$('.sub-main .sub-main-container .sub-main-box3').on('mouseleave', () => {
  $('.sub-main .sub-main-container .sub-main-box3 .sub-main-txt').removeClass('active');
});

/*  이미지 구역 hover 시, 제품명 생김 */
$('.sub-main .sub-main-container .sub-main-box1').on('mouseenter', () => {
  $('.sub-main .sub-main-container .sub-main-box1 .info-box').addClass('active');
});
$('.sub-main .sub-main-container .sub-main-box1').on('mouseleave', () => {
  $('.sub-main .sub-main-container .sub-main-box1 .info-box').removeClass('active');
});

$('.sub-main .sub-main-container .sub-main-box2').on('mouseenter', () => {
  $('.sub-main .sub-main-container .sub-main-box2 .info-box').addClass('active');
});
$('.sub-main .sub-main-container .sub-main-box2').on('mouseleave', () => {
  $('.sub-main .sub-main-container .sub-main-box2 .info-box').removeClass('active');
});

$('.sub-main .sub-main-container .sub-main-box3').on('mouseenter', () => {
  $('.sub-main .sub-main-container .sub-main-box3 .info-box').addClass('active');
});
$('.sub-main .sub-main-container .sub-main-box3').on('mouseleave', () => {
  $('.sub-main .sub-main-container .sub-main-box3 .info-box').removeClass('active');
});

/* 제품 위아래 움직임 */
gsap.fromTo(".sub-main-box1, .sub-main-box2, .sub-main-box3", {
  translateY : -10,
}, {
  translateY: 20,
  duration : 2.5,
  repeat : -1,
  yoyo: true,
  ease: 'poswer2.inOut'
});
gsap.fromTo(".sub-main-box2", {
  translateY : -10,
}, {
  translateY: 13,
  duration : 3.5,
  repeat : -1,
  yoyo: true,
  ease: 'poswer2.inOut'
});
gsap.fromTo(".sub-main-box3", {
  translateY : -10,
}, {
  translateY: 8,
  duration : 3,
  repeat : -1,
  yoyo: true,
  ease: 'poswer2.inOut'
});

/* 마우스 hover 시, 커서에 따라 이동 */
document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.sub-main .sub-main-container .sub-main-box1');

  element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      
      const moveX = (offsetX / rect.width - 0.5) * 40; // 이동 강도 조절
      const moveY = (offsetY / rect.height - 0.5) * 40; // 이동 강도 조절
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(0, 0)';
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.sub-main .sub-main-container .sub-main-box2');

  element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      
      const moveX = (offsetX / rect.width - 0.5) * 40; // 이동 강도 조절
      const moveY = (offsetY / rect.height - 0.5) * 40; // 이동 강도 조절
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(0, 0)';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.sub-main .sub-main-container .sub-main-box3');

  element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      
      const moveX = (offsetX / rect.width - 0.5) * 40; // 이동 강도 조절
      const moveY = (offsetY / rect.height - 0.5) * 40; // 이동 강도 조절
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(0, 0)';
  });
});