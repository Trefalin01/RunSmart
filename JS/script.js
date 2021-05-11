$(document).ready(function () {
  $(".carousel__inner").slick({
    dots: false,
    infinite: true,
    speed: 500,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/carousel/left_solid.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/carousel/right_solid.png"></button>',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});

let tab = function () {
  let tabNav = document.querySelectorAll(".tabs-nav__item"),
    tabContent = document.querySelectorAll(".tabs__content"),
    tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectorTabNav);
  });

  function selectorTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
};

tab();
<<<<<<< HEAD
=======


>>>>>>> c267bb98670e2bdade69d9dffd93fb42c7d6d659
