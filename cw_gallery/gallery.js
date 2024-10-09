const gallery = function () {
  let elems = document.querySelectorAll("ul li a");
  elems.forEach((item) => {
    item.addEventListener("click", openImg);
  });
  let imgPreview = document.querySelector(".preview");

  function openImg(e) {
    e.preventDefault();
    remove();
    let imgLink = e.target.parentNode.href;
    let img = document.createElement("img");
    img.setAttribute("src", `${imgLink}`);
    imgPreview.append(img);

    // imgPreview.innerHTML = `<img src = '${imgLink}' alt="#">`;
  }

  function remove() {
    let elems = document.querySelectorAll("div>img");
    console.log(elems);
    if (elems.length > 0) {
    }
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
