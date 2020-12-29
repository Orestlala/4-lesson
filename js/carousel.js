const images = [
    "img/subaru.svg" ,
    "img/ford.svg" ,
    "img/hyundai.svg" , 
    "img/volkswagen.svg" ,
    "img/chevrolet.svg"
]

let currentIdx = 0;
function showCurrent () {
    const imgElement1 = document.querySelector('.carousel .img1');
    const imgElement2 = document.querySelector('.carousel .img2');
    const imgElement3 = document.querySelector('.carousel .img3');
    imgElement1.src = images[currentIdx];
    const idx2 = currentIdx + 1 >= images.length ? 0 : currentIdx +1;
    const idx3 = idx2 + 1 > images.length ? 0 : idx2 + 1;
    imgElement1.src = images[currentIdx];
    imgElement2.src = images[idx2];
    imgElement3.src = images[idx3];
}

function nextIdx() {
    currentIdx++;
    if (currentIdx >= images.length) currentIdx = 0;
    showCurrent();
}

function prevIdx() {
    currentIdx--;
    if (currentIdx < 0) currentIdx = images.length - 1;
    showCurrent();
}

setInterval(nextIdx, 5000);
//document.querySelector('.carousel .next').addEventListener('click', nextIdx);
//document.querySelector('.carousel .prev').addEventListener('click', prevIdx);

