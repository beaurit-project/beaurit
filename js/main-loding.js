$('a[href="#"]').on('click', e => e.preventDefault());


/************ 로딩페이지 ********/
function hideLoader() {
    $('.loader-container').slideUp();
    $(".contents").show();
  }
  
  window.addEventListener('load', () => {
    $(".contents").css({'display':'none'});
    setTimeout(hideLoader, 2000); // 2000 밀리초 = 2초

  });

