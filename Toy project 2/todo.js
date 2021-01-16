const toDoForm= document.querySelector(".js-toDoForm"),
    toDoInput= toDoForm.querySelector("input"),
    toDoList= document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';
let toDos = [];


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text) {
    const li=  document.createElement("li");
    const delBtn= document.createElement("button");
    delBtn.innerText= "X";
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj={
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue= toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    //localStorage에 toDos key의 value 값의 유뮤 확인
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        //array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 주는 것 
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();