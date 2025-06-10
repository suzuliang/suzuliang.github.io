let currentIndex = 0;
const images = document.querySelectorAll('.banner img');
const totalImages = images.length;


function showSlide(index) {

    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }


    const newTransformValue = -currentIndex * 100;
    document.querySelector('.banner').style.transform = `translateX(${newTransformValue}%)`;
}


function moveSlide(step) {
    showSlide(currentIndex + step);
}


function autoPlay() {
    showSlide(currentIndex + 1);
}


setInterval(autoPlay, 3000);


showSlide(currentIndex);
