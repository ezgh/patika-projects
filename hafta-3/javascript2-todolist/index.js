let TODOS = [];
// localStorage.removeItem("todos"); // to clear the local storage
const localStorageTodos = localStorage.getItem("todos");
if (localStorageTodos) {
  TODOS = JSON.parse(localStorageTodos);
  renderTodos();
}

// create a list item using the add button.
function newElement() {
  let input = document.getElementById("task").value;
  const todo = {
    id: new Date().valueOf(),
    text: input,
    checked: false,
  };

  //check if the value is a valid string.
  if (todo.text.trim().length === 0) {
    $(document).ready(function () {
      $(".error").toast("show"); //use bootstrap toast as alert
    });
    return;
  }

  $(document).ready(function () {
    $(".success").toast("show"); //use bootstrap toast as alert
  });

  TODOS.push(todo);
  saveTodosToLocalStorage();
}

// save the array to LocalStorage and re-render
function saveTodosToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(TODOS));
  renderTodos();
}

// re-render all the todos from scracth
function renderTodos() {
  const ul = document.getElementById("list");
  ul.innerHTML = "";

  TODOS.forEach((todo) => {
    let li = document.createElement("li");
    let t = document.createTextNode(todo.text);
    li.appendChild(t);
    li.id = todo.id;
    if (todo.checked) li.classList.toggle("checked");
    ul.appendChild(li);

    document.getElementById("task").value = ""; //clear input area for new tasks to be added.

    //create close (delete) button
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.id = `delete-${todo.id}`;
    span.appendChild(txt);
    li.appendChild(span);

    // delete task
    let close = document.getElementById(`delete-${todo.id}`);
    close.onclick = function () {
      close.style.display = "none";
      TODOS = TODOS.filter((t) => t.id !== todo.id);
      saveTodosToLocalStorage();
    };

    // complete task
    let task = document.getElementById(todo.id);
    task.addEventListener(
      "click",
      function (ev) {
        if (ev.target.tagName === "LI") {
          ev.target.classList.toggle("checked");
          TODOS = TODOS.map((t) => {
            if (t.id === todo.id) {
              todo.checked = !todo.checked;
            }
            return t;
          });
          saveTodosToLocalStorage();
        }
      },
      false
    );
  });
}
