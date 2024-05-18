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

let mainSlide = setInterval(autoSlide, 3000);

$('.choice-product-contents').on({
    mouseenter: () => { clearInterval(mainSlide); },
    mouseleave: () => { mainSlide = setInterval(autoSlide, 3000); },
});


// ways to use
const userDetailBoxes = document.querySelectorAll('.user-detail-box .user-detail');

userDetailBoxes.forEach(userDetail => {
    window.addEventListener('scroll', function() {
        const userDetailPosition = userDetail.getBoundingClientRect().top;

        if (userDetailPosition === 0) {
            userDetail.querySelector('.use-txtdetail').classList.add('active');
        } else {
            userDetail.querySelector('.use-txtdetail').classList.remove('active');
        }
    });
});












