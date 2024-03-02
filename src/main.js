const headerOpenMenuSvg = document.getElementById('header-menu-svg-btn');
const mobileNavigation = document.getElementById('view-mobile-navigation');
const mobileNavigationCloseMenuSvg = document.getElementById('btn-close');

headerOpenMenuSvg.addEventListener('click', function () {
  mobileNavigation.style.transform = 'translateX(-100%)';
});

mobileNavigationCloseMenuSvg.addEventListener('click', function () {
  mobileNavigation.style.transform = 'translateX(100%)';
});
