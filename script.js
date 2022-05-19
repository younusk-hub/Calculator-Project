const userInput = document.querySelectorAll(".calculator-container__user-input__input");
const displayArr = [];

const printUserInput = (event) => {
    displayArr.push(event.target.value)
    console.log(displayArr)
};

userInput.forEach((input) => {
    input.addEventListener("click", printUserInput)
});
