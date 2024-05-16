const input = document.querySelector("input");
const lowerCase = document.querySelector("#lowercase span");
const upperCase = document.querySelector("#uppercase span");
const camelCase = document.querySelector("#camelcase span");

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}
function camelCaseOutput(string) {
  const lowerCaseString = string.toLowerCase();
  const splittedString = lowerCaseString.split(" ");
  const finalArr = splittedString.map((word, i) => {
    if (i === 0) return word;
    return capitalize(word);
  });
  return finalArr.join("");
}

input.addEventListener("input", (e) => {
  lowerCase.innerText = input.value.toLowerCase();
  upperCase.innerText = input.value.toUpperCase();
  camelCase.innerText = camelCaseOutput(input.value);
});
