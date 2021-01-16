const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";



function saveName(text){
    localStorage.setItem(USER_LS,text);
}    
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    //form 영역 보이지 않게 하고 greeting 영역 보여지게 
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadname(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();

    }else{
        paintGreeting(currentUser);
    }
}    

function init(){
    loadname();
}
init();