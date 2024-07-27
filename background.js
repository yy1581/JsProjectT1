function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

const body = document.body;

function chgBackColor() {
  body.style.backgroundImage = `linear-gradient(${randomRGB()}, ${randomRGB()})`;
}
chgBackColor();