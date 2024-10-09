let toggletheme = function () {
  let toggleBtn = document.querySelector(".btn-toggle");
  toggleBtn.addEventListener("click", toggletheme);

  function toggletheme() {
    const body = document.body;

    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
    }
  }
};

window.addEventListener("load", function () {
  toggletheme();
});
