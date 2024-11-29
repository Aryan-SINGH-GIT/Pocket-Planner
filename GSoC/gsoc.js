document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const addExpenseBtn = document.querySelector('.add-expense-btn');
    const expensesList = document.querySelector('.expenses-list');
    const totalExpensesElem = document.querySelector('.expense-amount');
    const progressBar = document.querySelector('.progress-bar');
    const monthlyBudgetElem = document.querySelector('.budget-amount');
    const categoryInput = document.getElementById('category-input');
    const amountInput = document.getElementById('amount-input');
    const addGoalBtn = document.querySelector('.add-goal-btn');
    const savingGoalInput = document.getElementById('saving-goal-input');

    let totalExpenses = 720; // Initial total expenses
    const monthlyBudget = 1000; // Monthly budget
    let savingGoal = 0; // Initial saving goal

    // Function to update total expenses and progress bar
    function updateExpenses(amount) {
        totalExpenses += amount;
        totalExpensesElem.textContent = `RS. ${totalExpenses}`;
        const percentage = (totalExpenses / monthlyBudget) * 100;
        progressBar.style.width = `${percentage}%`;
    }

    // Function to add a new expense
    function addExpense(category, amount) {
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `<span class="category">${category}</span><span class="amount">RS. ${amount}</span>`;
        expensesList.appendChild(expenseItem);
        updateExpenses(amount);
    }

    // Event Listener for Add Expense button
    addExpenseBtn.addEventListener('click', () => {
        const category = categoryInput.value.trim();
        const amount = parseFloat(amountInput.value.trim());

        if (category && !isNaN(amount) && amount > 0) {
            addExpense(category, amount);
            categoryInput.value = ''; // Clear input field
            amountInput.value = ''; // Clear input field
        } else {
            alert('Please enter valid data.');
        }
    });

    // Event Listener for Add Goal button
    addGoalBtn.addEventListener('click', () => {
        const goalAmount = parseFloat(savingGoalInput.value.trim());
        if (!isNaN(goalAmount) && goalAmount > 0) {
            savingGoal = goalAmount;
            addGoalBtn.textContent = `Saving Goal: RS. ${savingGoal}`;
            savingGoalInput.value = ''; // Clear input field
        } else {
            alert('Please enter a valid saving goal.');
        }
    });
});
