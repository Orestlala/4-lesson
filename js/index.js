//Відлік

const startTime = new Date();
function updateTimer() {
    const endTime = new Date(2021, 00, 00, 00)
    const currTime = new Date()
    const diffSecs = Math.floor((endTime - currTime) / 1000);
    const dayLeft = Math.floor(diffSecs / 60 / 60 / 24);
    const hourLeft = Math.floor((diffSecs / 60 / 60) % 24);
    const minuteLeft = Math.floor((diffSecs / 60) % 60);
    const secsLeft = Math.floor(diffSecs % 60);
    document.querySelector("#day").innerText = dayLeft;
    document.querySelector("#hour").innerText = hourLeft;
    document.querySelector("#minute").innerText = minuteLeft;
    document.querySelector("#second").innerText = secsLeft;
}
setInterval(updateTimer, 1000)