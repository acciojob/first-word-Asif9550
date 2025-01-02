function firstWord(s) {
  // Trim any leading or trailing whitespace to handle edge cases
  s = s.trim();
  
  // If the string is empty after trimming, return an empty string
  if (s.length === 0) {
    return '';
  }
  
  // Find the index of the first space in the string
  const spaceIndex = s.indexOf(' ');

  // If there is no space, return the entire string, otherwise return the substring up to the first space
  if (spaceIndex === -1) {
    return s;
  } else {
    return s.substring(0, spaceIndex);
  }
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
