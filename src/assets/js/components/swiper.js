import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay, Mousewheel, Keyboard, Parallax, EffectFade, Thumbs, Controller } from 'swiper/modules';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const swipers = document.querySelectorAll('[data-swiper]') || [];

    swipers.forEach((elem) => {
      let options = elem.dataset && elem.dataset.options ? JSON.parse(elem.dataset.options) : {};
      // Add modules to options
      options.modules = [Navigation, Pagination, Scrollbar, Autoplay, Mousewheel, Keyboard, Parallax, EffectFade, Thumbs, Controller];
      var swiper = new Swiper(elem, options);
    });



  })
})();
