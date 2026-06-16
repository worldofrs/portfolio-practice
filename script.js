// theme switch functionality

const themeSwitch = document.getElementById('theme-switch');
const themeText = document.getElementById('theme-text'); // Targets the text element

// check local storage on page load
const isDarkMode = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

// synchronize HTML class, slider handle, and text label on initial load
if (isDarkMode) {
  document.documentElement.classList.add('dark');
  themeSwitch.checked = true;
  themeText.textContent = 'Dark Mode';
} else {
  document.documentElement.classList.remove('dark');
  themeSwitch.checked = false;
  themeText.textContent = 'Light Mode';
}

// listen for changes on the sliding toggle check event
themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeText.textContent = 'Dark Mode'; // Changes text to Dark Mode
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeText.textContent = 'Light Mode'; // Changes text to Light Mode
  }
});

// skill carousel functionality

const track = document.getElementById("carousel-track");
const viewport = document.getElementById("carousel-viewport");
const slides = track.children.length;
let index = 0;

function show() {
  track.style.transform = `translateY(${-index * viewport.clientHeight}px)`;
  document.getElementById("carousel-status").textContent = `${index + 1} / ${slides}`;
}

document.getElementById("carousel-prev").onclick = () => {
  index = (index - 1 + slides) % slides;
  show();
};

document.getElementById("carousel-next").onclick = () => {
  index = (index + 1 + slides) % slides;
  show();
};

show();