// Мобильное меню
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

// слайдер
let swiper = new swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  effect: "fade",
  loop: true,
  spaceBetween: 30,
  mousewheel: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    clickable: true,
  },
});
