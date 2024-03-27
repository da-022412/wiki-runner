const button = document.querySelector(".mode-switcher-toggle");

button.addEventListener("click", function () {
  const root = document.querySelector(':root');
  if (root.classList.contains("dark-mode")) {
    root.classList.remove("dark-mode");
    root.style.setProperty("--color-background", "#fbf1c7");
    root.style.setProperty("--color-text", "#3c3836");
    button.innerHTML = "Light Mode";
  } else {
    root.classList.add("dark-mode");
    root.style.setProperty("--color-background", "#282828");
    root.style.setProperty("--color-text", "#ebdbb2");
    button.innerHTML = "Dark Mode";
  }
});
