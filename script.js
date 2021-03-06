// Need this class so that the code can get the users input.
const userInput = document.querySelectorAll(".calculator-container__user-input__input");
// Need this to display what the user wants us to work out.
const displayInput = document.getElementById("display-input");
// Need this to display the answers.
const displayAnswer = document.querySelector(".calculator-container__answer");

// empty array represents 0 input from user and letting javascript know we are asigning a variable to an array.
let expressionArr = [];

let percentageCounter = 0;


const printUserInput = (event) => {

    if (event.target.value === "0" || event.target.value === "1" || event.target.value === "2" || event.target.value === "3" || event.target.value === "4" || event.target.value === "5" || event.target.value === "6" || event.target.value === "7" || event.target.value === "8" || event.target.value === "9") {
        expressionArr.push(event.target.value);
        console.log(expressionArr);
        let num = expressionArr.join("");
        console.log(num);
        displayInput.innerText = num;

    } else if (event.target.value === "÷" || event.target.value === "X" || event.target.value === "-" || event.target.value === "+" ||  event.target.value === ".") {
        if (expressionArr[0] === "÷" || expressionArr[0] === "X" || expressionArr[0] === "+" || expressionArr[0] === "." ) {
            expressionArr.shift();
        };
        expressionArr.push(event.target.value);
        console.log(expressionArr);
        let num = expressionArr.join("");
        console.log(num);
        displayInput.innerText = num;

    } else if (event.target.value === "C") {
        expressionArr = [];
        console.log(expressionArr); 
        displayInput.innerText = "CLEARED";
        displayAnswer.innerText = "ANSWER";
    
    } else if (event.target.value === "del") {
        expressionArr.pop()
        console.log(expressionArr);
        let num = expressionArr.join("");
        displayInput.innerText = num;
        if (expressionArr.length === 0) {
            displayInput.innerText = "CLEARED";
            displayAnswer.innerText = "ANSWER";
        }

    } else if (event.target.value === "=") {
        if (expressionArr[expressionArr.length - 1] === "÷" || expressionArr[expressionArr.length - 1] === "X" || expressionArr[expressionArr.length - 1] === "-" || expressionArr[expressionArr.length - 1] === "+" || expressionArr[expressionArr.length - 1] === ".") {
            expressionArr.pop();
            let num = expressionArr.join("");
            displayInput.innerText = num;
        };
        expressionArr = sortArr(expressionArr);
        console.log(expressionArr);
        let answer = calculateExpression(expressionArr);
        displayAnswer.innerText = answer;

    } else if (event.target.value === "%") {
        if (percentageCounter%2 === 0) {
            expressionArr = [expressionArr[0] * 100];
            console.log(expressionArr);
            displayAnswer.innerText = expressionArr + "%";
            percentageCounter++;
        } else {
            expressionArr = [expressionArr[0] / 100];
            console.log(expressionArr);
            displayAnswer.innerText = expressionArr;
            percentageCounter++;
        }

    } else if (event.target.value === "+/-") {
        expressionArr.push(expressionArr.pop() *-1)
        let answerPositiveNegative = expressionArr
        displayAnswer.innerText = answerPositiveNegative;
        console.log(answerPositiveNegative)
    }

};

const sortArr = (arr) => {
    console.log(arr);
    let tempArr = [];
    let newArr = [];
    arr.forEach(i => {
        if (parseFloat(i) || i === "." || parseFloat(i) === 0) {
            console.log(i);
            tempArr.push(i);
        } else if (i === "-" && tempArr.length === 0) {
            console.log(i);
            tempArr.push(i);
        } else if (i === "÷" || i === "X" || i === "+" || i === "-") {
            
            if (tempArr[0] === "-") {
                console.log(i);
                tempArr.shift();
                newArr.push(parseFloat(tempArr.join("")) * -1);
                newArr.push(i);
                tempArr = []
            } else {
                console.log(i);
                newArr.push(parseFloat(tempArr.join("")));
                newArr.push(i);
                tempArr = [];
            }
        };
    });
    newArr.push(parseFloat(tempArr.join("")));
    return newArr;
};

const calculateExpression = (arr) => {
    // bidmas/bodmas
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "÷") {
            let tempAnswer = (arr[i - 1]/arr[i + 1]);
            console.log(tempAnswer);
            arr.splice((i-1), 3, tempAnswer);
            console.log(arr);
            i--;
        };
    };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "X") {
            let tempAnswer = (arr[i - 1]*arr[i + 1]);
            console.log(tempAnswer);
            arr.splice((i-1), 3, tempAnswer);
            console.log(arr);
            i--;
        };
    };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "+") {
            let tempAnswer = (arr[i - 1] + arr[i + 1]);
            console.log(tempAnswer);
            arr.splice((i-1), 3, tempAnswer);
            console.log(arr);
            i--;
        };
    };

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0 && arr[i] === "-") {
            console.log(i)
            let tempAnswer = (arr[i - 1] - arr[i + 1]);
            console.log(tempAnswer);
            arr.splice((i-1), 3, tempAnswer);
            console.log(arr);
            i--;
        }
    };

    return arr;
};

userInput.forEach(input => {
    input.addEventListener("click", printUserInput);
});