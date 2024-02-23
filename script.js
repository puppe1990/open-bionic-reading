document.addEventListener('DOMContentLoaded', function() {
  const applyEffectButton = document.getElementById('applyEffect');
  const contentElement = document.getElementById('content');
  const textInput = document.getElementById('textInput');

  applyEffectButton.addEventListener('click', function() {
      const text = textInput.value;
      const highlightedText = text.split(' ').map(word => {
          // Highlight the first half of each word or at least the first letter
          const splitIndex = Math.max(1, Math.ceil(word.length / 2));
          const start = word.substring(0, splitIndex);
          const end = word.substring(splitIndex);
          return `<span class="highlight">${start}</span>${end}`;
      }).join(' ');

      contentElement.innerHTML = highlightedText;
  });
});
