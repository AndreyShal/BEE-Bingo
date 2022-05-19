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
      return { top: 0, left: 1000, width: window.innerWidth, height: window.innerHeight };
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

  ScrollTrigger.matchMedia({
    "(min-width: 767px)": function () {
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
    },
  });
}
smoothScrollingPrinciples();

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

function scrollGsap() {
  gsap.registerPlugin(ScrollToPlugin);
  document.querySelector("#scroll-team").addEventListener("click", function () {
    gsap.to(window, { duration: 2, scrollTo: "#our-team-dsc" });
  });
  document.querySelector("#scroll-all-world").addEventListener("click", function () {
    gsap.to(window, { duration: 2, scrollTo: "#all-world-dsc" });
  });
  document.querySelector("#scroll-predictions").addEventListener("click", function () {
    gsap.to(window, { duration: 2, scrollTo: "#predictions-dsc" });
  });
  document.querySelector("#scroll-world-most").addEventListener("click", function () {
    gsap.to(window, { duration: 2, scrollTo: "#world-most-dsc" });
  });
  document.querySelector("#scroll-care").addEventListener("click", function () {
    gsap.to(window, { duration: 2, scrollTo: "#care-dsc" });
  });

  document.querySelector("#scroll-partners").addEventListener("click", function () {
    gsap.to(window, { duration: 2, scrollTo: "#partners-dsc" });
  });

  document.querySelector("#scroll-contact").addEventListener("click", function () {
    gsap.to(window, { duration: 2, scrollTo: "#contact-dsc" });
  });
}
scrollGsap();

function testC0ordinates() {
  let wnd = document.getElementById("contact-dsc");

  let coords = wnd.getBoundingClientRect();
  console.log(coords);
}
setInterval(testC0ordinates(), 5000);
