var toggleBtn = document.querySelector(".toggle");
var moon = document.querySelector(".moon");
var sun = document.querySelector(".sun");
var bodyy = document.querySelector("body")

var flag = 0;
toggleBtn.addEventListener("click", function () {
  if (flag == 0) {
    moon.classList.toggle("hidden");
    sun.classList.toggle("hidden");
    bodyy.classList.add("light")
    bodyy.classList.remove("dark")
    
    flag = 1;
  } else {
    moon.classList.toggle("hidden");
    sun.classList.toggle("hidden");
    bodyy.classList.add("dark")
    bodyy.classList.remove("light")

    flag = 0;
  }
});
