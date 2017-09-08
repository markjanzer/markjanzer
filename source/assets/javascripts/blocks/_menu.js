let menu = {
  isOpen: false,

  toggle: (event) => {
    let body = document.body;
    if (menu.isOpen) {
      body.classList.remove( 'menu-is-open' );
    } else {
      body.classList.add( 'menu-is-open' );
    }
    menu.isOpen = !menu.isOpen;
  },

  scroll: () => {
    let body = document.body;
    if (window.pageYOffset >= 16) {
      body.classList.add('is-scrolled');
    } else {
      body.classList.remove('is-scrolled');
    }
  },

  init: () => {
    document.addEventListener('click', (event) => {
      if (event.target && event.target.classList.contains('js-menu-mobile-toggle')) {
        menu.toggle(event);
      }
    });
    window.addEventListener('scroll', menu.scroll, false);
  }
};

menu.init();