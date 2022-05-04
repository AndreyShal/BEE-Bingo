function correctVhWindow() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}
correctVhWindow();

document.querySelector(".burger-checkbox").addEventListener("click", function () {
  document.body.classList.toggle("body-hidden");
});

// ..........................................................swiper..............//
var swiper1 = new Swiper(".swiper2", {
  // Default parameters
  slidesPerView: 0,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  // Responsive breakpoints1
  breakpoints: {
    // when window width is >= 360px
    320: {
      slidesPerView: 1.17,
      spaceBetween: 0,
      initialSlide: 0,
    },
    // when window width is >= 768px
    567.98: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
