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
