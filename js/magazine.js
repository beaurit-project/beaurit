$('a[href="#"]').on('click', e => e.preventDefault());

$('.open').on('click', function(e) {
    e.preventDefault(); 
    var $this = $(this);
    var $container = $this.closest('.magazine-box');
    var $contents = $container.find('.magazine-txtbox-contents, .magazine-txtbox-top');
    
    // 모든 .magazine-box에서 열린 콘텐츠를 닫고, 스크롤을 상단으로 이동합니다.
    $('.magazine-box').not($container).find('.magazine-txtbox-contents, .magazine-txtbox-top').slideUp();
    $('html, body').animate({
        scrollTop: 0
    }, 500); // 0.5초 동안 스크롤 이동
    
    // 다른 .open 요소는 보여지고, 현재 클릭한 요소는 숨겨집니다.
    $('.magazine-box').find('.open').show();
    $('.magazine-box').find('.close').hide();
    
    // 현재 클릭한 요소의 콘텐츠를 펼칩니다.
    $contents.slideDown();
    $this.hide();
    $this.siblings('.close').show();
});

$('.close').on('click', function(e) {
    e.preventDefault(); 
    var $this = $(this);
    var $container = $this.closest('.magazine-box');
    var $contents = $container.find('.magazine-txtbox-contents, .magazine-txtbox-top');
    
    // 현재 클릭한 요소의 콘텐츠를 닫습니다.
    $contents.slideUp();
    $this.hide();
    $this.siblings('.open').show();
});

