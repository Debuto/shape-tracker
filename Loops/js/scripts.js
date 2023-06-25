function countToMultiple(countTo, multiple) {
  for (let i = 1; i <= countTo; i++) {
    console.log(i * multiple);
  }
}

// Get user input
const countTo = parseInt(prompt("Enter the number to count to: "));
const multiple = parseInt(prompt("Enter the multiple to use: "));

// Call the function
countToMultiple(countTo, multiple);

const arrayOfvowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const replaceVowel = "-";
const stringOfvowels =  "Believe you can and you're halfway there. Theodore Roosevelt";

let modString = " ";

for (let i = 0; i < stringOfvowels.length; i++) {
  const char = stringOfvowels[i];
  if (arrayOfvowels.includes(char)) {
    modString += replaceVowel;
  } else {
    modString += char;
  }
}
