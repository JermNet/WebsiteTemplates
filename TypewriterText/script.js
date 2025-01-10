// Define the typewriter function
function typewriter(elements, index, speed) {
    if (index < elements.length) {
      const text = elements[index].innerHTML;
      let charIndex = 0;
      elements[index].innerHTML = '';
      elements[index].style.visibility = 'visible'; // Make the current paragraph visible
  
      function typeNextCharacter() {
        if (charIndex < text.length) {
          if (text.charAt(charIndex) === '<') {
            // If encountering a '<', find the corresponding '>'
            const endIndex = text.indexOf('>', charIndex);
            elements[index].innerHTML += text.substring(charIndex, endIndex + 1);
            charIndex = endIndex + 1;
          } else {
            elements[index].innerHTML += text.charAt(charIndex);
            charIndex++;
          }
          setTimeout(typeNextCharacter, speed);
        } else {
          // Hide all paragraphs after the current one
          for (let i = index + 1; i < elements.length; i++) {
            elements[i].style.visibility = 'hidden';
          }
          // Move to the next paragraph
          typewriter(elements, index + 1, speed);
        }
      }
  
      // Start typing
      typeNextCharacter();
    }
  }
  
  // Start typing the first paragraph
  const typewriterParagraphs = document.querySelectorAll('.typewriter');
  typewriter(typewriterParagraphs, 0, 0.5); // Adjust the speed as needed
  