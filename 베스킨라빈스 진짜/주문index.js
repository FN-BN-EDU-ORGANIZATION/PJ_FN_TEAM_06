//dropdown메뉴
document.addEventListener("DOMContentLoaded", function () {
  var mainNavItems = document.querySelectorAll(".main_nav >li");

  mainNavItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      this.classList.add("active");
    });

    item.addEventListener("mouseleave", function () {
      this.classList.remove("active");
    });
  });
});

//dropdown메뉴 이미지 교차화면
const subNavItems = document.querySelectorAll(".main_nav > li");
const originalBackgroundURL = "./image/menu_kakao_img.png";
const hoverBackgroundURLs = [
  "./image/1698818148.png",
  "./image/1746498851.png",
  "./image/1746499595.png",
];
let currentBackgroundIndex = 0;

function handleBackgroundFadeIn(event) {
  const subNavItem = event.currentTarget;
  const subNavImg = subNavItem.querySelector("a.sub_nav_img");
  subNavImg.style.backgroundImage = `url("${hoverBackgroundURLs[currentBackgroundIndex]}")`;
}

function handleBackgroundFadeOut(event) {
  const subNavItem = event.currentTarget;
  const subNavImg = subNavItem.querySelector("a.sub_nav_img");
  subNavImg.style.backgroundImage = `url("${originalBackgroundURL}")`;
}

subNavItems.forEach((subNavItem) => {
  subNavItem.addEventListener("mouseenter", handleBackgroundFadeIn);
  subNavItem.addEventListener("mouseleave", handleBackgroundFadeOut);

  const subNavImg = subNavItem.querySelector("a.sub_nav_img");
  subNavImg.style.backgroundImage = `url("${hoverBackgroundURLs[currentBackgroundIndex]}")`;
});
function toggleBackgroundImage() {
  currentBackgroundIndex =
    (currentBackgroundIndex + 1) % hoverBackgroundURLs.length;
  subNavItems.forEach((subNavItem) => {
    const subNavImg = subNavItem.querySelector("a.sub_nav_img");
    subNavImg.style.backgroundImage = `url("${hoverBackgroundURLs[currentBackgroundIndex]}")`;
  });
}

setInterval(toggleBackgroundImage, 4000);

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: false,
});
