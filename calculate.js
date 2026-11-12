const calculateButton = document.getElementById("calculateBtn");
const elem = document.getElementById("result");
const container = document.getElementById("btnTabs");
const inputsTabs = document.querySelectorAll(".tab-content");
const buttonTabs = container.querySelectorAll(".btn-active");
let currentTab = "distance"; // default to distance, matches HTML

function calculateDistance() {
    const speed = document.getElementById("speedForDistance").valueAsNumber;
    const time = document.getElementById("timeForDistance").valueAsNumber;

    if (isNaN(time) || isNaN(speed)) return "Εισάγετε ένα αριθμό.";
    if (speed <= 0 || time <= 0) return "Εισάγετε ένα θετικό αριθμό.";
    return (speed * time).toFixed(2) + " km";
}

function calculateSpeed() {
    const distance = document.getElementById("distanceForSpeed").valueAsNumber;
    const time = document.getElementById("timeForSpeed").valueAsNumber;

    if (isNaN(distance) || isNaN(time)) return "Εισάγετε ένα αριθμό.";
    if (distance <= 0 || time <= 0) return "Εισάγετε ένα θετικό αριθμό.";
    return (distance / time).toFixed(2) + " km/h";
}

function calculateTime() {
    const distance = document.getElementById("distanceForTime").valueAsNumber;
    const speed = document.getElementById("speedForTime").valueAsNumber;

    if (isNaN(distance) || isNaN(speed)) return "Εισάγετε ένα αριθμό.";
    if (speed <= 0 || distance <= 0) return "Εισάγετε ένα θετικό αριθμό.";
    const hours = distance / speed;
    return hours.toFixed(2) + " ώρες";
}

// --- Tab Switching ---
container.addEventListener('click', (e) => {
    const clickedButton = e.target.closest(".btn-active");
    if (!clickedButton) return;

    // Remove active class from all buttons
    buttonTabs.forEach(btn => btn.classList.remove("active"));
    clickedButton.classList.add("active");

    // Hide all input tabs
    inputsTabs.forEach(target => {
        target.classList.remove("active-input");
        target.classList.add("inactive-input");
    });

    // Show the target tab
    const targetSelector = clickedButton.dataset.target; // e.g. "#distance"
    const currentTarget = document.getElementById(targetSelector.replace("#", ""));

    if (currentTarget) {
        currentTarget.classList.remove("inactive-input");
        currentTarget.classList.add("active-input");
    }

    // Update currentTab
    currentTab = targetSelector.replace("#", "");
});

// --- Calculate Button ---
calculateButton.addEventListener("click", function () {
    let result;
    switch (currentTab) {
        case "distance":
            result = calculateDistance();
            break;
        case "speed":
            result = calculateSpeed();
            break;
        case "time":
            result = calculateTime();
            break;
        default:
            result = "Επιλέξτε έναν τρόπο υπολογισμού.";
    }
    elem.innerText = result;
});