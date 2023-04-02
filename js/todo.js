const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// == document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // 배열을 string으로 변환
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    // toDo.id는 num, li.id는 string이라 동일하지 않음 따라서 string을 num으로 변환 해주어야 함.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // 선택한 toDo의 id를 제외한 toDo id를 true로 return
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("sapn");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span); // span을 li 내부로 집어넣음
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    //input의 값을 새로운 변수에 복사
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //더이상 toDos array는 빈 값이 아님
    parsedToDos.forEach(paintToDo);
}

/* (item) => {console.log("this is the turn of ", item)}
   
   function sayHello(item){
    console.log("this is the turn of ", item)
*/

/*const arr = [1,2,3,4]
arr.filter(item => item > 2) >> [3,4]
const newArr = arr.filter(item => item > 2)
arr >> [1,2,3,4] newArr >> [3,4] */