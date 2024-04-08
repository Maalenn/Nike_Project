var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".top-left").style.top = "0";
  } else {
    document.querySelector(".top-left").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
