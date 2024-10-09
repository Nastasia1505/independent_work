function calculate() {
  let inputA = document.querySelector("[name = 'calc_number_a']");
  let inputB = document.querySelector("[name = 'calc_number_b']");

  let calcBtn = document.querySelector("button");

  calcBtn.addEventListener("click", function () {
    let a = +inputA.value;
    let b = +inputB.value;

    let select = document.querySelector("select");

    let option = select.value;

    if (option == "add") {
      add(a, b);
    }
    if (option == "minus") {
      minus(a, b);
    }
    if (option == "divide") {
      divide(a, b);
    }
    if (option == "multiply") {
      multiply(a, b);
    }
  });

  let result = null;

  function add(a, b) {
    result = a + b;
    show(result);
  }

  function minus(a, b) {
    result = a - b;
    show(result);
  }

  function divide(a, b) {
    result = a / b;
    show(result);
  }

  function multiply(a, b) {
    result = a * b;
    show(result);
  }

  function show(result) {
    let answer = document.querySelector(".calc__answer");
    answer.innerHTML = result;
  }
}

window.addEventListener("load", function () {
  calculate();
});
