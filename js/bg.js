const btn = document.querySelector('.btn');
const imgs = document.querySelectorAll('.container .bg-img');

const TL = gsap.timeline({ paused: true }); //타임라인 생성. 일시정지

TL.to(imgs, {
  duration: 0.4,
  opacity: 1,
  stagger: 1,
  ease: "back.out(1.7)",
  'border-radius': 20
});

btn.addEventListener('mouseenter' , ()=>{
   TL.play();
});


TLend.to(imgs, {
  opacity: 0
});

btn.addEventListener('mouseleave' , ()=>{
  TLend.play();
});

