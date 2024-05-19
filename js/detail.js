/******* header 사라짐 **********/
$(window).on('scroll',()=>{
  if(scrollY > 200){
    $('header').addClass('none');
  }else{
    $('header').removeClass('none').animate({'transition': '1s'});
  }
});


/******* add-color-into 슬라이드 버튼 ***********/
  
  $('.btn-group li').eq(0).on('click',()=>{
    $('.add-color-img').animate({ marginLeft : 0 }, 'linear');
  });
  $('.btn-group li').eq(1).on('click',()=>{
    $('.add-color-img').animate({ marginLeft : '-100%' }, 'linear');
  });
  $('.btn-group li').eq(2).on('click',()=>{
    $('.add-color-img').animate({ marginLeft : '-200%' }, 'linear');
  });
  $('.btn-group li').eq(3).on('click',()=>{
    $('.add-color-img').animate({ marginLeft : '-300%' }, 'linear');
  });



/********** hero-section 텍스트 움직임 *****************/
  function createLoopingText(el) {
    const lerp = (current, target, factor) => current * (1 - factor) + target * factor;
  
    const state = {
      el, 
      lerp: {
        current: 0,
        target: 0 
      },
      interpolationFactor: 0.1, // 선형 보간에 사용되는 요인
      speed: 0.08,  //속도
      direction: -1
    };
    
    state.el.style.cssText = 'position: relative; display: inline-flex; white-space: nowrap;';
    state.el.children[1].style.cssText = `position: absolute; left: ${100 * -state.direction}%;`;
  
    
    function animate() {
      state.lerp.target += state.speed;
      state.lerp.current = lerp(state.lerp.current, state.lerp.target, state.interpolationFactor);
  
      if (state.lerp.target > 100) {
        state.lerp.current -= state.lerp.target;
        state.lerp.target = 0;
      }
  
      const x = state.lerp.current * state.direction;
      state.el.style.transform = `translateX(${x}%)`;
    }
  
    function render() {
      animate();
      window.requestAnimationFrame(render);
    }
  
    render();
    return state;
  }
  
  document.querySelectorAll('.loop-container').forEach(el => createLoopingText(el));

  


/******** 글자 타이핑 **********/
  const content = "기구 필라테스를 내 방에서, 뷰릿 홈 필라테스";
  const text = document.querySelector(".text");
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
  
  setInterval(typing, 200);



/******** 슬라이드 움직임 *****/
  const subSwiper = new Swiper(".sub-swiper", {
    speed: 1000,
    loop:true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".sub-page-no",
      clickable: true,
    }
  });


/**************** 마우스 커서 ******************/
  
  const emoji = document.querySelector('.emoji');
  $('.emoji');

  // 마우스 좌표
  let mouseX = 0;
  let mouseY = 0;

  // 커서를 따라 다니는 이모지 좌표
  // $(window).on('mousemove', ()=>{})
  addEventListener ('mousemove',(e)=>{
    mouseX = e.clientX;
    mouseY = e.clientY;
    console.log(mouseX, mouseY)
  });

  // 마우스 커서를 따라 다니는 이모지 좌표
  let emojiX = 0;
  let emojiY = 0;

  // 호출

  const emojiMov= () =>{
    requestAnimationFrame(emojiMov); //연속 호출 필요

    emojiX += (mouseX - emojiX) * 0.4
    emojiY += (mouseY - emojiY) * 0.4

    emoji.style.transform = `translate(${emojiX}px, ${emojiY}px)`;
  }

  emojiMov();


  
  $('.swiper, .set-img1, .set-img2').on({
    'mouseenter' : (e) => { 
      const target = $('.emoji');
      target.css({display : 'block'});
    },
    'mouseleave' : (e) => {
      const target = $('.emoji');
      target.css({display : 'none'});
    }
  });