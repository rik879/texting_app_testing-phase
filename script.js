function letterToIndex(char) {
  return char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
}

function caseFlag(char) {
  return char === char.toUpperCase() ? '01' : '00';
}

function compressWord(word) {
  const compressed = [];
  const emojiMap = {};

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (/[a-zA-Z]/.test(char)) {
      compressed.push({
        index: letterToIndex(char),
        flag: caseFlag(char)
      });
    } else {
      emojiMap[`pos_${i}`] = char;
    }
  }

  return { compressed, emoji_map: emojiMap };
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("textInput");
  const output = document.getElementById("output");

  document.getElementById("compressBtn").addEventListener("click", () => {
    const result = compressWord(input.value);
    output.textContent = JSON.stringify(result, null, 2);
  });
});