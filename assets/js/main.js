document.addEventListener("DOMContentLoaded", () => {
  const yearTargets = document.querySelectorAll("[data-year]");
  yearTargets.forEach((target) => {
    target.textContent = new Date().getFullYear();
  });

  const nav = document.querySelector(".navbar");
  const setNavState = () => {
    nav?.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  setNavState();
  window.addEventListener("scroll", setNavState, { passive: true });

  const navToggler = document.querySelector(".navbar-toggler");
  const navTarget = navToggler?.getAttribute("data-bs-target");
  const navCollapse = navTarget ? document.querySelector(navTarget) : null;

  if (navToggler && navCollapse && !window.bootstrap) {
    navToggler.addEventListener("click", () => {
      const isOpen = navCollapse.classList.toggle("show");
      navToggler.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (window.AOS) {
    window.AOS.init({
      duration: 780,
      easing: "ease-out-cubic",
      once: true,
      offset: 80
    });
  } else {
    document.querySelectorAll("[data-aos]").forEach((element) => {
      element.removeAttribute("data-aos");
      element.removeAttribute("data-aos-delay");
    });
  }
});
