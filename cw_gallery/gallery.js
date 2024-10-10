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
    close();
    // imgPreview.innerHTML = `<img src = '${imgLink}' alt="#">`;
  }

  function remove() {
    let elems = document.querySelectorAll("div>img");
    if (elems.length > 0) {
      // imgPreview.innerHTML = "";
      imgPreview.removeChild(imgPreview.lastChild);
    }
  }

  function close() {
    let close = document.querySelector(".close");
    close.style.display = "block";
    close.addEventListener("click", function () {
      remove();
      close.style.display = "none";
    });
  }
};

window.addEventListener("load", function () {
  gallery();
});
