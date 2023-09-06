function menu() {
    var x = document.getElementById("navLinks");
    x.classList.toggle('show');
    if (x.style.visibility === "visible") {
    setTimeout(() => {
      x.style.visibility = "hidden";
      }, 200);
    } else {
      x.style.visibility = "visible";
    }
  }