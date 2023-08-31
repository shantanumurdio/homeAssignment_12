const textarea = document.getElementById("textarea");
const charCount = document.getElementById("totalCharacters");
const remaining = document.getElementById("remaining");

textarea.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  charCount.innerText = textarea.value.length;
  remaining.innerText = textarea.getAttribute("maxLength") - textarea.value.length;
}