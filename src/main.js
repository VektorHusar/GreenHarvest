document.addEventListener('DOMContentLoaded', function () {
  const modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close'),
    form = document.querySelector('form'),
    scrollButton = document.querySelector('.scroll-button'),
    scrollSection = document.querySelector('#your-order'),
    cookiesClose = document.querySelectorAll('.cookies-close'),
    cookiesOpen = document.querySelector('.cookies-open'),
    cookiesOverlay = document.querySelector('.backdrop-cookies');

  cookiesClose.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      cookiesOverlay.classList.add('is-hidden');
      document.documentElement.style.overflowY = 'scroll';
    });
  });

  cookiesOpen.addEventListener('click', function (e) {
    e.preventDefault();
    cookiesOverlay.classList.remove('is-hidden');
  });

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      const modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add('active');
      overlay.classList.add('active');
      document.documentElement.style.overflowY = 'hidden';
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      const parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
      document.documentElement.style.overflowY = 'scroll';
    });
  });

  document.body.addEventListener(
    'keyup',
    function (e) {
      const key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
        document.documentElement.style.overflowY = 'scroll';
      }
    },
    false
  );

  overlay.addEventListener('click', function (e) {
    if (
      !e.target.closest('.modal') ||
      e.target.closest('a') ||
      e.target.closest('.btn-close')
    ) {
      document.querySelector('.modal.active').classList.remove('active');
      this.classList.remove('active');
      document.documentElement.style.overflowY = 'scroll';
    } else if (e.target.closest('.scroll-button')) {
      scrollSection.scrollIntoView({ behavior: 'smooth' });
      document.querySelector('.modal.active').classList.remove('active');
      this.classList.remove('active');
      document.documentElement.style.overflowY = 'scroll';
    }
  });
  scrollButton.addEventListener('click', function (event) {
    scrollSection.scrollIntoView({ behavior: 'smooth' });
    event.preventDefault();
  });

  form.addEventListener('submit', function (event) {
    const modalElemToShow = document.querySelector('.modal[data-modal="2"]');
    modalElemToShow.classList.add('active');
    overlay.classList.add('active');
    form.reset();
    event.preventDefault();
    document.documentElement.style.overflowY = 'hidden';
  });
});
