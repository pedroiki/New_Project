$(document).ready(function () {

    // Content Slider
    $('.content-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: ['<img src="images/arrow-left.png" alt="Left">', '<img src="images/arrow-right.png" alt="Right">'],
        dots: false,
        margin: 0,
        autoplay: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });

    // Video Player
    videojs('my-video').ready(function () {
        console.log(this.options()); //log all of the default videojs options

        // Store the video object
        var myPlayer = this,
            id = myPlayer.id();
        // Make up an aspect ratio
        var aspectRatio = 264 / 640;

        function resizeVideoJS() {
            var width = document.getElementById(id).parentElement.offsetWidth;
            myPlayer.width(width).height(width * aspectRatio);

        }

        // Initialize resizeVideoJS()
        resizeVideoJS();
        // Then on resize call resizeVideoJS()
        window.onresize = resizeVideoJS;
    });

});
