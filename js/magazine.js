$('a[href="#"]').on('click', e => e.preventDefault());

$('.open').on('click', function(e) {
    e.preventDefault(); 
    var $this = $(this);
    var $container = $this.closest('.magazine-box');
    var $contents = $container.find('.magazine-txtbox-contents, .magazine-txtbox-top');
    
    $('.magazine-box').not($container).find('.magazine-txtbox-contents, .magazine-txtbox-top').slideUp();
    $('html, body').animate({
        scrollTop: 0
    }, 500); 
    
    $('.magazine-box').find('.open').show();
    $('.magazine-box').find('.close').hide();
    
    $contents.slideDown();
    $this.hide();
    $this.siblings('.close').show();
});

$('.close').on('click', function(e) {
    e.preventDefault(); 
    var $this = $(this);
    var $container = $this.closest('.magazine-box');
    var $contents = $container.find('.magazine-txtbox-contents, .magazine-txtbox-top');
    
    $contents.slideUp();
    $this.hide();
    $this.siblings('.open').show();
});

