$(document).ready(function () {
    // fetch data header
    $('.header-container').load('components/header.html');

    // scroll magazine
    const url = [
        "contents/what-is-lifeware-magazine.html",
        "contents/what-is-lifeware-magazine.html",
        "contents/what-is-lifeware-magazine.html",
        "contents/what-is-lifeware-magazine.html",
    ]

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
        $('.animation').attr('href', url[index]);
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