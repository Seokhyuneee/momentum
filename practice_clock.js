const clock_qS = document.querySelector("#clock");

function fc_clock() {
    const date = new Date();
    const date_hour = String(date.getHours()).padStart(2, 0);
    const date_minute = String(date.getMinutes()).padStart(2, 0);
    const date_second = String(date.getSeconds()).padStart(2, 0);
    clock_qS.innerText = `${date_hour}:${date_minute}:${date_second}`;
}

fc_clock();

setInterval(fc_clock, 1000);