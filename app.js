const buttons = document.querySelector(".calculator-buttons");
const input = document.querySelector("#input");
const lateValue = document.querySelector("#lateValue");
//? degiskenler
let result = 0;
let islem = "";
let firstNumber = 0;
let secondNumber = 0;
// //? Add Event Listener
buttons.addEventListener("click", (e) => {
  addToInput(e.target.value);
  calculate(e);
});
// //? Deger ekleme
const addToInput = (deger) => {
  input.innerText += deger;
};
const calculate = (e) => {
  if (e.target.className === "operator") {
    firstNumber = input.innerText;
    lateValue.innerText = firstNumber;
    input.innerText = "";
    islem = lateValue.innerText[lateValue.innerText.length - 1];
    console.log(islem);
  } else if (e.target.id === "equal") {
    secondNumber = input.innerText;
    lateValue.innerText += parseInt(secondNumber);
    input.innerText = "";}
    if (islem === "+") {
      result = Number(firstNumber.slice(0, -1)) + parseInt(secondNumber);
      input.innerText = result;
    } else if (islem === "-") {
      result = Number(firstNumber.slice(0, -1)) + parseInt(secondNumber);
      input.innerText = result;
    } else if (islem === "x") {
      result = Number(firstNumber.slice(0, -1)) * parseInt(secondNumber);
      input.innerText = result;
    } else if (islem === "/") {
      result = Number(firstNumber.slice(0, -1)) / parseInt(secondNumber);
      input.innerText = result;
    }
  } else if (e.target.id === "clear") {
    result = 0;
    islem = "";
    firstNumber = 0;
    secondNumber = 0;
    input.innerText = "";
    lateValue.innerText = "";
  }

