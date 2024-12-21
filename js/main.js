const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const filter = document.querySelectorAll(".filter li");
const contain = document.querySelectorAll(".filters-content .card__article");

const addRemoveClass = (name, className) => {
  if (name.classList.contains(className)) {
    name.classList.remove(className);
  } else {
    name.classList.add(className);
  }
};

menuBtn.addEventListener("click", () => {
  addRemoveClass(menuBtn, "close");
  addRemoveClass(menu, "active");
});

filter.forEach((gif) => {
  gif.addEventListener("click", function (e) {
    const sipling = gif.parentElement.children;

    for (let i = 0; i < sipling.length; i++) {
      if (sipling[i].classList.contains("active")) {
        sipling[i].classList.remove("active");
      } else {
        continue;
      }
    }

    if (gif.classList != "active") {
      gif.classList.add("active");

      if (gif.classList.contains("disign")) {
        contain.forEach((card) => {
          if (card.classList.contains("disign")) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      } else if (gif.classList.contains("web")) {
        contain.forEach((card) => {
          if (card.classList.contains("web")) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      } else {
        contain.forEach((card) => {
          card.style.display = "block";
        });
      }
    }
  });
});
