const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetPage = button.dataset.page;

    navButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    pages.forEach((page) => {
      page.classList.remove("active");
    });

    document.getElementById(targetPage).classList.add("active");
  });
});