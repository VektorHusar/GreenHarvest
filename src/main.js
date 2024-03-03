// const headerOpenMenuSvg = document.getElementById('header-menu-svg-btn');
// const mobileNavigation = document.getElementById('view-mobile-navigation');
// const mobileNavigationCloseMenuSvg = document.getElementById('btn-close');

// headerOpenMenuSvg.addEventListener('click', function () {
//   mobileNavigation.cla = 'translateX(-100%)';
// });

// mobileNavigationCloseMenuSvg.addEventListener('click', function () {
//   mobileNavigation.style.transform = 'translateX(100%)';
// });

document.addEventListener('DOMContentLoaded', function () {
  /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  const modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close'),
    form = document.querySelector('form');

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function (e) {
      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
      e.preventDefault();

      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
      const modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
      modalElem.classList.add('active');
      overlay.classList.add('active');
    }); // end click
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      const parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
    });
  }); // end foreach

  document.body.addEventListener(
    'keyup',
    function (e) {
      const key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
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
    }
  });

  form.addEventListener('submit', function (event) {
    // Перед тим, як відправити форму, можна виконати додаткову перевірку, наприклад, валідацію

    // Отримуємо модальне вікно, яке ви хочете відкрити після відправлення форми

    const modalElemToShow = document.querySelector('.modal[data-modal="2"]');

    // Додаємо клас "active" до модального вікна та оверлею
    modalElemToShow.classList.add('active');
    overlay.classList.add('active');
    form.reset();
    // Зупиняємо стандартну поведінку форми (відправку даних на сервер)
    event.preventDefault();
  });
}); // end ready
