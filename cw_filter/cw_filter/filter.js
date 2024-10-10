const filter = function () {
  let tabs = document.querySelectorAll(".portfolio__filter li");
  console.log(tabs);
  tabs.forEach((item) => {
    item.addEventListener("click", changeTabs(item));
  });

  function active() {
    let;
  }

  function changeTabs(elem) {
    console.log(elem.target);
  }

  function sites() {}

  function design() {}

  function logo() {}
};

window.addEventListener("load", function () {
  filter(["tabs"]);
});
