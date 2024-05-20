const btn = document.querySelector('.btn');
const imgs = document.querySelectorAll('.container .bg-img');
const h2 = document.querySelector('.main-box-h2'); // .main-box-h2 요소 선택

// h2 원래 컬러 저장
const originalColor = window.getComputedStyle(h2).color;

const TL = gsap.timeline({ repeat: -1, paused: true }); // 타임라인 생성. 무한 반복. 일시정지

// 이미지 애니메이션과 함께 .main-box-h2 컬러 변화 추가
TL.to(imgs, {
  duration: 3,
  opacity: 1,
  stagger: 1,
  ease: "power4.out",
  y: 5
}).to(h2, { // 컬러 변화 애니메이션 추가
  color: 'white', // 원하는 컬러로 변경
  duration: 1 // 컬러 변화 지속 시간
}, 0); // 타임라인의 시작 부분에서 동시에 실행되도록 설정

btn.addEventListener('mouseenter', () => {
  TL.restart(true); // 타임라인을 재시작하고 반복
});

btn.addEventListener('mouseleave', () => {
  TL.pause(); // 타임라인을 일시정지하여 반복을 멈춤
  gsap.to(imgs, {
    duration: 1,
    opacity: 0,
    ease: "power4.out",
    y: 0 // y축 위치 초기화
  });
  gsap.to(h2, {
    color: originalColor, // 원래 컬러로 변경
    duration: 1 // 컬러 변경 지속 시간
  });
});



  /* 
    setTimeout(콜백함수, 시간);
    setInterval(()=>{}, 1000)
  */
    $(function(){
      /*  let nextIdx = 0;
  
      setInterval(()=>{
        // 0,1,2 순환
        nextIdx = (nextIdx + 1) % $('.wrapper .txt-wrapper').length;
  
        $('.wrapper .txt-wrapper').removeClass('active');
        $('.wrapper .txt-wrapper').eq(nextIdx).addClass('active');
      
      }, 2000); */
  
      function movingText(num){
        // 0,1,2 인덱스가 자동으로 순환
       const nextIdx = (num + 1) % $('.wrapper .txt-wrapper').length;
        $('.wrapper .txt-wrapper').removeClass('active').eq(nextIdx).addClass('active');
  
        setTimeout(() => movingText(nextIdx), 2000);
      }
       movingText(0);
    });



    const content = "PLAY NOW"
    const text = document.querySelector(".txt-wrapper h2");
    let i = 0;
    
    function typing() {
        if (i < content.length) {
            let txt = content.charAt(i);
            text.innerHTML += txt;
            i++;
        } else {
            i = 0; // content 문자열을 모두 입력한 후, i를 다시 0으로 설정하여 처음부터 다시 시작
            text.innerHTML = ""; // 텍스트를 지우고 다시 시작하도록 HTML 요소의 내용을 초기화
        }
    }