/*
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.title-button');
  const images = document.querySelectorAll('.main-bg-contents');

  button.addEventListener('mouseover', () => {
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add('active');
      }, index * 1500); // 이미지가 순차적으로 나타나도록 1.5초 간격으로 설정
    });
  });

  button.addEventListener('mouseout', () => {
    images.forEach((img) => {
      img.classList.remove('active');
    });
  });
});
*/

$(document).ready(function () {
  const $button = $('.main-bg .main-sub-box .button-container');
  const $images = $('.main-bg-contents');
  let intervalId;

  function activateImages () {
    $images.each(function(index) {
      const $img = $(this);
      setTimeout(function () {
        $img.addClass('active');
      }, index * 1500); // 이미지가 순차적으로 나타나도록 1.5초 간격으로 설정
    });

    // setTimeout(function() {
    //   $images.removeClass('active');
    // }, $images.length * 1500); // 모든 이미지가 활성화된 후 비활성화
  }

  $button.on('mouseover', function() {
    activateImages();
    intervalId = setInterval(activateImages, $images.length * 1500 + 500); // 이미지가 반복되도록 인터벌 설정
  });

  $button.on('mouseout', function() {
    clearInterval(intervalId);
    $images.stop(true, true).removeClass('active');
  });
});

/* sub-main 텍스트 슬라이드 */
function createLoopingText(el) {
  const lerp = (current, target, factor) => current * (1 - factor) + target * factor;

  const state = {
    el, 
    lerp: {
      current: 0,
      target: 0 
    },
    interpolationFactor: 0.1, // 선형 보간에 사용되는 요인
    speed: 0.03, 
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

document.querySelectorAll('.marquee-contents-box').forEach(el => createLoopingText(el));
