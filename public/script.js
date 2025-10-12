function init() {
  const container = document.getElementById("mixContainer");

  for (let i = 0; i <= 10; i++) {
    const colorPercent = 100 - i * 10;

    const box = document.createElement("div");
    box.className = "color-box";
    box.style.setProperty("--pct", `${colorPercent}%`);
    box.textContent = `--pct: ${colorPercent}%`;

    container.appendChild(box);
  }

  updateMixes();
}

function updateMixes() {
  const color1 = document.getElementById("colorPicker1").value;
  const color2 = document.getElementById("colorPicker2").value;
  const colorspace = document.querySelector('input[name="colorspace"]:checked')
    .value;
  const container = document.getElementById("mixContainer");

  container.style.setProperty("--colorspace", colorspace);
  container.style.setProperty("--color1", color1);
  container.style.setProperty("--color2", color2);

  document.getElementById(
    "cssCode"
  ).textContent = `color-mix(in ${colorspace}, ${color1} var(--pct), ${color2})`;
}


document.getElementById("colorPicker1").addEventListener("input", updateMixes);
document.getElementById("colorPicker2").addEventListener("input", updateMixes);
document.querySelectorAll('input[name="colorspace"]').forEach((radio) => {
  radio.addEventListener("change", updateMixes);
});

document.addEventListener("DOMContentLoaded", init);