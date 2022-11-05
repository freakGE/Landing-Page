const hamburger = document.querySelector("#hamburger");
const header = document.querySelector(".header-container");

hamburger.addEventListener("click", () => {
  header.classList.toggle("show");
  hamburger.classList.toggle("window");
});

const preloadImage = img => {
  const src = img.getAttribute("data-img");
  if (!src) return;

  img.src = src;
};

const images = document.querySelectorAll("[data-img]");

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    preloadImage(entry.target);
    imgObserver.unobserve(entry.target);
  });
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image);
});
