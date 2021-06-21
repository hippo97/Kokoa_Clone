
const clock_span = document.querySelector(".status-bar__column__time");


function getTime(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock_span.innerHTML = `${hours}:${minutes}`;
}

getTime();
setInterval(getTime, 1000);