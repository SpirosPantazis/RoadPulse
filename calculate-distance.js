const calculateButton = document.getElementById("calculateBtn");
const elem = document.getElementById("result");
const container = document.getElementById("btnTabs");
const inputsTabs = document.querySelectorAll(".tab-content");
const buttonTabs = container.querySelectorAll(".btn-active");
let currentTab = "distance"; // track which tab is active
// console.log(buttonTabs);
// console.log(inputsTabs);

function calculateDistance() {
    const speed = document.getElementById("speedForDistance").valueAsNumber;
    const time = document.getElementById("timeForDistance").valueAsNumber;

    if (isNaN(time) || isNaN(speed)) {
        return "Εισάγετε ένα αριθμό.";
    } else if (speed <= 0 || time <= 0) {
        return "Εισάγετε ένα θετικό αριθμό.";
    } else {
        return (speed * time).toFixed(2) + " Km";
    }

    
}

function calculateSpeed() {
    const distance = document.getElementById("distanceForSpeed").valueAsNumber;
    const time = document.getElementById("timeForSpeed").valueAsNumber;

    if (isNaN(distance) || isNaN(time)) {
        return "Εισάγετε ένα αριθμό."
    } else if (distance <= 0 || time <= 0) {
        return "Εισάγετε ένα θετικό αριθμό.";
    }  else {
        return (distance / time).toFixed(2) + " Km/h";
    }

}

function calculateTime() {
    const distance = document.getElementById("distanceForTime").valueAsNumber;
    const speed = document.getElementById("speedForTime").valueAsNumber;
    const minutes = (Math.round(((distance / speed) * 60 )% 60));
    console.log(minutes.toFixed(2));

    if (isNaN(distance) || isNaN(speed)) {
        return "Εισάγετε ένα αριθμό.";
    } else if (speed <= 0 || distance <= 0) {
        return "Εισάγετε ένα θετικό αριθμό.";
    } else {
        return Math.round(((distance / speed)).toFixed(2)) + " Hours " + minutes + " minutes";
    }
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
                

calculateButton.addEventListener("click", function showResult(e) {
    if(currentTab === "distance") { elem.innerText = calculateDistance()}
    else if(currentTab === "speed") {elem.innerText = calculateSpeed()}
    else { elem.innerText = calculateTime()}
})



