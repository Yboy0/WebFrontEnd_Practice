const clockContainer = document.querySelector(".js-clock");
const clockTitle=clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // seconds가 10보다 작으면 처음 꺼 크면 두 번 째 꺼 
    clockTitle.innerText = `${hours < 10 ?`0${hours}`: hours}:${
        minutes < 10 ? `0${minutes}`:minutes}:${
            seconds < 10 ? `0${seconds}` : seconds }`;
}
function init() {
    getTime();
    setInterval(getTime, 1000); //1초마다 함수 재 실행 
}
init();