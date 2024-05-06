// modal.js
document.getElementById("gwpf-openModal").addEventListener("click", function () {
    var modal = document.getElementById("gwpf-modal");
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("show");
    document.getElementById('gwpf-modalVideo').focus();
  });
  
  document.getElementById("gwpf-closeModal").addEventListener("click", function () {
    var modal = document.getElementById("gwpf-modal");
    modal.setAttribute("aria-hidden", "true");
    modal.classList.remove("show");
    document.getElementById("gwpf-openModal").focus();
  });
  
  // Accordion.js
document.querySelectorAll(".gwpf-accordion-item").forEach((item) => {
  item.querySelector(".gwpf-accordion-item-header").addEventListener("click", () => {
    item.classList.toggle("open");
  });
});