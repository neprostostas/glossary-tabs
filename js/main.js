document.addEventListener("DOMContentLoaded", (event) => {

    /* ======== Swiper ======== */
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.2,
        spaceBetween: 30,
        breakpoints: {
            10: {
                slidesPerView: 1.2,
            },
            1015: {
                slidesPerView: 3.2,
            },
        },
    });


    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tab = button.getAttribute("data-tab");

            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            button.classList.add("active");
            document.getElementById(tab).classList.add("active");
        });
    });

    // Activate the first tab by default
    tabButtons[0].classList.add("active");
    tabContents[0].classList.add("active");


});
