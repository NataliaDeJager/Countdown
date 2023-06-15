console.log('JS Loaded');

var countdownElement = document.getElementById('countdown');

var bgImageElement = document.getElementById('bg-image');

var initialCountdownVal = countdownElement.innerHTML;

setInterval(function (){
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;

    countdownElement.innerHTML = initialCountdownVal;
    var backImgPath = initialCountdownVal % 2 === 0 ? 'photo-1614849286521-4c58b2f0ff15.jpg' : 'images.jpg'

    bgImageElement.src = backImgPath;
}, 1000);
