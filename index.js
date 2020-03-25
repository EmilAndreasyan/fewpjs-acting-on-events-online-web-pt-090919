// Your code here
let dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";
dodger.style.left;
dodger.style.bottom = "0px";

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left.replace("px", ""); // gets rid of px
    let left = parseInt(leftNumbers, 10); // gets rid of ""
  };
  dodger.style.left = `${left - 1}px`;
})