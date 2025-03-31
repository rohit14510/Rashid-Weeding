$(document).ready(function(){
    $(".mobile-menuicon").click(function(){
        $(".mobile-menu").css("left", "0");  // Menu को दिखाने के लिए
    });

    $(".close-menu").click(function(){
        $(".mobile-menu").css("left", "-100%");  // Menu को छुपाने के लिए
    });

    // Menu के बाहर क्लिक करने पर भी बंद करने का ऑप्शन
    $(document).click(function(event) {
        if (!$(event.target).closest('.mobile-menu, .mobile-menuicon').length) {
            $(".mobile-menu").css("left", "-100%");
        }
    });
});

//Hero Slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
    }).mount();
});
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //counter
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let isScrolling = false;

    const startCounter = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const speed = 100; // स्पीड कंट्रोल करें
            let count = 0;

            const updateCounter = () => {
                const increment = target / speed;

                if (count < target) {
                    count += increment;
                    counter.textContent = Math.floor(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                updateCounter();
            }
        });
    };

    window.addEventListener("scroll", () => {
        if (!isScrolling) {
            isScrolling = true;
            setTimeout(() => {
                startCounter();
                isScrolling = false;
            }, 200);
        }
    });

    startCounter();  // लोड होने पर भी काउंटर चलेगा
});
// testi slider
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".testimonial-slider", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  });
  
