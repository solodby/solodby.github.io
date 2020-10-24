/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-50px";
  }
  prevScrollPos = currentScrollPos;
}