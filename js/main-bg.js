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

/* 이미지 구역 hover 시, 이미지 안 텍스트 생김 */
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
  translateY: 5,
  duration : 2.5,
  repeat : -1,
  yoyo: true,
  ease: 'poswer2.inOut'
});
gsap.fromTo(".sub-main-box2", {
  translateY : -10,
}, {
  translateY: 13,
  duration : 2,
  repeat : -1,
  yoyo: true,
  ease: 'poswer2.inOut'
});
gsap.fromTo(".sub-main-box3", {
  translateY : -10,
}, {
  translateY: 10,
  duration : 3,
  repeat : -1,
  yoyo: true,
  ease: 'poswer2.inOut'
});

/* 자석 버튼 */
class HoverButton {
  constructor(el) {
    this.el = el;
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener();
  }
  
  attachEventsListener() {
    window.addEventListener('mousemove', e => this.onMouseMove(e));
    window.addEventListener('resize', e => this.calculatePosition(e));
  }
  
  calculatePosition() {
    gsap.set(this.el, {
      x: 0,
      y: 0,
      scale: 1
    });
    const box = this.el.getBoundingClientRect();
    this.x = box.left + (box.width * 0.5);
    this.y = box.top + (box.height * 0.5);
    this.width = box.width;
    this.height = box.height;
  }
  
  onMouseMove(e) {
    let hover = false;
    let hoverArea = (this.hover ? 0.7 : 0.5);
    let x = e.clientX - this.x;
    let y = e.clientY - this.y;
    let distance = Math.sqrt( x*x + y*y );
    if (distance < (this.width * hoverArea)) {
       hover = true;
        if (!this.hover) {
          this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
    }
    
    if(!hover && this.hover) {
      this.onLeave();
      this.hover = false;
    }
  }
  
  onHover(x, y) {
    gsap.to(this.el,  {
      x: (x - this.x) * 0.4,
      y: (y - this.y) * 0.4,
      scale: 1.15,
      ease: 'power2.out',
      duration: 0.4
    });
    this.el.style.zIndex = 10;
  }
  onLeave() {
    gsap.to(this.el, {
      x: 0,
      y: 0,
      scale: 1,
      ease: 'elastic.out(1.2, 0.4)',
      duration: 0.7
    });
    this.el.style.zIndex = 1;
  }
}
const btn1 = document.querySelector('.title-button');
new HoverButton(btn1);