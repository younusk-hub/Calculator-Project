const userInput = document.querySelectorAll(".calculator-container__user-input__input");
const displayInput = document.getElementById("display-input");
let tempArr = [];

const printUserInput = (event) => {
    if (event.target.value === "0" || event.target.value === "1" || event.target.value === "2" || event.target.value === "3" || event.target.value === "4" || event.target.value === "5" || event.target.value === "6" || event.target.value === "7" || event.target.value === "8" || event.target.value === "9" || event.target.value === ".") {
        tempArr.push(event.target.value)
        console.log(tempArr);
        let num = tempArr.join("")
        console.log(num);
        displayInput.innerHTML = num;
    } else if (event.target.value === "÷" || event.target.value === "X" || event.target.value === "-" || event.target.value === "+") {
        if (tempArr[tempArr.length - 1] === "÷" || tempArr[tempArr.length - 1] === "X" || tempArr[tempArr.length - 1] === "-" || tempArr[tempArr.length - 1] === "+" || tempArr[tempArr.length - 1] === ".") {
            tempArr.pop()
        };
        tempArr.push(event.target.value)
        console.log(tempArr);
        let num = tempArr.join("")
        console.log(num);    
        displayInput.innerHTML = num;
        
    };


};




userInput.forEach((input) => {
    input.addEventListener("click", printUserInput)
});