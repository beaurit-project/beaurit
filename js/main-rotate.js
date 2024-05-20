// 스크롤 이벤트를 사용하여 .brand-story의 위치를 모니터링하고 조건을 확인
window.addEventListener('scroll', function() {
    var brandStory = document.querySelector('.brand-story');
    var brandStoryContainer = document.querySelector('.brand-story-container');

    // .brand-story의 현재 위치 확인
    var brandStoryTop = brandStory.getBoundingClientRect().top;

    // 조건 확인
    if (brandStoryTop <= 0) {
        // .brand-story의 top이 0이 되었을 때, .brand-story-container의 포지션 스티키 적용
        brandStoryContainer.style.position = 'sticky';
        brandStoryContainer.style.top = '0';
        brandStoryContainer.style.zIndex = '100';
    } else {
        // .brand-story의 top이 0보다 크면, .brand-story-container의 스티키 속성 제거
        brandStoryContainer.style.position = 'static';
        brandStoryContainer.style.top = 'auto';
        brandStoryContainer.style.zIndex = 'auto';
    }
});
