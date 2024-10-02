// Selecting elements from the HTML document
const addBtn = document.querySelector("#add"); // Button to add item
const clearBtn = document.querySelector("#clear"); // Button to clear all items
const itemName = document.querySelector("#name"); // Input field for item name
const itemAmount = document.querySelector("#amount"); // Input field for item amount
const amt = document.querySelector("#expense h2"); // Display area for total expense

// Initializing variables
let expense = 0; // Variable to store total expense
let itemsArray = []; // Array to store items (currently not used)

// Function to add an item to the list
const addLists = () => {
  // Selecting wrapper element
  let wrapper = document.querySelector(".wrapper");
  // Creating a notice paragraph element
  let notice = document.createElement("p");

  // Checking if item name or amount is empty
  if (itemName.value == "" || itemAmount.value == "") {
    // Displaying appropriate notice if either name or amount is empty
    if (itemAmount.value == "" && itemName.value == "") {
      notice.innerText = `* Name and Amount is mandatory.`;
      wrapper.prepend(notice);
    } else if (itemAmount.value == "") {
      notice.innerText = `* Amount is mandatory.`;
      wrapper.prepend(notice);
    } else {
      notice.innerText = `* Name is mandatory.`;
      wrapper.prepend(notice);
    }
  } else {
    // Removing any existing notices
    document.querySelectorAll(".wrapper p ").forEach((para) => {
      para.remove();
    });
    // Calling the function to render the item list
    renderList();
  }
};

// Function to render the item list
const renderList = () => {
  // Creating list item element
  let list = document.createElement("li");
  // Setting the text of list item with item name and amount
  list.innerText = `${itemName.value} : ${itemAmount.value}`;
  // Adding list item to the top of the item list
  document.getElementById("item-list").prepend(list);

  // Adding item amount to total expense
  let amount = parseFloat(itemAmount.value);
  expense += amount;
  // Displaying total expense
  amt.innerText = expense.toFixed(2);

  // Clearing input fields
  itemName.value = "";
  itemAmount.value = "";
};

// Event listener for add button click
addBtn.addEventListener("click", () => {
  addLists();
});

// Event listener for clear button click
clearBtn.addEventListener("click", () => {
  // Removing all list items
  document.querySelectorAll("#item-list li").forEach((li) => li.remove());
  // Resetting total expense display
  amt.innerText = "00.0";
  // Removing stored items from local storage (currently not implemented)
  localStorage.removeItem("items");
});
