import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const slideIn = (element, fromLeft, trigger = null) => {
  if (element) {
    const properTrigger = trigger === null ? element : trigger;
    ScrollTrigger.matchMedia({
      '(min-width: 1024px)': function () {
        gsap.set(element, {
          x: fromLeft ? -2000 : 2000,
          opacity: 0,
        });

        gsap.to(element, {
          scrollTrigger: {
            trigger: properTrigger,
            markers: false,
            scrub: 2,
            start: '-50% bottom',
            end: 'top',
            once: true,
          },
          opacity: 1,
          x: 0,
        });
      },
    });
  }
};

export default slideIn;
