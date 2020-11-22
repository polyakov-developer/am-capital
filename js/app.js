const BURGER = document.getElementById('burger');
const NAV_SIDEBAR = document.getElementById('nav-sidebar');
const NAV_SIDEBAR_CLOSE = NAV_SIDEBAR.querySelector('.close-nav');

BURGER.addEventListener('click', function () {
  toggleNavSidebar();
});

NAV_SIDEBAR_CLOSE.addEventListener('click', function () {
  toggleNavSidebar();
});

function toggleNavSidebar() {
  if (NAV_SIDEBAR.classList.contains('nav--state--active'))
    NAV_SIDEBAR.classList.remove('nav--state--active')
  else
    NAV_SIDEBAR.classList.add('nav--state--active')
}

if (document.getElementById('heroBannerSwiper')) {
  new Swiper('#heroBannerSwiper', {
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: '#heroBannerSwiper .swiper-pagination',
    }
  })
}