//Selectors
const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");

//Event Listeners
toDoButton.addEventListener('click', addToDo);

//Functions
function addToDo(event){
    event.preventDefault();
    //Create DIV
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add("todo");
    //Create LI
    const newToDo = document.createElement('li');
    newToDo.innerText = 'Witaj!';
    newToDo.classList.add('todo-item');
    toDoDiv.appendChild(newToDo);
    //Check mark button
    const completedButton = document.createElement('button')
}