function theme() {
  var toggleBtn = document.querySelector(".toggle");
  var moon = document.querySelector(".moon");
  var sun = document.querySelector(".sun");
  var maindiv = document.querySelector("#main");
  var theme = document.querySelectorAll(".theme");

  var flag = 0;
  toggleBtn.addEventListener("click", function () {
    if (flag == 0) {
      moon.classList.toggle("hidden");
      sun.classList.toggle("hidden");
      maindiv.classList.add("bg-white");
      theme.forEach((element) => {
        element.classList.remove("text-white");
        element.classList.add("text-black");
      });

      flag = 1;
    } else {
      moon.classList.toggle("hidden");
      sun.classList.toggle("hidden");
      maindiv.classList.remove("bg-white");
      theme.forEach((element) => {
        element.classList.remove("text-black");
        element.classList.add("text-white");
      });

      flag = 0;
    }
  });
}

var ham = document.querySelector(".hamburger");
var list = document.querySelector("ul");

ham.addEventListener("click", function () {
  list.classList.toggle("block");
  list.classList.toggle("hidden");
});

theme();
