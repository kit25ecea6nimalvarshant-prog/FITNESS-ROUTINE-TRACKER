let currentDay = 1;
const container = document.getElementById("dayContainer");
const body = document.getElementById("body");

body.className = "default";

loadDay(currentDay);

function loadDay(day) {
    container.innerHTML = `
        <div class="day">
            <h2>Day ${day}</h2>

            <p>Push-ups: <span id="push">0</span>/15</p>
            <p>Time: <span id="pushTime">30</span>s</p>
            <button onclick="startPush()">Start Push-ups</button>

            <p>Sit-ups: <span id="sit">0</span>/15</p>
            <p>Time: <span id="sitTime">30</span>s</p>
            <button onclick="startSit()">Start Sit-ups</button>
        </div>
    `;
}

let pushDone = false;
let sitDone = false;

// Push-ups
function startPush() {
    let count = 0;
    let time = 30;

    let countEl = document.getElementById("push");
    let timeEl = document.getElementById("pushTime");

    body.className = "pushBg"; // 🔥 change background

    let interval = setInterval(() => {
        time--;
        count = Math.min(15, count + 1);

        countEl.innerText = count;
        timeEl.innerText = time;

        if (time <= 0 || count >= 15) {
            clearInterval(interval);
            pushDone = true;
            body.className = "default"; // reset background
            checkComplete();
        }
    }, 1000);
}

// Sit-ups
function startSit() {
    let count = 0;
    let time = 30;

    let countEl = document.getElementById("sit");
    let timeEl = document.getElementById("sitTime");

    body.className = "sitBg"; // 🔥 change background

    let interval = setInterval(() => {
        time--;
        count = Math.min(15, count + 1);

        countEl.innerText = count;
        timeEl.innerText = time;

        if (time <= 0 || count >= 15) {
            clearInterval(interval);
            sitDone = true;
            body.className = "default"; // reset background
            checkComplete();
        }
    }, 1000);
}

// Check completion
function checkComplete() {
    if (pushDone && sitDone) {
        showCelebration();

        setTimeout(() => {
            nextDay();
        }, 2000);
    }
}

// Next day
function nextDay() {
    if (currentDay < 6) {
        currentDay++;
        pushDone = false;
        sitDone = false;
        loadDay(currentDay);
    } else {
        container.innerHTML = "<h2>🎉 All 6 Days Completed! 🎉</h2>";
    }
}

// Celebration
function showCelebration() {
    let el = document.getElementById("celebration");
    el.style.display = "block";

    setTimeout(() => {
        el.style.display = "none";
    }, 1500);
}
