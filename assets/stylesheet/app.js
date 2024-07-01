document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav");

  if (window.scrollY >= 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
document.querySelector(".close").addEventListener("click" , function(){
    document.querySelector(".notif").style.display = "none";
});

window.addEventListener("load" , function(){
    setTimeout(
        function open(event){
            document.querySelector(".notif").style.display = "block";
        },
        200
    )
});