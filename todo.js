const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todoList");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e){
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const btn = document.createElement("button");
  span2.innerText = newTodo.text;
  btn.innerText = "X";
  btn.addEventListener("click", deleteTodo);
  li.appendChild(span1);
  li.appendChild(span2);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)
if(savedToDos){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((item) => paintTodo(item));
}