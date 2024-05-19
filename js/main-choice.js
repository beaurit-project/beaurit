// choice slide
const $slideBtn = $('.choice-product .choice-no-bar li');
const $slideImgBox = $('.choice-slide-imgbox');
const slideItemCount = 3;
let currentIdx = 0;

$slideBtn.on('click', function () {
    const idx = $(this).index();

    $slideImgBox.stop().animate({
        marginLeft: -100 * idx + '%'
    }, 700);

    $slideBtn.removeClass('active');
    $(this).addClass('active');

    currentIdx = idx;
});

const autoSlide = () => {
    currentIdx = (currentIdx + 1) % slideItemCount;

    $slideImgBox.stop().animate({
        marginLeft: -100 * currentIdx + '%'
    }, 700);

    $slideBtn.eq(currentIdx).addClass('active').siblings().removeClass('active');
};

let mainSlide = setInterval(autoSlide, 2500);

$('.choice-product-contents').on({
    mouseenter: () => { clearInterval(mainSlide); },
    mouseleave: () => { mainSlide = setInterval(autoSlide, 3000); },
});


// ways to use
// const userDetailBoxes = document.querySelectorAll('.user-detail-box .user-detail');

// userDetailBoxes.forEach(userDetail => {
//     window.addEventListener('scroll', function() {
//         const userDetailPosition = userDetail.getBoundingClientRect().top;

//         if (userDetailPosition === 0) {
//             userDetail.querySelector('.use-txtdetail').classList.add('active');
//         } else {
//             userDetail.querySelector('.use-txtdetail').classList.remove('active');
//         }
//     });
// });


/******** ways to use 슬라이드 **********/

const userDetailBoxes = document.querySelectorAll('.user-detail-box .user-detail');
const waystouseNoBar = document.querySelector('.waystouse-no-bar');

// 현재 활성 슬라이드를 추적하는 변수
let activeSlideIndex = 0;

// 활성화된 숫자를 업데이트하는 함수
function updateActiveNumber(index) {
    waystouseNoBar.querySelector('.active').classList.remove('active');
    waystouseNoBar.querySelectorAll('li')[index].classList.add('active');
}

// 활성 슬라이드를 업데이트하는 함수
function updateActiveSlide(index) {
    userDetailBoxes.forEach((userDetail, i) => {
        if (i === index) {
            userDetail.classList.add('active');
            userDetail.querySelector('.use-txtdetail').classList.add('active'); // 해당 슬라이드의 설명을 활성화합니다.
        } else {
            userDetail.classList.remove('active');
            userDetail.querySelector('.use-txtdetail').classList.remove('active'); // 다른 슬라이드의 설명을 비활성화합니다.
        }
    });
}

// 버튼 그룹 너비와 첫 번째 버튼 너비 조절
const btnGroup = document.querySelector('.btn-group');
const firstBtn = btnGroup.querySelector('li:nth-child(1)'); // 첫 번째 버튼 선택

function adjustButtonWidth() {
    const numSlides = userDetailBoxes.length;
    const newWidth = 10 + 10 * activeSlideIndex; // 슬라이드할 때마다 5px씩 너비를 늘립니다.
    firstBtn.style.width = `${newWidth}px`; // 첫 번째 버튼의 너비를 적용합니다.
}

adjustButtonWidth(); // 초기 설정을 위해 한 번 호출

// 윈도우 크기 변경 시 버튼 너비 재조정
window.addEventListener('resize', adjustButtonWidth);

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', function() {
    // 각 슬라이드의 위치를 확인하여 활성 슬라이드를 결정
    userDetailBoxes.forEach((userDetail, index) => {
        const userDetailPosition = userDetail.getBoundingClientRect().top;

        if (userDetailPosition === 0) {
            activeSlideIndex = index;
        }
    });

    // 활성화된 숫자 및 슬라이드 업데이트
    updateActiveNumber(activeSlideIndex);
    updateActiveSlide(activeSlideIndex);

    // 버튼 너비 조절
    adjustButtonWidth();
});





