const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let active = 1;

next.addEventListener("click", () => {
  active++;
  if (active === 4) {
    active = 4;
  }
  update();
});

prev.addEventListener("click", () => {
  active--;
  if (active === 1) {
    active = 1;
  }
  update();
});

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < active) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  console.log(actives.length, circles.length);

  if (active === 1) {
    prev.disabled = true;
  } else if (active === 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
