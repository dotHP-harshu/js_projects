let item = document.getElementById("item");
let toDoBox = document.getElementById("to-do-box");

// Listen for keyup event on the input field
item.addEventListener("keyup", (event) => {
  // Check if Enter key is pressed
  if (event.key == "Enter") {
    // If input field is empty, show alert
    if (item.value == "") {
      alert("Please enter your to-do");
    } else {
      // If input field has content, add the to-do and clear the field
      addToDo(item.value);
      item.value = "";
    }
  }
});

// Function to add a new to-do item
const addToDo = (item) => {
  // Create a new list item element
  const list = document.createElement("li");
  // Set its inner HTML to include the to-do text and a plus icon
  list.innerHTML = `  ${item}
    <i class="fa-solid fa-plus"></i>`;
  // Append the new list item to the to-do list container
  toDoBox.appendChild(list);
  // Save updated to-do list to localStorage
  saveData();

  // Add click event listener to toggle 'done' class on list item
  list.addEventListener("click", () => {
    list.classList.toggle("done");
  });

  // Add click event listener to remove list item when plus icon is clicked
  let icon = list.querySelector("i");
  icon.addEventListener("click", () => {
    list.remove();
    // Save updated to-do list to localStorage after removing item
    saveData();
  });
};

// Function to save to-do list data to localStorage
const saveData = () => {
  const data = [];
  // Get all list items in the to-do list container
  const lists = document.querySelectorAll("#to-do-box li");
  // Push the text content of each list item to 'data' array
  lists.forEach((list) => {
    data.push(list.textContent);
  });
  // stringify 'data' array and store it in localStorage under 'lists' key
  localStorage.setItem("lists", JSON.stringify(data));
};

// Immediately invoked function to load saved to-do list items from localStorage
(function () {
  // Retrieve saved to-do list data from localStorage and parse it
  const savedLists = JSON.parse(localStorage.getItem("lists"));
  // Iterate over saved to-do list items and add them to the list
  savedLists.forEach((savedList) => {
    // For each saved item, call addToDo function to add it to the list
    let text = savedList;
    addToDo(text);
  });
})();
