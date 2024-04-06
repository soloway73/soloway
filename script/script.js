// Меню бургер
const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".links");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    menuBody.classList.toggle("_active");
    iconMenu.classList.toggle("_active");
  });
}

let links = menuBody.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    menuBody.classList.remove("_active");
    iconMenu.classList.remove("_active");
    document.body.classList.remove("_lock");
  });
}

//Плавные перемещения

const menuLinks = document.querySelectorAll(".menu-link[data-goto]");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
