"strict";

// selecting elements
const navOpenBtn = document.querySelector(".btn--Open--Nav");
const navMobile = document.querySelector(".nav--mobile__bg");
const featuresLink = document.querySelector(".features__link");
const featuresHidden = document.querySelector("#features__hidden");
const companyLink = document.querySelector(".company__link");
const companyHidden = document.querySelector("#company__hidden");
const featuresArrowImg = document.querySelector(".features__arrow");
const companyArrowImg = document.querySelector(".company__arrow");
const featuresLinkDesktop = document.querySelector(
  ".nav__desktop--featuresBtn"
);
const companyLinkDesktop = document.querySelector(".nav__desktop--companyBtn");
const featuresMenuDesktop = document.querySelector(
  ".nav__desktop--featues__menu"
);
const companyMenuDesktop = document.querySelector(
  ".nav__desktop--company__menu"
);

// starter variables
let openOrNot = "not";
let featuresOpenOrNot = "not";
let companyOpenOrNot = "not";
let featuresDesktopOpenOrNot = "not";
let companyDesktopOpeOrNot = "not";

// mobile sidebar menu function
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

// mobile sidebar mini menu function (features button)
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

// mobile sidebar mini menu function (company button)
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

// desktop navbar expanded menu function (features button)
featuresLinkDesktop.addEventListener("mouseenter", function () {
  if (featuresDesktopOpenOrNot === "not") {
    featuresMenuDesktop.classList.remove("unvisible");
    featuresDesktopOpenOrNot = "yes";
  }
});

featuresLinkDesktop.addEventListener("mouseleave", function () {
  if (featuresDesktopOpenOrNot === "yes") {
    featuresMenuDesktop.classList.add("unvisible");
    featuresDesktopOpenOrNot = "not";
  }
});

// desktop navbar expanded menu function (company button)
companyLinkDesktop.addEventListener("mouseenter", function () {
  if (companyDesktopOpeOrNot === "not") {
    companyMenuDesktop.classList.remove("unvisible");
    companyDesktopOpeOrNot = "yes";
  }
});

companyLinkDesktop.addEventListener("mouseleave", function () {
  if (companyDesktopOpeOrNot === "yes") {
    companyMenuDesktop.classList.add("unvisible");
    companyDesktopOpeOrNot = "not";
  }
});
