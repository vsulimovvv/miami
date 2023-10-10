window.addEventListener('DOMContentLoaded', () => {
  //   // * ===== Mask input
  //   $('input[type="tel"]').mask('+7 (999) 999-99-99');

  (function screen() {
    const filtersForm = document.querySelector('.form-filters');
    const inputDropdown = document.querySelectorAll('.input-dropdown');
    const roomsBlock = document.querySelectorAll('.rooms-block');
    const priceBlock = document.querySelectorAll('.price-block');

    if (filtersForm) {
      if (filtersForm.getBoundingClientRect().top < window.screen.height / 2) {
        inputDropdown.forEach((item) => {
          item.style.top = '60px';
          item.style.bottom = 'unset';
        });
        priceBlock.forEach((item) => {
          item.style.top = '60px';
          item.style.bottom = 'unset';
        });
        roomsBlock.forEach((item) => {
          item.style.top = '60px';
          item.style.bottom = 'unset';
        });
      }
    }
  })();

  // * ===== Nice Select
  $('select').niceSelect();

  (function showMore() {
    const moreBtn = document.querySelector('.more-btn');
    moreBtn.addEventListener('click', (e) => {
      const text = document.querySelectorAll('.property__text');
      text.forEach((item) => {
        item.classList.remove('hidden');
        moreBtn.style.display = 'none';
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.features__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: 'auto',
      spaceBetween: 20,
      breakpoints: {
        320: {
          slidesPerView: 1.6,
          spaceBetween: 20,
          centeredSlides: true,
          roundLengths: true,
          initialSlide: 2,
          loop: true,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: true,
          roundLengths: true,
          initialSlide: 2,
          loop: true,
          spaceBetween: 15,
        },
        768: { slidesPerView: 2 },
        991: {
          slidesPerView: 'auto',
        },
      },
      navigation: {
        nextEl: '.features .swiper-button-next',
        prevEl: '.features .swiper-button-prev',
      },
    });
  })();

  (function slider() {
    const sliderEl = document.querySelector('.news__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: 4,
      spaceBetween: 15,
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 20,
          centeredSlides: true,
          roundLengths: true,
          initialSlide: 2,
          loop: true,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: true,
          roundLengths: true,
          initialSlide: 2,
          loop: true,
          spaceBetween: 15,
        },
        768: { slidesPerView: 2 },
        991: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: '.news .swiper-button-next',
        prevEl: '.news .swiper-button-prev',
      },
    });
  })();

  (function slider() {
    const sliderEl = document.querySelector('.similar-properties__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: 3,
      spaceBetween: 15,
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 20,
          centeredSlides: true,
          roundLengths: true,
          initialSlide: 2,
          loop: true,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: true,
          roundLengths: true,
          initialSlide: 2,
          loop: true,
          spaceBetween: 15,
        },
        768: { slidesPerView: 2 },
        991: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: '.similar-properties .swiper-button-next',
        prevEl: '.similar-properties .swiper-button-prev',
      },
    });
  })();

  (function slider() {
    const sliderEl = document.querySelectorAll('.card-slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 1,
        breakpoints: {},
        navigation: {
          nextEl: '.card-slider .swiper-button-next',
          prevEl: '.card-slider .swiper-button-prev',
        },
      });
    });
  })();

  (function slider() {
    const sliderEl = document.querySelectorAll('.apartment__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 1,

        navigation: {
          nextEl: '.apartment__slider .swiper-button-next',
          prevEl: '.apartment__slider .swiper-button-prev',
        },
      });
    });
  })();

  (function slider() {
    const sliderEl = document.querySelectorAll('.property__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 3,
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        },
        navigation: {
          nextEl: '.property__slider .swiper-button-next',
          prevEl: '.property__slider .swiper-button-prev',
        },
      });
    });
  })();

  (function sliderOnResizeWindow() {
    const resizableSwiper = (
      breakpoint,
      swiperClass,
      swiperSettings,
      callback
    ) => {
      let swiper;

      breakpoint = window.matchMedia(breakpoint);

      const enableSwiper = function (className, settings) {
        swiper = new Swiper(className, settings);

        if (callback) {
          callback(swiper);
        }
      };

      const checker = function () {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };

      breakpoint.addEventListener('change', checker);
      checker();
    };

    resizableSwiper('(max-width: 991px)', '.properties__slider', {
      spaceBetween: 20,
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.properties__slider .swiper-button-next',
        prevEl: '.properties__slider .swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 20,
          centeredSlides: true,
          roundLengths: true,
          initialSlide: 2,
          loop: true,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: true,
          roundLengths: true,
          initialSlide: 2,
          loop: true,
          spaceBetween: 15,
        },
        768: { slidesPerView: 2 },
        991: {
          slidesPerView: 2,
        },
      },
    });
  })();

  // * ===== Change View Product
  (function changeView() {
    const wrapper = document.querySelectorAll('.block-params');
    const btnGrid = document.querySelector('.btn-grid');
    const btnList = document.querySelector('.btn-list');

    if (btnList) {
      btnList.classList.add('active');
    }

    wrapper.forEach((el) => {
      el.classList.add('block-params--list');

      btnList.addEventListener('click', (e) => {
        if (wrapper) {
          el.className = 'block-params block-params--list';
          el.classList.remove('block-params--grid');
        }

        btnGrid.classList.remove('active');
        btnList.classList.add('active');
      });

      if (btnGrid) {
        btnGrid.addEventListener('click', (e) => {
          if (wrapper) {
            el.className = 'block-params block-params--grid';
            el.classList.remove('block-params--list');
          }

          btnGrid.classList.add('active');
          btnList.classList.remove('active');
        });
      }
    });
  })();

  //   // * ===== Fixed Header
  //   (function fixedHeader() {
  //     function scrollHeader() {
  //       const nav = document.querySelector('header');
  //       if (this.scrollY >= 90) {
  //         nav.classList.add('scroll-header');
  //       } else {
  //         nav.classList.remove('scroll-header');
  //       }
  //     }
  //     window.addEventListener('scroll', scrollHeader);
  //     // ! Change
  //     function changeBg() {
  //       const header = document.querySelector('header');
  //       if (window.pageYOffset >= 90) {
  //         header.classList.add('scroll-header');
  //       }
  //     }
  //     changeBg();
  //   })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelectorAll('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    menuBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
      });
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Show Search Filed
  // (function showMenu() {
  //   const btnSearch = document.querySelectorAll('.header__search-btn');
  //   const formSearch = document.querySelector('.form-search');

  //   btnSearch.forEach((btn) => {
  //     btn.addEventListener('click', (e) => {
  //       formSearch.classList.toggle('active');
  //     });
  //   });
  // })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.properties-card', '.popup--property', '.popup__close');
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  someTabs(
    '.condos-tabs',
    '.condos-tabs__top-btn',
    '.condos-tabs__content',
    'active'
  );
});
