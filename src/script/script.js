// Smooth Scrolling Lib
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

// ==== Menu ====
// Overlay
const menuBtn = document.getElementById("menuBtn");
const resNav = document.getElementById("resNav");
menuBtn.addEventListener("click", () => {
  const isActive = resNav.classList.contains("active");
  menuBtn.classList.toggle("bg-black/10");
  if (!isActive) {
    resNav.classList.remove("hidden");
    resNav.classList.add("active");
  } else {
    resNav.classList.add("hidden");
    resNav.classList.remove("active");
  }
  
});

resNav.addEventListener("click", (e) => {
  console.log("e");
  resNav.classList.add("hidden");  
  resNav.classList.remove("active");  
});
