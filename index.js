let bar = document.getElementById("resbar");
let nav = document.getElementById("navItems");


bar.addEventListener("click", ()=>{
  if(nav.classList.contains("nav-items")) {
    nav.classList.remove("nav-items");
    nav.classList.add("nav-items-mob");
  } else {
    nav.classList.remove("nav-items-mob");
    nav.classList.add("nav-items");
  }
});



let images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg"
  ];
  let slide = document.getElementById("slider");
  const slider = () => {
    let i = 0;
    setInterval(function () {
      i = i < images.length - 1 ? ++i : 0;
      slide.src = images[i];
    }, 2000);
  };
  slide.addEventListener("load", slider());


   // JavaScript interaction example (if any functionality is added)
console.log("Frontend Developer Course JS Loaded!");
  