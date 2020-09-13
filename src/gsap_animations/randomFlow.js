import gsap, { Sine } from 'gsap';

const randomFlow = (el) => {
  if (el) {
    const random = (min, max) => {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    };

    const randomX = random(10, 20);
    const randomY = random(20, 30);
    const randomDelay = random(0, 1);
    const randomTime2 = random(5, 10);
    const randomAngle = random(8, 12);

    gsap.set(el, {
      x: randomX(-1),
      y: randomX(1),
      rotation: randomAngle(-1),
      padding: 150,
    });

    const rotate = (target, direction) => {
      gsap.to(target, {
        rotation: randomAngle(direction),
        duration: randomTime2(),
        delay: randomDelay(),
        ease: Sine.easeInOut,
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      });
    };

    const moveX = (target, direction) => {
      gsap.to(target, {
        x: randomX(direction),
        duration: randomTime2(),
        ease: Sine.easeInOut,
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
      });
    };

    const moveY = (target, direction) => {
      gsap.to(target, {
        y: randomY(direction),
        duration: randomTime2(),
        ease: Sine.easeInOut,
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
      });
    };

    moveX(el, 1);
    moveY(el, -1);
    rotate(el, 1);
  }
};

export default randomFlow;
