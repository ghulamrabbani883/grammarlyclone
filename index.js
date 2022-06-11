const charVal = document.getElementById("textarea");
let totalChar = document.getElementById("total-char");
let remainingChar = document.getElementById("remaining-char");
let WordCounter = document.getElementById("total-word");

let userChar = 0;//character count
let splitChar = 0;//spliting character to count word
let totalWOrd = 0;//word count
const updateChar = () => {
  splitChar = charVal.value;
  userChar = charVal.value.length;
  totalChar.innerText = userChar;
  remainingChar.innerText = 150 - userChar;
  totalWOrd = splitChar.split(" ");
  WordCounter.innerText = totalWOrd.length;
  console.log(totalWOrd);
  if (userChar >= 150 || remainingChar <= 0) {
    alert("Cant exceed 150 character");
  }
};

charVal.addEventListener("keyup", () => updateChar());

//Copy text
const copyText = () => {
  charVal.select(); //for desktop version
  charVal.setSelectionRange(0, 9999); //for mobile version
  navigator.clipboard.writeText(charVal.value); //navigator api to copy to clipboard
};
