const body = document.querySelector("body");
const image = document.querySelector(".me_img");
const img = document.querySelector(".img");
const nav_container = document.querySelector(".navbar_container");

// -----------------------------------Viewport sizing----------------------------------------
const resizePage = function () {
  const viewportHeight = window.visualViewport.height;
  body.style = `height: ${viewportHeight}px`;
};

window.addEventListener("load", function () {
  this.window.addEventListener("resize", resizePage);

  resizePage();
});

//------------------------------------me image animation-------------------------------------
image.addEventListener("mouseover", function () {
  image.classList.remove("scale-out-center");
  image.classList.add("scale-in-center");

  img.classList.add("shadow-drop-2-center");
  img.classList.remove("shadow-dropout-2-center");
});

image.addEventListener("mouseout", function () {
  image.classList.add("scale-out-center");
  image.classList.remove("scale-in-center");

  img.classList.add("shadow-dropout-2-center");
  img.classList.remove("shadow-drop-2-center");
});

//-----------------------------------menu fade animation-----------------------------------
// finding the common parent element of all the links and using that for 'Event Deligation' -->
const handleHover = function (event, opacity) {
  if (event.target.classList.contains("navbar_list_item")) {
    const link = event.target;
    const siblings = link
      .closest(".navbar_container")
      .querySelectorAll(".navbar_list_item");

    siblings.forEach(function (element) {
      if (element !== link) {
        element.style.transition = 0.5 + "s";
        element.style.opacity = opacity;
      }
    });
  }
};

// NOTE> 'Handler functions' can only ever have 1 parameter
nav_container.addEventListener("mouseover", function (event) {
  handleHover(event, 0);
});

nav_container.addEventListener("mouseout", function (event) {
  handleHover(event, 1);
});

//------------------------------URL for next page: smooth scroll-----------------------------
document
  .querySelector("#experience_link")
  .addEventListener("click", function () {
    window.location.href =
      "./experience_and_portfolio.html?pagescroll=experience--section"; // <-- array of 2 items
  });
