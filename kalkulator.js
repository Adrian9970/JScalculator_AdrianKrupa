class Calculator {
    constructor() {
        this.schermCurrent = document.querySelector(".schermcurrent");
        this.schermVorige = document.querySelector(".schermvorige");
        this.bindEvents();
    }

    bindEvents() {
        const numberButtons = document.querySelectorAll("[data-number]");
        const operationButtons = document.querySelectorAll("[data-operation]");
        const equalsButton = document.querySelector("[data-equals]");
        const allClearButton = document.querySelector("[data-all-clear]");
        const deleteButton = document.querySelector("[data-Delete]");

        numberButtons.forEach(button => {
            button.addEventListener("click", () => {
                this.appendNumber(button.innerText);
            });
        });

        operationButtons.forEach(button => {
            button.addEventListener("click", () => {
                this.appendOperation(button.innerText);
            });
        });

        equalsButton.addEventListener("click", () => {
            this.calculate();
        });

        allClearButton.addEventListener("click", () => {
            this.clearAll();
        });

        deleteButton.addEventListener("click", () => {
            this.delete();
        });
    }

    appendNumber(number) {
        this.schermCurrent.innerText += number;
    }

    appendOperation(operation) {
        this.schermCurrent.innerText += operation;
    }

    calculate() {
        const expr = this.schermCurrent.innerText;
        if (expr) {
            const result = eval(expr);
            this.schermVorige.innerText = expr;
            this.schermCurrent.innerText = result;
        }
    }

    clearAll() {
        this.schermCurrent.innerText = '';
        this.schermVorige.innerText = '';
    }

    delete() {
        let currentText = this.schermCurrent.innerText;
        let previousText = this.schermVorige.innerText;

        if (currentText.length > 0 && previousText === '') {
            currentText = currentText.slice(0, -1);
            this.schermCurrent.innerText = currentText;
        } else if (previousText.length > 0) {
            this.schermVorige.innerText = '';
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const calculator = new Calculator();
});
