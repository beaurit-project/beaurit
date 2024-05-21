$('a[href="#"]').on('click', e => e.preventDefault());



function hideLoader() {
    $('.loader-container').addClass('loader-hide');
  }
  
  window.addEventListener('load', () => {
    setTimeout(hideLoader, 2500); // 2000 밀리초 = 2초
  });