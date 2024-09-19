$(document).ready(function () {
    // menu
    $('.menu').click(function () {
        $('.sidebar').addClass('show');
        $('.fullbar').addClass('show');
        $('header').addClass('index');
    })

    $('.close').click(function () {
        $('.sidebar').removeClass('show');
        setTimeout(() => {
            $('.fullbar').removeClass('show');
        }, 500); 
    })

    // nav animation
    const $header = $('header');
    const $firstAnimation = $('.first-animation');

    const firstAnimationHeight = $firstAnimation.outerHeight();

    let lastKnownScrollPosition = 0;
    let ticking = false;

    function toggleHeaderVisibility(scrollPos) {
        if (scrollPos > firstAnimationHeight) {
            $header.addClass('show');
        } else {
            $header.removeClass('show');
        }
    }

    $(window).on('scroll', function() {
        const currentScrollPosition = $(this).scrollTop();
        const isScrollingDown = currentScrollPosition > lastKnownScrollPosition;

        lastKnownScrollPosition = currentScrollPosition;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                toggleHeaderVisibility(currentScrollPosition, isScrollingDown);
                ticking = false;
            });
            ticking = true;
        }
    });

    // scroll magazine
    const images = [
        "assets/magazine/Magazine_1.png",
        "assets/magazine/Magazine_2.png",
        "assets/magazine/Magazine_1.png",
        "assets/magazine/Magazine_2.png"
    ];

    const texts = [
        "What is LifeWear Magazine",
        "The Future of Fashion",
        "Sustainability and Style",
        "Comfort in Every Season"
    ];

    let currentIndex = 0;

    function updateContent(index) {
        $('#animation-img').attr('src', images[index]);
        $('#animation-text').text(texts[index]);

        const progressWidth = ((index + 1) / images.length) * 100;
        $('.progress-indicator').css('width', `${progressWidth}%`);
    }

    $('#arrow-right').click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateContent(currentIndex);
    });

    $('#arrow-left').click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateContent(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateContent(currentIndex);
    }, 5000); 

    updateContent(currentIndex);
});


