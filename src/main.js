const headerOpenMenuSvg = document.getElementById('header-menu-svg-btn');
const mobileNavigation = document.getElementById('view-mobile-navigation');
const mobileNavigationCloseMenuSvg = document.getElementById('btn-close');

headerOpenMenuSvg.addEventListener('click', function () {
  mobileNavigation.classList.remove('is-close');
  mobileNavigation.classList.add('is-open');
});

mobileNavigationCloseMenuSvg.addEventListener('click', function () {
  mobileNavigation.classList.remove('is-open');
  mobileNavigation.classList.add('is-close');
});
