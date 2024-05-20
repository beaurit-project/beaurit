window.onscroll = function () {
    scrollRotate(); 
};
  
function scrollRotate() {
    let scrollTop = window.pageYOffset;
    let scrollHeight = document.body.scrollHeight;
    let windowHeight = window.innerHeight;

    let brandStoryContainer = document.querySelector('.brand-story-container');
    let brandStoryContainerRect = brandStoryContainer.getBoundingClientRect();
    let containerBottom = brandStoryContainerRect.bottom;

    let rotateValue = 360 * (scrollTop / (scrollHeight - windowHeight));
    if (containerBottom <= 0) {
        rotateValue = 360; 
    } else if (rotateValue >= 360) {
        rotateValue = 0; 
    }

    let image1 = document.getElementById("rotate-img1");
    image1.style.transform = "rotate(" + rotateValue + "deg)";
    
    let image2 = document.getElementById("rotate-img2");
    image2.style.transform = "rotate(" + (-rotateValue) + "deg)";

    let image3 = document.getElementById("rotate-img3");
    image3.style.transform = "rotate(" + rotateValue + "deg)";

    let image4 = document.getElementById("rotate-img4");
    image4.style.transform = "rotate(" + (-rotateValue) + "deg)";

    let image5 = document.getElementById("rotate-img5");
    image5.style.transform = "rotate(" + rotateValue + "deg)";

    let image6 = document.getElementById("rotate-img6");
    image6.style.transform = "rotate(" + (-rotateValue) + "deg)";
}

