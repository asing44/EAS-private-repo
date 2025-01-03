/* -------------------------------------------------------------------------- */
/*                           Import                           */
/* -------------------------------------------------------------------------- */

// Add as the external script '<script src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js"></script> ' into the project's custom code setting!

const lenis = new Lenis()

lenis.on('scroll', (e) => {})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

/* -------------------------------------------------------------------------- */
/*                           Start of Home                           */
/* -------------------------------------------------------------------------- */

// Featured cards
let featuredCards = gsap.utils.toArray(".card-1__wrap");

featuredCards.forEach((card, index) => {
  index <= 2 ? card.style.marginTop = (index * 32) + "px" : card.style.marginTop = ((index -
    3) * 32) + "px";

    console.log(card.children[0])
});