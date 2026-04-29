const petalContainer = document.getElementById("petals");

// 🌸 sakura spawn system
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (3 + Math.random() * 5) + "s";

  petalContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 8000);
}

setInterval(createPetal, 150);

// 💖 small click sparkle effect
document.addEventListener("click", (e) => {
  const spark = document.createElement("div");
  spark.innerText = "✨";
  spark.style.position = "fixed";
  spark.style.left = e.clientX + "px";
  spark.style.top = e.clientY + "px";
  spark.style.fontSize = "20px";
  document.body.appendChild(spark);

  setTimeout(() => spark.remove(), 800);
});
