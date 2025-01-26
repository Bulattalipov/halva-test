import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function () {
  const bannerImg = document.querySelector('.banner__img');

  if(bannerImg) {
    gsap.to(bannerImg, {
      top: 0,
      opacity: 1.4,
      duration: 1,
    })
  }

  const bannerImgMobile = document.querySelector('.banner__info-img-modile');

  if(bannerImgMobile) {
    gsap.to(bannerImgMobile, {
      top: 0,
      opacity: 1.4,
      duration: 1,
    })
  }

  const salesItems = gsap.utils.toArray('.sales__item');

  const timeLine = gsap.timeline({
    paused: true,
    reversed: true,
    scrollTrigger: {
      trigger: '.sales__items',
      start: '10% 80%',
    }
  });

  timeLine
    .to(salesItems[0], {
      left: 0,
      opacity: 1,
      duration: 0.8,
    })
    .to(salesItems[1], {
      top: 130,
      opacity: 1,
      duration: 0.8,
    })
    .to(salesItems[2], {
      right: 0,
      opacity: 1,
      duration: 0.6,
    })
    .to(salesItems[0], {
      boxShadow: '0 0rem 1rem 0 #9433af',
      duration: 0.5,
    })
    .to(salesItems[0], {
      boxShadow: '0 0rem 1rem 0 rgba(109, 110, 107, 0.4)',
      duration: 0.5,
      delay: 0.3,
    })

}
