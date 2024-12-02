const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

const addRemoveClass = (className) => {
  if (menuBtn.classList.contains(className)) {
    menuBtn.classList.remove(className);
  } else {
    menuBtn.classList.add(className);
  }
};

const addRemoveActive = (className) => {
  if (menu.classList.contains(className)) {
    menu.classList.remove(className);
  } else {
    menu.classList.add(className);
  }
};

menuBtn.addEventListener("click", () => addRemoveClass("close"));
menuBtn.addEventListener("click", () => addRemoveActive("active"));
