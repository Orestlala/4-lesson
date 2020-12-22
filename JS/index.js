//Відлік
;

const startTime = new Date();
function updateTimer() {
    const endTime = new Date(2021, 01, 01, 00)
    const currTime = new Date()
    const diffSecs = Math.floor((endTime - currTime) / 1000);
    document.querySelector(".timer").innerText = diffSecs;
}
setInterval(updateTimer, 1000)