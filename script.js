//Hero Slider
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
// const swiper = new Swiper('.testimonial-slider', {
//     slidesPerView: 1,             
//     spaceBetween: 20,                
//     loop: true,                     
//     autoplay: {
//         delay: 3000,                
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// });
