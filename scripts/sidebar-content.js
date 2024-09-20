$(".sidebar-container").load("../components/sidebar-content.html", function () {
    $("#close-sidebar").click(function () {
        $(".sidebar").removeClass("show");
        setTimeout(() => {
            $(".fullbar").removeClass("show");
        }, 500);
    });
});

// menu
$('.menu').click(function () {
    $('.sidebar').addClass('show');
    $('.fullbar').addClass('show');
    $('header').addClass('index');
})

$('#close-sidebar').click(function () {
    $('.sidebar').removeClass('show');
    setTimeout(() => {
        $('.fullbar').removeClass('show');
    }, 500);
})
