$(".header-container").load("../components/header-content.html");
$(".header-search-container").load("../components/header-search.html");
$(".footer-container").load("../components/footer-content.html");

const favoriteItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];
const allItems = {
    2: {
        title: "What are Timeless Tone?",
        url: "/contents/what-are-timeless-tone.html",
        description: "Bagaimana pakaian timeless selalu terasa seperti baru dan cocok di setiap waktunya?",
        img: "../assets/magazine/Magazine_2.png",
    },
    3: {
        title: "Edinburgh: Old City, New Style",
        url: "/contents/edinburgh-old-city-new-style.html",
        description: "Edinburgh, kota lama dengan gaya berpakaian yang baru.",
        img: "../assets/magazine/Magazine_3.png",
    },
    4: {
        title: "The Playful Pairs?",
        url: "/contents/the-playful-pairs.html",
        description: "Desain baju yang nyaman dan seru untuk dilihat dan digunakan.",
        img: "../assets/magazine/Magazine_4.png",
    },
    5: {
        title: "Coziness and Comfort in Stockholm",
        url: "/contents/coziness-and-comfort-in-stockholm.html",
        description: "Gaya Nordic yang modern dan fungsional serta bergaya modern.",
        img: "../assets/magazine/Magazine_5.png",
    },
    6: {
        title: "The Ins and Out of Easy Wear",
        url: "/contents/the-ins-and-out-of-easy-wear.html",
        description: "Gaya kasual outfit untuk di dalam maupun di luar ruangan.",
        img: "../assets/magazine/Magazine_6.png",
    },
    7: {
        title: "Kagawa: Timeless Modern",
        url: "/contents/kagawa-timeless-modern.html",
        description: "Desainer Kagawa dengan pakaian autentiknya, bertema pakaian cocok di setiap waktu.",
        img: "../assets/magazine/Magazine_7.png",
    },
    8: {
        title: "Unique Clothing",
        url: "/contents/unique-clothing.html",
        description: "Barang Uniqlo yang Unique",
        img: "../assets/magazine/Magazine_8.png",
    },
};

favoriteItems.forEach(function (itemId) {
    if (allItems[itemId]) {
        $("#favorite-list").append(
            `<a href="${allItems[itemId].url}">
                <div class="favorite-result">
                    <img src="${allItems[itemId].img}" alt="${allItems[itemId].title}" />
                    <div class="column-section">
                        <h3>${allItems[itemId].title}</h3>
                        <p>${allItems[itemId].description}</p>
                    </div>
                </div>
            </a>`
        );
    }
});

if (favoriteItems.length === 0) {
    $("#favorite-list").append("<p>No favorite items found.</p>");
}

if (favoriteItems.length < 5) {
    $(".favorite-magazine").css("height", "100vh");
}