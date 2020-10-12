import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slideIn = (element, fromLeft = false) => {
  if (element) {
    gsap.set(element, {
      x: fromLeft ? -1000 : 1000,
      opacity: 0,
    });

    gsap.to(element, {
      scrollTrigger: {
        markers: false,
        scrub: 2,
        start: 'center center',
        end: '+=400',
      },
      opacity: 1,
      stagger: 3,
      x: 0,
    });
  }
};

export default slideIn;
