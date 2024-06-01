//бургерное меню
const iconMenu = document.querySelectorAll(".menu-icon");
const menuBody = document.querySelector(".links");
const desktop = document.querySelector(".desktop");
for (let i = 0; i < iconMenu.length; i++) {
  if (iconMenu[i]) {
    iconMenu[i].addEventListener("click", function (e) {
      document.body.classList.toggle("lock");
      menuBody.classList.toggle("_active");
      iconMenu[i].classList.toggle("_active");
      desktop.classList.toggle("blacked");
    });
  }
}

let links = menuBody.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    menuBody.classList.remove("_active");
    iconMenu.classList.remove("_active");
    document.body.classList.remove("lock");
  });
}

// слайдер

let slides = document.querySelectorAll(".slide");
let slideControlLeft = document.querySelector(".left-button");
let slideControlRight = document.querySelector(".right-button");
let dot = document.querySelectorAll(".dot");

slides[0].style.opacity = "1";
slides[0].style.zIndex = "1";
dot[0].style.backgroundColor = "#6d0505";
let currentIndex = 0;

let switchSlide = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    slides[i].style.zIndex = "0";
    dot[i].style.backgroundColor = "#fff";
  }
  slides[currentIndex].style.opacity = "1";
  slides[currentIndex].style.zIndex = "1";
  dot[currentIndex].style.backgroundColor = "#6d0505";
};

for (let i = 0; i < slides.length; i++) {
  dot[i].onclick = function () {
    currentIndex = i;
    switchSlide();
  };
}

slideControlLeft.onclick = function () {
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
    switchSlide();
  } else {
    currentIndex--;
    switchSlide();
  }
};
slideControlRight.onclick = function () {
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
    switchSlide();
  } else {
    currentIndex++;
    switchSlide();
  }
};

let aboutBtn = document.querySelector(".aboutBtn");
let contactsBtn = document.querySelector(".contactsBtn");
let aboutItem = document.querySelector(".about");
let contactsItem = document.querySelector(".contacts");
let closeAboutBtn = document.querySelector(".closeAbout");
let closeContactsBtn = document.querySelector(".closeContacts");

aboutBtn.addEventListener("click", function (event) {
  event.preventDefault();
  desktop.classList.toggle("blacked");
  aboutItem.style.display = "flex";
  iconMenu[0].classList.remove("_active");
  iconMenu[1].classList.remove("_active");
  document.body.style.overflow = "visible";
  document.querySelector("html").style.overflow = "visible";
});

closeAboutBtn.addEventListener("click", function (event) {
  event.preventDefault();
  aboutItem.style.display = "none";
  document.body.style.overflow = "hidden";
  document.querySelector("html").style.overflow = "hidden ";
});

contactsBtn.addEventListener("click", function (event) {
  event.preventDefault();
  desktop.classList.toggle("blacked");
  contactsItem.style.display = "flex";
  iconMenu[0].classList.remove("_active");
  iconMenu[1].classList.remove("_active");
  document.body.style.overflow = "visible";
  document.querySelector("html").style.overflow = "visible";
});

closeContactsBtn.addEventListener("click", function (event) {
  event.preventDefault();
  contactsItem.style.display = "none";
  document.body.style.overflow = "hidden";
  document.querySelector("html").style.overflow = "hidden ";
});
