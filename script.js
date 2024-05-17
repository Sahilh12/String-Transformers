const input = document.querySelector("input");
const lowerCase = document.querySelector("#lowercase span");
const upperCase = document.querySelector("#uppercase span");
const camelCase = document.querySelector("#camelcase span");
const pascalCase = document.querySelector("#pascalcase span");
const snakeCase = document.querySelector("#snakecase span");
const kababCase = document.querySelector("#kababcase span");
const trimCase = document.querySelector("#trim span");

// function capitalize(str) {
//   return str[0].toUpperCase() + str.slice(1, str.length);
// }
// function camelCaseOutput(string) {
//   const lowerCaseString = string.toLowerCase();
//   const splittedString = lowerCaseString.split(" ");
//   const finalArr = splittedString.map((word, i) => {
//     if (i === 0) return word;
//     return capitalize(word);
//   });
//   return finalArr.join("");
// }

function capitalize(str) {
  if (!str) return str;
  return str[0]?.toUpperCase() + str.slice(1, str.length);
}
function camelCaseOutput(str) {
  const lowerCaseString = str.toLowerCase();
  const splittedString = lowerCaseString.split(" ");
  const finalArr = splittedString.map((word, i) => {
    if (i === 0) return word;
    return capitalize(word);
  });
  return finalArr.join("");
}
function pascalCaseOutput(str) {
  const lowerCaseString = str.toLowerCase();
  const splittedString = lowerCaseString.split(" ");
  const finalArr = splittedString.map((word) => {
    return capitalize(word);
  });
  return finalArr.join("");
}

function a() {
  lowerCase.innerText = input.value.toLowerCase();
  upperCase.innerText = input.value.toUpperCase();
  camelCase.innerText = camelCaseOutput(input.value);
  pascalCase.innerText = pascalCaseOutput(input.value);
  snakeCase.innerText = input.value.replaceAll(" ", "_");
  kababCase.innerText = input.value.replaceAll(" ", "-");
  trimCase.innerText = input.value.replaceAll(" ", "");
}
a();

input.addEventListener("input", a);
