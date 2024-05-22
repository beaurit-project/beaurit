
function magneticButton(element) {
  const children = element.children[0]

  element.addEventListener('mousemove', e => {
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element
    const left = e.pageX - offsetLeft
    const top = e.pageY - offsetTop
    const centerX = left - offsetWidth / 2
    const centerY = top - offsetHeight / 2
    const d = Math.sqrt(centerX**2 + centerY**2)

    gsap.to(element, 0.5, {
      x: centerX / 1.5,
      y: centerY / 1.5,
      ease: Elastic.easeOut
    })

    children.style.transform = `
      translate3d(${centerX / 4}px, ${centerY / 4}px, 0)
      rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg)
    `

    
  })

  element.addEventListener('mouseleave', () => {
    gsap.to(element, 1.2, {
      x: 0,
      y: 0,
      ease: Elastic.easeOut.config(1, 0.1)
    })
    children.style.transform = ''
  })
}

document.querySelectorAll('.logo-effect').forEach(element => {
  magneticButton(element);
});


// // HTML 요소를 가져옵니다.
// var menuBoxDetail = document.querySelector('.menu-box-detail');
// var menuBoxDetailImg = document.querySelector('.menu-box-detail img');

// // 바운싱 애니메이션을 적용할 함수를 정의합니다.
// function applyBounceEffect() {
//     // 이미지에 바운싱 효과를 적용합니다.
//     menuBoxDetailImg.style.animation = 'bounce 0.5s infinite alternate'; // 바운싱 애니메이션 적용
// }

// // 마우스를 올렸을 때의 이벤트 리스너를 추가합니다.
// menuBoxDetail.addEventListener('mouseenter', function() {
//     applyBounceEffect();
// });

// // 마우스를 떼었을 때의 이벤트 리스너를 추가합니다.
// menuBoxDetail.addEventListener('mouseleave', function() {
//     // 바운싱 애니메이션을 제거합니다.
//     menuBoxDetailImg.style.animation = 'none';
// });


