const input = document.querySelector("input");
const lowerCase = document.querySelector("#lowercase span");
const upperCase = document.querySelector("#uppercase span");
const camelCase = document.querySelector("#camelcase span");

function camelCaseOutput(string) {
  const camelString = camelCaseOutput(string);
  console.log(camelString);
}

input.addEventListener("input", (e) => {
  lowerCase.innerText = input.value.toLowerCase();
  upperCase.innerText = input.value.toUpperCase();
});
