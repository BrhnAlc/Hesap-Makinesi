// const buttons = document.querySelector(".buttons");
// const topScreen = document.querySelector(".upScreen");
// const bottomScreen = document.querySelector(".bottomScreen");
// const dote = document.querySelector(".dote");



const buttons=document.querySelector(`.buttons`);






buttons.addEventListener(`click`,(e)=>{
addToButton(e);
})














// //? variables
// let fNum = 0;
// let sNum = 0;
// let result = 0;
// let choosedOp = "";
// let sayac = 0;
// //? addEventListener
// buttons.addEventListener("click", (e) => {
//   addToBottom(e);
//   operator(e);
//   dotted(e);
//   console.log(bottomScreen.innerText === ".");
// });
// //? Function
// const addToBottom = (e) => {
//   if (!e.target.classList.contains("buttons")) {
//     bottomScreen.innerText += e.target.innerText;
//   }
// };
// const operator = (e) => {
//   if (e.target.classList.contains("operator")) {
//     topScreen.innerText = bottomScreen.innerText;
//     choosedOp = topScreen.innerText[topScreen.innerText.length - 1];
//     console.log(choosedOp);
//     fNum = bottomScreen.innerText.slice(0, -1);
//     bottomScreen.innerText = "";
//     console.log(fNum);
//     if (e.target.classList.contains("minus")) {
//       addMinus();
//     }
//   } else if (e.target.classList.contains("equal")) {
//     topScreen.innerText += bottomScreen.innerText.slice(0, -1);
//     sNum = bottomScreen.innerText.slice(0, -1);
//     bottomScreen.innerText = calculate(fNum, sNum, choosedOp);
//     console.log(sNum);
//   } else if (e.target.classList.contains("clear")) {
//     bottomScreen.innerText = "";
//     topScreen.innerText = "";
//     location.reload();
//   }
// };
// const calculate = (fNum, sNum, choosedOp) => {
//   if (choosedOp === "x") {
//     return fNum * sNum;
//   } else if (choosedOp === "÷") {
//     return fNum / sNum;
//   } else if (choosedOp === "-") {
//     return fNum - sNum;
//   } else if (choosedOp === "+") {
//     return Number(fNum) + Number(sNum);
//   } else if (choosedOp === "%") {
//     return (fNum * sNum) / 100;
//   }
// };
// const addMinus = () => {
//   const minus = "-";
//   bottomScreen.innerText += minus + fNum;
//   topScreen.innerText = bottomScreen.innerText;
// };
// const dotted = (e) => {
//   if (e.target.classList.contains("dote")) {
//     sayac++;
//     if (sayac > 1) {
//       dote.style.pointerEvents = "none";
//       //   bottomScreen.innerText = "";
//       //   alert("2 tane nokta koyamazsin");
//     }
//   }
// };










