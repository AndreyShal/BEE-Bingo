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
function smoothScrollingPrinciples() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed",
  });

  // let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");

  let pinWrapWidth;
  let horizontalScrollLength;

  function resize() {
    pinWrapWidth = pinWrap.offsetWidth;
    horizontalScrollLength = pinWrapWidth - innerWidth;
  }

  window.addEventListener("load", function () {
    // Pinning and horizontal scrolling
    gsap.to(".pin-wrap", {
      scrollTrigger: {
        scroller: ".smooth-scroll",
        scrub: true,
        trigger: "#sectionPin",
        pin: true,
        start: "top top",
        end: () => `+=${pinWrapWidth}`, // Functional value to make sure it updates on refresh
        invalidateOnRefresh: true, // Invalidate the tween as well
      },
      x: () => -horizontalScrollLength,
      ease: "sine.out",
    });

    ScrollTrigger.addEventListener("refreshInit", resize);

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
  });
}
smoothScrollingPrinciples();
