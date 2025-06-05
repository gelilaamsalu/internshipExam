document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputField = document.querySelector('input[name="item"]');
  const list = document.querySelector("ul.list-group");

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const itemText = inputField.value.trim();
    if (itemText) {
      addItem(itemText);
      inputField.value = "";
      inputField.focus();
    }
  });

  // Add a new item to the list
  function addItem(text) {
    const li = document.createElement("li");
    li.className =
      "list-group-item list-group-item-action d-flex align-items-center justify-content-between";

    li.innerHTML = `
      <span class="item-text">${text}</span>
      <div>
        <button class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
        <button class="delete-me btn btn-danger btn-sm">Delete</button>
      </div>
    `;

    // Attach delete listener
    li.querySelector(".delete-me").addEventListener("click", function () {
      li.remove();
    });

    // Attach edit listener
    li.querySelector(".edit-me").addEventListener("click", function () {
      const newText = prompt("Enter new value:", text);
      if (newText !== null && newText.trim()) {
        li.querySelector(".item-text").textContent = newText.trim();
      }
    });

    list.appendChild(li);
  }
});
