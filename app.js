//Selectors
const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");
const toDoErrorMessage = document.querySelector(".error-message");
const filterToDo = document.querySelector(".filter-todo");

//Event Listeners
toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener("click", deleteCheck);
filterToDo.addEventListener("click",filterTodo);

//Functions
function addToDo(event) {
    event.preventDefault();
    if (toDoInput.value !== "" | toDoInput.value === null) {
        //Create DIV
        const toDoDiv = document.createElement('div');
        toDoDiv.classList.add("todo");
        //Create LI
        const newToDo = document.createElement('li');
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add('todo-item');
        toDoDiv.appendChild(newToDo);
        //Check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        toDoDiv.appendChild(completedButton);
        //Check trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        toDoDiv.appendChild(trashButton);
        //Append to list
        toDoList.appendChild(toDoDiv);
        //Empty the input field
        toDoInput.value = "";
    } else {
        //Perform action if empty
    }
}

function deleteCheck(event) {
    const item = event.target;
    //Delete element from list
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add('fall');
        //Remove after animation ends
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    //Perform operation on check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(event) {
    const todos = toDoList.childNodes;
    todos.forEach(function (todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex"
                break;
            case "done":
                if (todo.classList.contains('done')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    });
}