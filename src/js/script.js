console.log("hello techBlog!");

const html = document.querySelector("html");
const icon = document.querySelector("#icon");
const search = document.querySelector("#search");
const submitButton = document.querySelector("#submit-button");
const esc = document.querySelector("#esc");

sun = `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
</svg>`;
const moon = `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-700">
  <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
</svg>
`;

function darkModeToggle() {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    icon.innerHTML = moon;
  } else {
    icon.innerHTML = sun;
  }
}

// shortcut to focus on the search input
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "/" && e.ctrlKey) {
    search.focus();
    esc.classList.remove("hidden");
  }
});

// auto submit for search when user clicks enter
search.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    submitButton.click();
  } else if (e.keyCode === 27) {
    // remove focus from search input
    esc.classList.add("hidden");
    search.blur();
  }
});

esc.addEventListener("click", () => {
  search.blur();
  esc.classList.add("hidden");
});
