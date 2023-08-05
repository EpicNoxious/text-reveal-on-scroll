gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time * 0.7);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
ScrollTrigger.defaults({
  scroller: document.body,
});

const textContainer = document.querySelector(".text");
const numLines = textContainer.querySelectorAll("p").length;
const totalScrollDistance = (numLines + 2) * 100; // Adjust this factor as needed

gsap.to(".text p", 2, {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".text p",
    scroller: "body",
    scrub: true,
    markers: false, // Turn this on if you want to have a good look of what's going on
    start: "top center",
    end: `+=${totalScrollDistance}% center`, // Use the calculated distance here
  },
});
