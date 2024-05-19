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

/******** ways to use 슬라이드 **********/

    // Scroll event listener
    const userDetail = $('.user-detail');
    const useTxtDetail = $('.use-txtdetail');
    const waystouseNoBar = $('.waystouse-no-bar li');
    const progressBarBtn = $('.progress-bar-btn-group li');
    
    $(window).on('scroll', function () {
        let progressIndex = 0;
        
        userDetail.each(function (index) {
            const elementTop = $(this).offset().top;
            const windowTop = $(window).scrollTop();
            
            if (elementTop <= windowTop) {
                useTxtDetail.removeClass('active');
                waystouseNoBar.removeClass('active');
                
                $(this).find('.use-txtdetail').addClass('active');
                waystouseNoBar.eq(index).addClass('active');
                
                progressIndex = index + 1;
            }
        });
    

        progressBarBtn.css('width', (progressIndex * 8.33) + 'px');

        
    });

    


// 모바일
if (window.matchMedia("(max-width: 450px)").matches) {
    $(window).on('scroll', function () {
        let progressIndex = 0;
        const windowHeight = $(window).height(); // 뷰포트(화면)의 높이
        const windowTop = $(window).scrollTop(); // 스크롤된 거리

        userDetail.each(function (index) {
            const elementTop = $(this).offset().top; // 요소의 상단 위치

            // 요소의 상단이 화면의 상단으로부터 10% 이하일 때
            if (windowTop >= elementTop - (windowHeight * 0.1)) {
                useTxtDetail.removeClass('active');
                waystouseNoBar.removeClass('active');

                $(this).find('.use-txtdetail').addClass('active');
                waystouseNoBar.eq(index).addClass('active');

                progressIndex = index + 1;
            }
        });

        progressBarBtn.css('width', (progressIndex * 8.33) + 'px');
    });
}


    




