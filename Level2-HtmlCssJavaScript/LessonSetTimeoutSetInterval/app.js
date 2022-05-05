const display = document.getElementById('time-display');

function getTime(){
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec  = now.getSeconds();

    display.textContent = `${hour}:${min}:${sec}`
}
setInterval(getTime, 1000)