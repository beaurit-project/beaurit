$('a[href="#"]').on('click', e => e.preventDefault());



window.addEventListener('scroll', function() {
    scrollRotate();
});

function scrollRotate() {
    let scrollTop = window.pageYOffset;
    let scrollHeight = document.body.scrollHeight;
    let windowHeight = window.innerHeight;

    let brandStoryTxtBox = document.querySelector('.brand-story-txt-box.stop img');
    let brandStoryTxtBoxRect = brandStoryTxtBox.getBoundingClientRect();
    let txtBoxCenter = brandStoryTxtBoxRect.top + brandStoryTxtBoxRect.height / 2;
    let windowCenter = windowHeight / 2;

    if (Math.abs(txtBoxCenter - windowCenter) < 10) { 
        setRotateValue(360);
    } else {
        let rotateValue = 360 * (scrollTop / (scrollHeight - windowHeight));
        setRotateValue(rotateValue);
    }
}

function setRotateValue(value) {
    let image1 = document.getElementById("rotate-img1");
    image1.style.transform = "rotate(" + value + "deg)";
    
    let image2 = document.getElementById("rotate-img2");
    image2.style.transform = "rotate(" + (-value) + "deg)";

    let image3 = document.getElementById("rotate-img3");
    image3.style.transform = "rotate(" + value + "deg)";

    let image4 = document.getElementById("rotate-img4");
    image4.style.transform = "rotate(" + (-value) + "deg)";

    let image5 = document.getElementById("rotate-img5");
    image5.style.transform = "rotate(" + value + "deg)";

    let image6 = document.getElementById("rotate-img6");
    image6.style.transform = "rotate(" + (-value) + "deg)";
}


/*
document.addEventListener('DOMContentLoaded', function() {

    const brandStoryContainer = document.querySelector('.brand-story-container');
    const rotateImages = document.querySelectorAll('.rotate img');
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', function() {

        const containerTop = brandStoryContainer.getBoundingClientRect().top;
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (containerTop <= 0 && footerTop >= windowHeight) {

            const scrollDistance = Math.min(Math.max(-containerTop, 0), footerTop - windowHeight);
            // 스크롤 이동 거리를 계산합니다. 이는 .brand-story-container 요소가 화면을 벗어나면 0으로 클리핑되고, footer가 창의 하단에 닿으면 footerTop - windowHeight으로 클리핑됩니다.

            const rotationDegree = Math.min((scrollDistance / (footerTop - windowHeight)) * 360, 360);
            // 회전 각도를 계산합니다. 스크롤 이동 거리에 따라 회전 각도가 0부터 360도 사이로 증가합니다.

            rotateImages.forEach(img => {
                const imgId = img.id;
                if (parseInt(imgId[imgId.length - 1]) % 2 === 0) {
                    img.style.transform = `rotate(-${rotationDegree}deg)`;
                } else {
                    img.style.transform = `rotate(${rotationDegree}deg)`;
                }
            });
        }
    });
});

*/



