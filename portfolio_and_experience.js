const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const nav_container = document.querySelector(".navbar_container");
const portfolio_section = document.querySelector(".portfolio");
const experience_section = document.querySelector(".experience_container");
const left_tab = document.querySelector("slider__btn--left");

// -----------------------------------Viewport sizing----------------------------------------
const resizePage = function () {
  const viewportHeight = window.visualViewport.height;

  portfolio_section.style = `height: ${
    viewportHeight - navbar.viewportHeight
  }px`;
  experience_section.style = `height: ${viewportHeight}px`;
};

window.addEventListener("load", function () {
  this.window.addEventListener("resize", resizePage);

  resizePage();

  // ----------------------URL variable manipulation: smooth scroll--------------------------
  if (window.location.href.includes("?")) {
    // url of current page
    const scroll_to_URL = window.location.search; // <-- retrieve everthing from the question mark from the url
    //console.log(scroll_to_URL);
    /* output: ?pagescroll=experience--section&balls=false */

    const urlParams = new URLSearchParams(scroll_to_URL); // <-- <object>
    const experience_section = urlParams.get("pagescroll"); // "experience--section" <-- gets the value from the url variable
    //console.log(experience_section);
    /* output: experience--section */

    if (experience_section !== undefined) {
      this.document
        .querySelector(`#${experience_section}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  }
});

// ----------------------------------------fade Event----------------------------------------
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

// left_tab.addEventListener("mouseover", function (event) {
//   handleHover(event, 1);
// });

// --------------------scroll-to for Portfolio and Experience--------------------------------
document
  .querySelector(".navbar_links")
  .addEventListener("click", function (event) {
    //event.preventDefault();

    if (
      event.target.classList.contains("navbar_list_item") &&
      event.target.getAttribute("href") == "./index.html"
    ) {
      window.location.href = "./index.html";

      return;
    } else if (event.target.classList.contains("navbar_list_item")) {
      const section_scroll = event.target.getAttribute("href");
      console.log(section_scroll);
      document
        .querySelector(`#${section_scroll}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  });

// --------------------Slider--------------------------------
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
console.log(slider);
console.log(slides);

const btn_left = document.querySelector(".slider__btn--left");
const btn_right = document.querySelector(".slider__btn--right");

slider.style.transform = "scale(0.9)";
//slider.style.overflow = "visible";

let current_slide = 0;
const max_slide = slides.length - 1;
const min_slide = 0;

// goto slide -->
slides.forEach(function (slide, index) {
  slide.style.transform = `translateX(${100 * (index - current_slide)}%)`;
});
// 0% 100% 200%

//-------------------------right
const nextSlide = function () {
  if (current_slide === max_slide) {
    current_slide = 0;
  } else {
    current_slide++;
  }

  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${100 * (index - current_slide)}%)`;
  });
  //current_slide = 0:  0% 100% 200%
  //current_slide = 1: -100% 0% 100%
  //current_slide = 2: -200% -100% 0%
};

//-------------------------left
const previousSlide = function () {
  if (current_slide === min_slide) {
    current_slide = slides.length - 1;
  } else {
    current_slide--;
  }

  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${100 * (index - current_slide)}%)`;
  });
  // -100% 0% 100%
};

//-------------------------right
btn_right.addEventListener("click", function () {
  nextSlide();
  //activeDot(current_slide);
});

//-------------------------left
btn_left.addEventListener("click", function () {
  previousSlide();
  //activeDot(current_slide);
});
