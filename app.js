let emojis = [];

function getEmoji() {
  for (let i = 0x1F600; i <= 0x1F64F; i++) {
    emojis.push(String.fromCodePoint(i));
  }
}

getEmoji();

document.getElementById("generate-btn").addEventListener("click", function() {
  let randomIndex = Math.floor(Math.random() * emojis.length);
  let randomEmoji = emojis[randomIndex];
  document.getElementById("emoji").textContent = randomEmoji;
});