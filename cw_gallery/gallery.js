const gallery = function () {
  let elems = document.querySelectorAll("ul li a");
  elems.forEach((item) => {
    item.addEventListener("click", openPhoto);
  });

  function openPhoto(e) {
    e.preventDefault();
  }

  function close() {
    let close = document.querySelector(".close");
    close.addEventListener("click", function () {
      console.log("close");
    });
  }
};

window.addEventListener("load", function () {
  gallery();
});
