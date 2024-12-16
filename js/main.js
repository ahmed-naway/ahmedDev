const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const filter = document.querySelectorAll("#filter li");

const addRemoveClass = (className) => {
  if (menuBtn.classList.contains(className)) {
    menuBtn.classList.remove(className);
  } else {
    menuBtn.classList.add(className);
  }
};

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
    }
  });
});

menuBtn.addEventListener("click", () => addRemoveClass("close"));
menuBtn.addEventListener("click", () => addRemoveClass("active"));
