const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeEventListner();
    panel.classList.add("active");
  });
});

const removeEventListner = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

console.log(panels);
