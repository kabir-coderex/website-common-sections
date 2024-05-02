// Accordion.js
document.querySelectorAll(".wpfnl-accordion-item").forEach((item) => {
    item.querySelector(".wpfnl-accordion-item-header").addEventListener("click", () => {
      item.classList.toggle("open");
    });
});