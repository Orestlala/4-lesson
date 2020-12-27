//Відлік
;

const startTime = new Date();
function updateTimer() {
    const endTime = new Date(2021, 00, 00, 00)
    const currTime = new Date()
    const diffSecs = Math.floor((endTime - currTime) / 1000);
    const dayLeft = Math.floor(diffSecs / 60 / 60 / 24);
    const hourLeft = Math.floor((diffSecs / 60 / 60) % 24);
    const minuteLeft = Math.floor((diffSecs / 60) % 60);
    const secsLeft = Math.floor(diffSecs % 60);
    document.querySelector(".timer").innerText = dayLeft + ":" + hourLeft + ":" + minuteLeft + ":" + secsLeft;
}
setInterval(updateTimer, 1000)