class UI {
    constructor() {
            //Presetting properties with dom values
            this.budgetFeedback = document.querySelector(".budget-feedback");
            this.expenseFeedback = document.querySelector(".expense-feedback");
            this.budgetForm = document.getElementById("budget-form");
            this.budgetInput = document.getElementById("budget-input");
            this.budgetAmount = document.getElementById("budget-amount");
            this.expenseAmount = document.getElementById("expense-amount");
            this.balance = document.getElementById("balance");
            this.balanceAmount = document.getElementById("balance-amount");
            this.expenseForm = document.getElementById("expense-form");
            this.expenseInput = document.getElementById("expense-input");
            this.amountInput = document.getElementById("amount-input");
            this.expenseList = document.getElementById("expense-list");
            this.itemList = [];
            this.itemID = 0;
        }
        //submit budget method
    submitBudgetForm() {
            const value = this.budgetInput.value;
            if (value === '' || value < 1) {
                this.budgetFeedback.classList.add('showItem');
                this.budgetFeedback.innerHTML = `<p> value cannot be empty or negative</p>`;
                // this === UI 
                const self = this;
                setTimeout(function() {
                    self.budgetFeedback.classList.remove('showItem');
                }, 4000)
            } else {
                this.budgetAmount.textContent = value;
                this.budgetInput.value = '';
                this.showBalance();
            }
        }
        //show balance
    showBalance() {
        const expense = this.totalExpense();
        const total = parseInt(this.budgetAmount.textContent) - expense;
        this.balanceAmount.text = total;
        if (total < 0) {
            this.balance.classList.remove('showGreen', 'showBlack');
            this.balance.classList.add('showRed');
        } else if (total > 0) {
            this.balance.classList.remove('showRed', 'showBlack');
            this.balance.classList.add('showGreen');
        } else {
            this.balance.classList.remove('showRed', 'showGreen');
            this.balance.classList.add('showBlack');
        }
    }

    //submit expense form
    submitExpenseForm() {
            const expenseValue = this.expenseInput.value;
            const amountValue = this.amountInput.value;
            if (expenseValue === '' || amountValue === '' || amountValue < 0) {
                this.expenseFeedback.classList.add('showItem');
                this.expenseFeedback.innerHTML = `<p>values cannot be empty or negative<p>`;
                const self = this;
                setTimeout(function() {
                    self.expenseFeedback.classList.remove('showItem');
                }, 4000)
            } else {
                let amount = parseInt(amountValue);
                this.expenseInput = '';
                this.amountInput = '';
            }
        } //total expense
    totalExpense() {
        let total = 400;
        return total;
    }
}

function eventListeners() {
    const budgetForm = document.getElementById('budget-form');
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    // new instance of UI Class
    const ui = new UI();

    // budget form submit
    budgetForm.addEventListener('submit', function(event) {
            event.preventDefault();
            ui.submitBudgetForm();
        })
        // expense form submit
    expenseForm.addEventListener('submit', function(event) {
            event.preventDefault();
            ui.submitExpenseForm();
        })
        // expense list submit
    expenseList.addEventListener('click', function(event) {

    })
}

document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
})