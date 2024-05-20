<<<<<<< HEAD
/*
$(document).ready(function () {
  const $button = $('.main-bg .main-sub-box .button-container');
  const $images = $('.main-bg-contents');
  let intervalId;
=======
/******* header 사라짐 **********/
>>>>>>> f4800cea2ca7d0f8e6a5d825d0dec59107e07d12

$(window).on('scroll',()=>{
  if(scrollY > 200){
    $('header').addClass('none');
  }else{
    $('header').removeClass('none').animate({'transition': '1s'});
  }
});


/*************** main-bg 이미지 텍스트 효과 ***************/
const btn = document.querySelector('.btn');
const imgs = document.querySelectorAll('.container .bg-img');
const h2 = document.querySelector('.main-box-h2'); // .main-box-h2 요소 선택
const textsWrapper = document.querySelector('.wrapper .txt-wrapper.active h2'); // 텍스트 요소 선택

// 초기 텍스트와 텍스트 색상 저장
const originalColor = window.getComputedStyle(h2).color;
const originalTextColor = window.getComputedStyle(textsWrapper).color;

// 텍스트 배열
const texts = [
  "Play Now!",
  "Do beaurit now!",
  "How to love my self!"
];

let textIndex = 0; // 텍스트 배열의 인덱스

// 텍스트 변경 함수
function changeText() {
  const currentText = texts[textIndex]; // 현재 텍스트 선택
  textIndex = (textIndex + 1) % texts.length; // 인덱스 업데이트

  // Typed.js 초기화
  if (typeof typed !== 'undefined') {
    typed.destroy();
  }

  // 새로운 텍스트로 Typed.js 초기화
  typed = new Typed('.wrapper .txt-wrapper.active h2', {
    strings: [currentText],
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: false,
    loop: false
  });
}

// GSAP 타임라인 생성
const TL = gsap.timeline({ repeat: -1, paused: true }); // 무한 반복. 일시정지

// 이미지 애니메이션과 함께 텍스트 색상 변경
imgs.forEach((img, i) => {
  TL.to(img, {
    duration: 1,
    opacity: 1,
    ease: "power4.out",
    y: 5,
    onStart: changeText // 이미지 전환 시작 시 텍스트 변경
  }, i * 1.8); // 이미지 애니메이션 시작 시점 조정
});

// h2와 텍스트 색상 변경 애니메이션 추가
TL.to(h2, {
  color: 'white', // 흰색으로 변경
  duration: 1 // 애니메이션 지속 시간
}, 0); // 타임라인 시작 부분에서 동시 실행

TL.to(textsWrapper, {
  color: 'white', // 흰색으로 변경
  duration: 1 // 애니메이션 지속 시간
}, 0); // 타임라인 시작 부분에서 동시 실행

// 버튼 이벤트 리스너 등록
btn.addEventListener('mouseenter', () => {
  TL.restart(true); // 타임라인 재시작
});

btn.addEventListener('mouseleave', () => {
  TL.pause(); // 타임라인 일시정지

  // 이미지 애니메이션 초기화
  gsap.to(imgs, {
    duration: 1,
    opacity: 0,
    ease: "power4.out",
    y: 0 // y축 위치 초기화
  });

  // 원래의 텍스트와 색상으로 변경
  gsap.to(h2, {
    color: originalColor, // 원래 컬러로 변경
    duration: 1 // 애니메이션 지속 시간
  });

  gsap.to(textsWrapper, {
    color: originalTextColor, // 원래 컬러로 변경
    duration: 1 // 애니메이션 지속 시간
  });

  // 텍스트를 초기화 텍스트로 변경
  if (typeof typed !== 'undefined') {
    typed.destroy();
  }

  typed = new Typed('.wrapper .txt-wrapper.active h2', {
    strings: ["Play Now!"],
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: false,
    loop: false
  });
});
*/

// 페이지 로드 시 초기 텍스트로 설정
window.addEventListener('load', () => {
  if (typeof typed !== 'undefined') {
    typed.destroy();
  }

<<<<<<< HEAD
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
      
      const moveX = (offsetX / rect.width - 0.5) * 30; // 이동 강도 조절
      const moveY = (offsetY / rect.height - 0.5) * 30; // 이동 강도 조절
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(0, 0)';
=======
  typed = new Typed('.wrapper .txt-wrapper.active h2', {
    strings: ["Play Now!"],
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: false,
    loop: false
>>>>>>> f4800cea2ca7d0f8e6a5d825d0dec59107e07d12
  });
});


<<<<<<< HEAD

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.sub-main .sub-main-container .sub-main-box2');

  element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      
      const moveX = (offsetX / rect.width - 0.5) * 30; // 이동 강도 조절
      const moveY = (offsetY / rect.height - 0.5) * 30; // 이동 강도 조절
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(0, 0)';
  });
=======
/********** 버튼 별로 바뀜 *******/
$('.btn').on({
  'mouseenter' : (e) => { 
    $('.btn').addClass('on');
  },
  'mouseleave' : (e) => { 
    $('.btn').removeClass('on');
  }
>>>>>>> f4800cea2ca7d0f8e6a5d825d0dec59107e07d12
});


<<<<<<< HEAD
  element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      
      const moveX = (offsetX / rect.width - 0.5) * 30; // 이동 강도 조절
      const moveY = (offsetY / rect.height - 0.5) * 30; // 이동 강도 조절
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(0, 0)';
  });
});
=======
>>>>>>> f4800cea2ca7d0f8e6a5d825d0dec59107e07d12
