

// magazine-box box1
$('.open').on('click', function(e) {
    e.preventDefault(); 
    var $this = $(this);
    var $contents = $this.closest('.magazine-box').find('.magazine-txtbox-contents, .magazine-txtbox-top');
    $contents.slideDown();
    $this.hide();
    $this.siblings('.close').show();
});

$('.close').on('click', function(e) {
    e.preventDefault(); 
    var $this = $(this);
    var $contents = $this.closest('.magazine-box').find('.magazine-txtbox-contents, .magazine-txtbox-top');
    $contents.slideUp();
    $this.hide(); 
    $this.siblings('.open').show(); 
});

