window.onload = function () {
  document.body.classList.add("loaded_hiding");
  // document.body.classList.add("body-hidden");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
    // document.body.classList.remove("body-hidden");
  }, 500);
};

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

// ..................................................................toggleMenu.....................//
function toggleMenu() {
  document.querySelector(".burger-checkbox").addEventListener("click", function () {
    document.querySelector(".menu-wrapper").classList.toggle("left-menu");
    document.body.classList.toggle("body-hidden");
    document.querySelector(".burger-span1").classList.toggle("burger-span1-checked");
    document.querySelector(".burger-span2").classList.toggle("burger-span2-checked");
    document.querySelector(".burger-span3").classList.toggle("burger-span3-checked");
  });
  let menuHidden = document.querySelectorAll(".menu-hidden");
  for (let i = 0; i < menuHidden.length; i++) {
    menuHidden[i].addEventListener("click", function () {
      document.querySelector(".menu-wrapper").classList.toggle("left-menu");
      document.body.classList.toggle("body-hidden");
      document.querySelector(".burger-span1").classList.toggle("burger-span1-checked");
      document.querySelector(".burger-span2").classList.toggle("burger-span2-checked");
      document.querySelector(".burger-span3").classList.toggle("burger-span3-checked");
    });
  }
}
toggleMenu();

// document.querySelector(".burger-checkbox").addEventListener("click", function () {
// });

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
      slidesPerView: 1.1,
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

// ...................................................smoothScrollingPrinciples......................//
function scrollGsap() {
  function scroller123() {
    gsap.registerPlugin(ScrollTrigger);

    const container = document.getElementById("sections");

    ScrollTrigger.matchMedia({
      "(min-width: 1200px)": function () {
        gsap.to(container, {
          x: () => -(container.offsetWidth - innerWidth) + "px",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1.6,
            end: () => "+=" + (container.offsetWidth - innerWidth),
          },
        });
      },
    });
  }
  scroller123();

  let menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      let id = this.getAttribute("href");
      id = document.querySelector(id);
      let { left } = id.getBoundingClientRect();
      gsap.to("html", { scrollTo: left, duration: 1.5 });
    });
  });
}
scrollGsap();

function imageTransformGsap() {
  gsap.from(".vector-line", {
    duration: 5,
    opacity: 0,
    stagger: 0.2,
    ease: "elastic",
    yoyo: true,
    repeat: -1,
    repeatDelay: 0,
    delay: 0,
  });

  gsap.from(".vector-line", {
    stagger: 0.2,
    duration: 5,
    rotate: 180,
    transformOrigin: "center",
    yoyo: true,
    repeat: -1,
    repeatDelay: 0,
    delay: 0,
  });
}
imageTransformGsap();
