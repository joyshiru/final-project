// Grabbing the necessary DOM elements
const expenseForm = document.getElementById("budget-form");
const expenseList = document.getElementById("expense-list");
const totalAmountSpan = document.getElementById("total-amount");
let totalAmount = 0;

// Handle form submission
expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const expenseName = document.getElementById("expense-name").value;
  const expenseAmount = parseFloat(
    document.getElementById("expense-amount").value
  );
  const expenseCategory = document.getElementById("expense-category").value;
  const expenseDate = document.getElementById("expense-date").value;

  if (!expenseName || !expenseAmount || !expenseCategory || !expenseDate)
    return;

  // Create a new list item for the expense
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="expense-name">${expenseName}</span> - 
    <span class="expense-amount">$${expenseAmount.toFixed(2)}</span> - 
    <span class="expense-category">${expenseCategory}</span> on ${expenseDate}
  `;

  expenseList.appendChild(li);

  // Update total expenses
  totalAmount += expenseAmount;
  totalAmountSpan.textContent = `$${totalAmount.toFixed(2)}`;

  // Clear form fields
  expenseForm.reset();
});
