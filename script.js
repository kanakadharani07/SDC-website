const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const closeBtn = document.getElementById("close-Btn");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});
