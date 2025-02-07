const range = document.querySelector("#range");
const rangeText = document.querySelector("#range-text");

rangeText.textContent = range.value;

range.addEventListener("input", () => {
  rangeText.textContent = range.value;
  document.documentElement.style.setProperty("--content-width", range.value);
});
