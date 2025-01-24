let myBars = document.querySelector(".fa-solid.fa-bars");
let myBox = document.querySelector("ul.list");
myBars.addEventListener("click", function () {
  if (myBox.style.display === "block") {
    myBox.style.display = "none"; // Hide it
  } else {
    myBox.style.display = "block"; // Show it
  }
});
const currentYear = new Date().getFullYear();

let myDate = document.getElementById("currentDate");
myDate.textContent = currentYear;
window.addEventListener("scroll", function () {
  let scrollPostion = this.window.scrollY;
  let button = this.document.querySelector("button.fixed-button");
  if (scrollPostion > 400) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
  button.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
