import "./style.css";

import Swiper, { Autoplay} from 'swiper';
Swiper.use([Autoplay]);
import 'swiper/css/bundle';

 
let swiper = new Swiper(".swiper", {
  noSwiping: true,
  allowTouchMove: false,
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
    breakpoints:{
        375: {
          slidesPerView: 1,
        },
        1049: {
          slidesPerView: 3,
        }
    }
});
