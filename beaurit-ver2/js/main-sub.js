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
/*
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
*/