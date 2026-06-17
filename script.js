const themeSwitch = document.getElementById("theme-switch");
const themeText = document.getElementById("theme-text"); // Targets the text element

// check local storage on page load
const isDarkMode =
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

// synchronize HTML class, slider handle, and text label on initial load
if (isDarkMode) {
  document.documentElement.classList.add("dark");
  themeSwitch.checked = true;
  themeText.textContent = "Dark Mode";
} else {
  document.documentElement.classList.remove("dark");
  themeSwitch.checked = false;
  themeText.textContent = "Light Mode";
}

// listen for changes on the sliding toggle check event
themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeText.textContent = "Dark Mode"; // Changes text to Dark Mode
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeText.textContent = "Light Mode"; // Changes text to Light Mode
  }
});

// skill carousel functionality

const track = document.getElementById("carousel-track");
const viewport = document.getElementById("carousel-viewport");
const slides = track.children.length;
let index = 0;

// shows each card
function show() {
  track.style.transform = `translateY(${-index * viewport.clientHeight}px)`;
  document.getElementById("carousel-status").textContent =
    `${index + 1} / ${slides}`;
}

// cycles backward
document.getElementById("carousel-prev").onclick = () => {
  index = (index - 1 + slides) % slides;
  show();
};

// cycles forward
document.getElementById("carousel-next").onclick = () => {
  index = (index + 1 + slides) % slides;
  show();
};

show();

// back to top button

const backToTopButton = document.getElementById("back-to-top");

// when the user scrolls down 300px from the top of the document, show the button
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("back-to-top");

  // only run if the button actually exists on the page
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.remove("hidden");
        backToTopBtn.classList.add("flex");
      } else {
        backToTopBtn.classList.remove("flex");
        backToTopBtn.classList.add("hidden");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
  });
});
  }
});

