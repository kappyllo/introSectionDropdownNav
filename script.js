"strict";

const navOpenBtn = document.querySelector(".btn--Open--Nav");
const navMobile = document.querySelector(".nav--mobile__bg");
const featuresLink = document.querySelector(".features__link");
const featuresHidden = document.querySelector("#features__hidden");
const companyLink = document.querySelector(".company__link");
const companyHidden = document.querySelector("#company__hidden");
const featuresArrowImg = document.querySelector(".features__arrow");
const companyArrowImg = document.querySelector(".company__arrow");

let openOrNot = "not";
let featuresOpenOrNot = "not";
let companyOpenOrNot = "not";

navOpenBtn.addEventListener("click", function () {
  navMobile.classList.toggle("hidden");

  if (openOrNot === "not") {
    navOpenBtn.src = "./images/icon-close-menu.svg";
    openOrNot = "open";
  } else {
    navOpenBtn.src = "./images/icon-menu.svg";
    openOrNot = "not";
  }
});

featuresLink.addEventListener("click", function () {
  if (featuresOpenOrNot === "not") {
    featuresHidden.style.display = "flex";
    featuresArrowImg.src = "./images/icon-arrow-up.svg";
    featuresOpenOrNot = "yes";
  } else {
    featuresHidden.style.display = "none";
    featuresArrowImg.src = "./images/icon-arrow-down.svg";
    featuresOpenOrNot = "not";
  }
});

companyLink.addEventListener("click", function () {
  if (companyOpenOrNot === "not") {
    companyHidden.style.display = "flex";
    companyArrowImg.src = "./images/icon-arrow-up.svg";
    companyOpenOrNot = "yes";
  } else {
    companyHidden.style.display = "none";
    companyArrowImg.src = "./images/icon-arrow-down.svg";
    companyOpenOrNot = "not";
  }
});
