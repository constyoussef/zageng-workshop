// const inputAdd = document.getElementById("input-add");
// const btnAdd = document.getElementById("btn-add");
// const todoList = document.querySelector(".todo-list");
// const checkbox = document.querySelector(".checkbox-toggle");

// const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// function renderTasks() {
//   // Clear the list first so we don't duplicate times
//   todoList.innerHTML = "";

//   // Loop througth the array and create the UI for each task
//   tasks.forEach((task, idx) => {
//     const li = document.createElement("li");

//     // Add the `completed` class if the task is done (for the strikethrough CSS)
//     if (task.completed) {
//       li.classList.add("completed");
//     }

//     li.innerHTML = `
//       <label class="task">
//         <input type="checkbox" class="checkbox-toggle" data-index=${idx} ${task.completed ? "checked" : ""} />
//         <span class="custom-check"></span>
//         <p>${task.content}</p>
//         <span class="delete">X</span>
//       </label>
//     `;

//     todoList.appendChild(li);
//   });

//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// btnAdd.addEventListener("click", () => {
//   const text = inputAdd.value.trim();

//   if (text !== "") {
//     // Add new task object to our array
//     tasks.push({
//       content: text,
//       completed: false,
//     });

//     // Clear the input field
//     inputAdd.value = "";

//     // Re-render the UI
//     renderTasks();
//   }
// });

// todoList.addEventListener("click", (e) => {
//   // Did they click the delete button?
//   if (e.target.classList.contains("delete")) {
//     const index = e.target.getAttribute("data-index");
//     tasks.splice(index, 1); // Remove 1 item from the array at this index
//     renderTasks();
//   }
//   // Did they click the checkbox?
//   if (e.target.classList.contains("checkbox-toggle")) {
//     const index = e.target.getAttribute("data-index");
//     tasks[index].completed = !tasks[index].completed;
//     renderTasks(); // Re-render the UI and save!
//   }
// });

// renderTasks();

// GET method => Fetch data
const GETbooks = fetch("https://fakerapi.it/api/v2/books", {
  method: "GET",
});

books
  .then((res) => res.json())
  .then((data) => console.log(data.data[0].description));

// POST method => Create data
const createBook = fetch("https://fakerapi.it/api/v2/books", {
  method: "POST",
  body: {
    name: "book",
    description: "description",
  },
});

// PUT method => Udate/edit data
const Editbooks = fetch("https://fakerapi.it/api/v2/books/book-id", {
  method: "PUT",
  body: {
    name: "book1",
  },
});

// DELETE method => Delete data
const Deletebooks = fetch("https://fakerapi.it/api/v2/books/book-id", {
  method: "DELETE",
});
