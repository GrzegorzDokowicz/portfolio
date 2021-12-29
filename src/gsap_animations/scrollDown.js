import gsap from 'gsap';

const scrollDown = (selector) => {
  if (selector) {
    const gsapConfig = {
      duration: 1,
      y: 10,
      repeat: -1,
      yoyo: true,
    };

    gsap.to(selector, gsapConfig);
  }
};

export default scrollDown;
