const inputNumber = document.getElementById("input-number");
const resultNumber = document.getElementById("number-result");

function oddGenerator() {
    let result = "";

    for (let i = 1; i <= inputNumber.value; i++) {
        if (i % 2 !== 0) {
            result += `${i} `;
        }
    }
    resultNumber.innerHTML = result;
}

function evenGenerator() {
    let result = "";

    for (let i = 1; i <= inputNumber.value; i++) {
        if (i % 2 == 0) {
            result += `${i} `;
        }
    }
    resultNumber.innerHTML = result;
}

function primeGenerator() {
    let result = "";

    for (let i = 1; i <= inputNumber.value; i++) {
        let notPrime = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                notPrime = 1;
                break;
            }
        }

        if (i > 1 && notPrime == 0) {
            result += `${i} `;
        }
    }
    resultNumber.innerHTML = result;
}

function resetButton(){
    inputNumber.value = "";
    resultNumber.innerHTML = "<img src='/assets/result.svg' />";
}